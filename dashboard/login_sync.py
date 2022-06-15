from .dashboard import DashboardActor, DashboardData, DashboardObject, DashboardResult, DashboardVerb, dashboard_connected
from ereadingtool import settings
from datetime import datetime
import json
import requests
import os


@dashboard_connected()
def sync_on_login(student, **kwargs):
    # Contemplating an exception here, what would it be?
    if not kwargs['connected_to_dashboard']:
        return
    else:
        student.dashboard_last_updated = datetime.now()
        student.save()