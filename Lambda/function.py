import json
from datetime import datetime
import http.client
import mimetypes

def lambda_handler(event, context):
    
    conn = http.client.HTTPSConnection("menopause-hackster.s3.amazonaws.com")
    payload = ''
    headers = {}
    conn.request("GET", "/control.json", payload, headers)
    res = conn.getresponse()
    data = res.read()
    
    response="Not"
    if(data.decode("utf-8")[1]=="1"):
        mysleepH=23
        mysleepM=30
        myawakeH=7
        myawakeM=30
        now = datetime.now()
        hour = int(now.strftime("%H"))-5
        min = int(now.strftime("%M"))
        response="Nothing"
        time=hour*60+min
        time1=mysleepH*60*+mysleepM
        time2=myawakeH*60*+myawakeM
        
        if(time>(60*6) and time<(60*8)):
            if((time-time2)<0):
                conn = http.client.HTTPSConnection("maker.ifttt.com")
                payload = ''
                headers = {
                  'Cookie': 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
                }
                conn.request("GET", "/trigger/color3/with/key/XXXXXXXXXXXXXXXXXXXXXXXXXX", payload, headers)
                response="turn on blue"
        
        if(time>(60*20)):
            if((time1-time)<0):
                conn = http.client.HTTPSConnection("maker.ifttt.com")
                payload = ''
                headers = {
                  'Cookie': 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
                }
                conn.request("GET", "/trigger/color2/with/key/XXXXXXXXXXXXXXXXXXXXXXXXXX", payload, headers)
                response="turn off red"
            
            elif((time1-time)<15):
                conn = http.client.HTTPSConnection("maker.ifttt.com")
                payload = ''
                headers = {
                  'Cookie': 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
                }
                conn.request("GET", "/trigger/color1/with/key/XXXXXXXXXXXXXXXXXXXXXXXXXX", payload, headers)
                response="turn red 50"
            
            elif((time1-time)<45):
                conn = http.client.HTTPSConnection("maker.ifttt.com")
                payload = ''
                headers = {
                  'Cookie': 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
                }
                conn.request("GET", "/trigger/color0/with/key/XXXXXXXXXXXXXXXXXXXXXXXXXX", payload, headers)
                response="turn red 100"
        
    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }
