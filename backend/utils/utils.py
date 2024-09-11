from urllib.parse import urlparse
from utils.decorator import time_it

@time_it
def get_linkedin_handle(url):

    parsed_url = urlparse(url)
    
    path_parts = parsed_url.path.split('/')
    
    if len(path_parts) > 2:
        return path_parts[2]
    else:
        return None


