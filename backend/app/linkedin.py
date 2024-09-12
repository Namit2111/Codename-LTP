from flask import Flask, request,Blueprint
from utils.utils import get_linkedin_handle
from linkedin_api import Linkedin
from config.config import l_username, l_pass
from utils.decorator import time_it


linkedin = Blueprint('linkedin', 'linkedin',url_prefix="/api/linkedin")
api = Linkedin(l_username, l_pass)

@time_it
@linkedin.route('/get-data', methods=['POST'])
def get_linkedin():
    l_url = request.json['url']
    data = api.get_profile(get_linkedin_handle(l_url))
    
    return data
