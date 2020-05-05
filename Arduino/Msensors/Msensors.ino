/*
 * file ADS1115_ReadVoltage.ino
 *
 * @ https://github.com/DFRobot/DFRobot_ADS1115
 *
 * connect ADS1115 I2C interface with your board (please reference board compatibility)
 *
 * The voltage value read by A0 A1 A2 A3 is printed through the serial port.
 *
 * Copyright   [DFRobot](http://www.dfrobot.com), 2016
 * Copyright   GNU Lesser General Public License
 *
 * version  V1.0
 * date  2018-01-21
 */

#include <Wire.h>
#include <DFRobot_ADS1115.h>
#include "DHT.h"
#define DHTPIN 12     // Digital pin connected to the DHT sensor
#define DHTTYPE DHT11   // DHT 11

DHT dht(DHTPIN, DHTTYPE);
DFRobot_ADS1115 ads;

int pins[13]={25,33,31,30,19,9,28,26,27,13,14,22,21};

void paralax(int num);

void setup(void) 
{
    Serial.begin(115200);
    pinMode(10,INPUT);
    for(int i=0;i<13;i++)
    {
    pinMode(pins[i],OUTPUT);
    }
        for(int i=0;i<13;i++)
    {
    digitalWrite(pins[i],LOW);
    }
    ads.setAddr_ADS1115(ADS1115_IIC_ADDRESS0);   // 0x48
    ads.setGain(eGAIN_TWOTHIRDS);   // 2/3x gain
    ads.setMode(eMODE_SINGLE);       // single-shot mode
    ads.setRate(eRATE_128);          // 128SPS (default)
    ads.setOSMode(eOSMODE_SINGLE);   // Set to start a single-conversion
    ads.init();
    dht.begin();
}

void loop(void) 
{
    if(digitalRead(10))
    {
       if (ads.checkADS1115())
    {
        int num = map(ads.readVoltage(0),0,2048,0,1023);
        float h = dht.readHumidity();
        float t = dht.readTemperature();
        if (isnan(h) || isnan(t)) {
        Serial.println(F("Failed to read from DHT sensor!"));
        return;
        }
        int htemp= int(round(h));
        int ttemp= int(round(t));
        Serial.println(num);
        Serial.println(ttemp);
        Serial.println(htemp);
        paralax(num,1);
        paralax(ttemp,2);
        paralax(htemp,3);
    }
    else
    {
        Serial.println("ADS1115 Disconnected!");
    } 
    }
}

void paralax(int num,int data){
        if(num>=1024)
        {
          num=1023;
        }
        for(int i=0;i<10;i++)
        {
          bool temp = bool((int16_t(num)>>i)& 0x0001);  
          digitalWrite(pins[i],temp);          
        }
        digitalWrite(pins[9+data],LOW);
        delay(1);
        digitalWrite(pins[9+data],HIGH);
        delay(1);
        digitalWrite(pins[9+data],LOW);
        delay(10);
}
