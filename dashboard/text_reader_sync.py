import requests
import json
import os
from ereadingtool.settings import DASHBOARD_STAR_ENDPOINT, DASHBOARD_ENDPOINT, DASHBOARD_LRS_ENDPOINT
from .dashboard import DashboardActor, DashboardData, DashboardObject, DashboardResultTextComplete, DashboardVerb
from .dashboard import dashboard_connected


@dashboard_connected()
def dashboard_synchronize_text_reading(text_reading, **kwargs):
    # Contemplating an exception here, what would it be?

    if not kwargs['connected_to_dashboard']:
        return
    else:
        score = {
            "raw": text_reading.score['section_scores'],
            "min": 0,
            "max": text_reading.score['possible_section_scores'],
            "scaled": 1
        }

        actor = DashboardActor(text_reading.student.user.first_name + " " + text_reading.student.user.last_name, text_reading.student.user.email,"Agent").to_dict()
        result = DashboardResultTextComplete(score, text_reading.state).to_dict()
        verb = DashboardVerb(verb_type='completed', verb_name='Completed Quiz').to_dict()
        try:
            text_url = DASHBOARD_STAR_ENDPOINT + "/text/" + str(text_reading.text.id)
            object = DashboardObject(activity_type='Activity', activity_name='Quiz', url=text_url).to_dict()
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
            