import json
from typing import Dict

from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import ObjectDoesNotExist
from django.views.decorators.vary import vary_on_cookie
from django.views.generic import TemplateView
from rjsmin import jsmin


class ElmLoadJsBaseView(TemplateView):
    template_name = "load_elm_base.html"

    # @cache_control(private=True, must_revalidate=True)
    @vary_on_cookie
    def dispatch(self, request, *args, **kwargs):
        return super(ElmLoadJsBaseView, self).dispatch(request, *args, **kwargs)

    # minify js
    def render_to_response(self, context, **response_kwargs):
        response = super(ElmLoadJsBaseView, self).render_to_response(context, **response_kwargs)

        response.render()

        response.content = jsmin(response.content.decode('utf8'))

        return response

    def get_context_data(self, **kwargs) -> Dict:
        context = super(ElmLoadJsBaseView, self).get_context_data(**kwargs)

        context.setdefault('elm', {})

        context['elm']['welcome'] = {
            'quote': False,
            'safe': True,
            'value': json.dumps(self.request.session.get('welcome', False))
        }

        return context


class ElmLoadJsView(LoginRequiredMixin, ElmLoadJsBaseView):
    def get_context_data(self, **kwargs) -> Dict:
        context = super(ElmLoadJsView, self).get_context_data(**kwargs)

        profile = None

        try:
            profile = self.request.user.student

            context['elm']['student_profile'] = {'quote': False, 'safe': True,
                                                 'value': json.dumps(profile.to_dict())}
            context['elm']['instructor_profile'] = {'quote': False, 'safe': True,
                                                    'value': 'null'}
        except ObjectDoesNotExist:
            profile = self.request.user.instructor

            context['elm']['instructor_profile'] = {'quote': False, 'safe': True,
                                                    'value': json.dumps(profile.to_dict())}
            context['elm']['student_profile'] = {'quote': False, 'safe': True,
                                                 'value': 'null'}

        context['elm']['profile_id'] = {
            'quote': False,
            'safe': True,
            'value': profile.pk
        }

        context['elm']['profile_type'] = {
            'quote': True,
            'safe': True,
            'value': profile.__class__.__name__.lower()
        }

        return context


class NoAuthElmLoadJsView(ElmLoadJsBaseView):
    pass
