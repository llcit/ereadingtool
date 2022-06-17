import requests
import json
import os
from ereadingtool.settings import DASHBOARD_STAR_ENDPOINT, DASHBOARD_ENDPOINT, DASHBOARD_LRS_ENDPOINT
from .dashboard import DashboardActor, DashboardData, DashboardObject, DashboardResult, DashboardResultMyWords, DashboardVerb
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

        try: 
            verb = DashboardVerb(verb_type_id='https://xapi.org.au/contentprofile/verb/added', verb_name='Added to Vocab').to_dict()
            result = DashboardResultMyWords(text_phrase.to_dict()).to_dict()
            text_url = DASHBOARD_STAR_ENDPOINT + "/my-words"
            dashboard_object = DashboardObject(activity_type_id='http://id.tincanapi.com/activitytype/collection-simple', activity_name='Word Collection', url=text_url).to_dict()
            dashboard_data = DashboardData(actor, result, verb, dashboard_object).to_dict()

            endpoint = DASHBOARD_ENDPOINT+'/statements?statementId='+dashboard_data['id']
            
            headers = {
                'X-Experience-API-Version' : '1.0.3',
                'Content-Type' : 'application/json',
                'Authorization' : os.getenv("DASHBOARD_TOKEN")
            }
            
            requests.put(endpoint, headers=headers, data=json.dumps(dashboard_data))
            #print(endpoint, json.dumps(headers, indent=2), json.dumps(dashboard_data, indent=2))
        except Exception as e:
            print(e)