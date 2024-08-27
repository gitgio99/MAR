import requests

# send detection result to smart-fridge server
def send_detection_result(names):
    url = ''
    headers={
        'Content-type':'application/json',
        'Accept':'application/json'
    }
    r = requests.post(url, json={'objects': names}, headers=headers)
    
    return r.status_code