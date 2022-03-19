import requests
import json
import os
from ereadingtool.settings import DASHBOARD_STAR_ENDPOINT, DASHBOARD_ENDPOINT, DASHBOARD_LRS_ENDPOINT
from .dashboard import DashboardActor, DashboardData, DashboardObject, DashboardResult, DashboardVerb
from .dashboard import dashboard_connected


@dashboard_connected()
def dashboard_synchronize_my_words(student, text_phrase, text_section, **kwargs):
    # Contemplating an exception here, what would it be?
    if not kwargs['connected_to_dashboard']:
        return
    else:
        actor = DashboardActor(student.user.first_name + " " + student.user.last_name,
                    student.user.email,
                    "Agent"
        ).to_dict()

        result = text_phrase.to_dict()

        try: 
            verb = DashboardVerb(verb_type='added', verb_name='Added word').to_dict()
            text_url = DASHBOARD_STAR_ENDPOINT + "/text/" + str(text_section.text.id)
            object = DashboardObject(activity_name='Vocab', url=text_url).to_dict()
            dashboard_data = DashboardData(actor, result, verb, object).to_dict()

            endpoint = DASHBOARD_ENDPOINT+'/statements?statementId='+dashboard_data['id']
            
            headers = {
                'X-Experience-API-Version' : '1.0.3',
                'Content-Type' : 'application/json',
                'Authorization' : os.getenv("DASHBOARD_TOKEN")
            }
            
            requests.put(endpoint, headers=headers, data=json.dumps(dashboard_data))
            print(endpoint, json.dumps(headers, indent=2), json.dumps(dashboard_data, indent=2))
        except Exception as e:
            print(e)