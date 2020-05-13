import paho.mqtt.client as paho
import time
import ssl
import sys
from auth import MiBand3
from constants import ALERT_TYPES
import os
import json
import argparse
import RPi.GPIO as GPIO
from sklearn.metrics import r2_score
import numpy as np
import datetime as dt
import requests

# Change this value for your ENDPOINT
EndPoint = "XXXXXXXXXXXXX.iot.us-east-1.amazonaws.com"

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(7,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(19,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(4,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(17,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(27,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(26,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(10,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(9,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(11,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(5,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(6,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(23,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(24,GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(16, GPIO.OUT)

lux=""
tem=""
hum=""

# Setup the credentials

caPath = "Certs/aws-iot-rootCA.crt"
certPath = "Certs/nix.cert.pem"
keyPath = "Certs/nix.private.key"

parser = argparse.ArgumentParser()
parser.add_argument("echo")
args = parser.parse_args()

hr=""
hr_array=[]

# Setup the callback functions

def check(hrs):
    gen = len(hrs)
    hrss=np.array(hrs)
    hours=gen/60
    lin=[]
    square=[]
    trip=[]
    x = []
    x1 = np.array([0, hours/2, hours])
    y1 = np.array([60,np.amin(hrss),60])
    z1 = np.poly1d(np.polyfit(x1, y1, 2))
    x2 = np.array([0, hours])
    y2 = np.array([60,np.amin(hrss)])
    z2 = np.poly1d(np.polyfit(x2, y2, 1))
    x3 = np.array([0, hours/3,(2*hours)/3, hours])
    y3 = np.array([50,np.average(hrss),np.average(hrss)-np.std(hrss),60])
    z3 = np.poly1d(np.polyfit(x3, y3, 3))

    for ge in range(gen):
        a = (ge*hours)/gen
        x.append(a)
        square.append(z1(a))
        lin.append(z2(a))
        trip.append(z3(a))
        
    print("Calculate R2")
    ss = r2_score(hrss, square)
    sl = r2_score(hrss, lin)
    st = r2_score(hrss, trip)

    if(ss>sl and ss>st):
        return "0"
    elif(sl>ss and sl>st):
        return "1"
    elif(st>sl and st>ss):
        return "2"

def ReadSensors():
	global lux
	global tem
	global hum
	GPIO.output(16, True)
	time.sleep(0.0001)
	GPIO.output(16, False)
	temp = 0
	while True:
		if(temp==3):
			break
		while GPIO.input(6):
			num = GPIO.input(7)*1+GPIO.input(19)*2+GPIO.input(4)*4+GPIO.input(17)*8+GPIO.input(27)*16+GPIO.input(26)*32+GPIO.input(10)*64+GPIO.input(9)*128+GPIO.input(11)*256+GPIO.input(5)*512
			print("Lux:  "+str(num))
			temp=temp+1
			lux = str(num)
			while GPIO.input(6):
				...
		while GPIO.input(23):
			num = GPIO.input(7)*1+GPIO.input(19)*2+GPIO.input(4)*4+GPIO.input(17)*8+GPIO.input(27)*16+GPIO.input(26)*32+GPIO.input(10)*64+GPIO.input(9)*128+GPIO.input(11)*256+GPIO.input(5)*512
			print("Temp: "+str(num))
			temp=temp+1
			tem=str(num)
			while GPIO.input(23):
				...
		while GPIO.input(24):
			num = GPIO.input(7)*1+GPIO.input(19)*2+GPIO.input(4)*4+GPIO.input(17)*8+GPIO.input(27)*16+GPIO.input(26)*32+GPIO.input(10)*64+GPIO.input(9)*128+GPIO.input(11)*256+GPIO.input(5)*512
			print("Hum:  "+str(num))
			temp=temp+1
			hum = str(num)
			while GPIO.input(24):
				...

# This function trigger if the client connected
def on_connect(client, userdata, flags, rc):
    print("Connection returned result: " + str(rc) )
    #client.subscribe("#" , 1 ) # Wild Card

# This function trigger every time we receive a message from the platform
def on_message(client, userdata, msg):
    print("topic: "+msg.topic)
    print("payload: "+str(msg.payload))
    
# This function trigger when we publish  
def on_publish(client, obj, mid):
    print("Data Sent")

def l(x):
    global hr
    hr=str(x)
    
def heart_beat():
    print("Body:")
    band.start_raw_data_realtime(heart_measure_callback=l)
    
# This function trigger when we subscribe to a new topic  
def on_subscribe(client, obj, mid, granted_qos):
    print("Subscribed: " + str(mid) + " " + str(granted_qos))

MAC_ADDR = args.echo
mqttc = 0
band = 0
inside =0

while 1:
    try:
        print('Attempting to connect to ', MAC_ADDR)
        band = MiBand3(MAC_ADDR, debug=True)
        band.setSecurityLevel(level = "medium")

        # Authenticate the MiBand
        if len(sys.argv) > 2:
            if band.initialize():
                print("Initialized...")
            band.disconnect()
            sys.exit(0)
        else:
            band.authenticate()

        mqttc = paho.Client()
        print("Bt: OK")
        # We prepare all callback functions and credentials.
        mqttc.on_connect = on_connect
        mqttc.on_message = on_message
        mqttc.on_publish = on_publish
        mqttc.on_subscribe = on_subscribe
        mqttc.tls_set(caPath, certfile=certPath, keyfile=keyPath, cert_reqs=ssl.CERT_REQUIRED, tls_version=ssl.PROTOCOL_TLSv1_2, ciphers=None)
        mqttc.connect(EndPoint, 8883, keepalive=60)
        rc = 0

        # We subscribe to the topic we use to communicate from the Webapp to the Raspberry
        mqttc.subscribe('/Sensors')

        # This variable is responsible for counting the number of cycles to take a photo every 30 seconds.
        tick = 0

        print("Mqtt :Ok")

        inside = 1
        counter =0
        counter1 =0
        flag = 0
        sleep=0
        start = time.time()
        while rc == 0:
            rc = mqttc.loop()
            if((time.time()-start) > 60):
                start = time.time()
                print("Enviroment:")
                ReadSensors()
                heart_beat()
                hr_array.append(int(hr))
                print("Hr: "+ str(hr))
                print("Len: "+str(len(hr_array)))
                temp='{"Device":"Device 1","hr":"'+hr+'","lux":"'+lux+'","temp":"'+tem+'","hum":"'+hum+'"}'
                mqttc.publish("/data",temp)
                print("Wait " + str(60 - round(time.time() - start)) + " Seconds More")
                hr = int(hr)
                if(hr<60 and sleep==0):
                    counter=counter+1
                elif(hr>=60 and sleep==0):
                    counter = 0
                elif(hr>=60 and sleep==1):
                    counter1=counter1+1
                elif(hr<60 and sleep==1):
                    counter1=0

                if(counter > 10 and sleep==0):
                    sleep=1
                    counter1=0
                    hr_array=[]
                    print("Sleep")

                elif(counter1>10 and sleep==1):
                    sleep=0
                    counter=0
                    counter1=0
                    flag = 1
                    print("Awaken")

            if(flag):
                msg = [str(check(hr_array)),str(len(hr_array)/60)]
                mqttc.publish("/sleep_data",str(msg))
                hr_array=[]
                flag = 0
            
            # Excecute the bulbs lambda
            url = "https://YOURAPI.execute-api.us-east-1.amazonaws.com/lambda"
            payload = {}
            headers= {}
            response = requests.request("GET", url, headers=headers, data = payload)
            print(response.text.encode('utf8'))

        print("rc: " + str(rc))

    except KeyboardInterrupt:
        print(" ")
        print("Mqtt Disconnect")
        print("Band Disconnect")
        break

    except:
        print("Mqtt Reconnect")
        print("Band Reconnect")
        if(inside):
            mqttc.disconnect()
