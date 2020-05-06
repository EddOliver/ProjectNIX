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

EndPoint = "a1nic3lezioefw-ats.iot.us-east-1.amazonaws.com"
caPath = "Certs/aws-iot-rootCA.crt"
certPath = "Certs/nix.cert.pem"
keyPath = "Certs/nix.private.key"

parser = argparse.ArgumentParser()
parser.add_argument("echo")
args = parser.parse_args()

hr=""

# Setup the callback functions

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
    if(msg.topic=='/Sensors'):
        print("Enviroment:")
        ReadSensors()
        heart_beat()
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

while 1:
    try:
        # We prepare all callback functions and credentials.
        mqttc.on_connect = on_connect
        mqttc.on_message = on_message
        mqttc.on_publish = on_publish
        mqttc.on_subscribe = on_subscribe
        mqttc.tls_set(caPath, certfile=certPath, keyfile=keyPath, cert_reqs=ssl.CERT_REQUIRED, tls_version=ssl.PROTOCOL_TLSv1_2, ciphers=None)
        mqttc.connect(EndPoint, 8883, keepalive=60)
        rc = 0

        # We subscribe to the topic we use to communicate from the Webapp to the Jetson
        mqttc.subscribe('/Sensors')

        # This variable is responsible for counting the number of cycles to take a photo every 30 seconds.
        tick = 0

        print("Mqtt :Ok")

        start = time.time()
        while rc == 0:
            rc = mqttc.loop()
            if((time.time()-start) > 60):
                start = time.time()
                print("Enviroment:")
                ReadSensors()
                heart_beat()
                print("Hr: "+ str(hr))
                temp='{"Device":"Device 1","hr":"'+hr+'","lux":"'+lux+'","temp":"'+tem+'","hum":"'+hum+'"}'
                mqttc.publish("/data",temp)
                print("Wait " + str(60 -round(time.time()-start)) + " Seconds More")
            
        print("rc: " + str(rc))
        
    except Exception as msg:
        mqttc.disconnect()
        band.stop_realtime()