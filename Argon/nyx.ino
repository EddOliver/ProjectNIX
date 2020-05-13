// This #include statement was automatically added by the Particle IDE.
#include <HttpClient.h>

#include <neopixel.h>
#include <OneWire.h>
#include <Adafruit_DHT.h>
#include <MMA7660-Accelerometer.h>
#include <MQTT.h>
#include <OneWire.h>
#include "Particle.h"
#include "Particle.h"
#include "neopixel.h"

#define PIXEL_COUNT 32
#define PIXEL_PIN D2
#define PIXEL_TYPE WS2812B
#define BRIGHTNESS 3 // 0 - 255

SYSTEM_MODE(AUTOMATIC);
MMA7660 accelerometer;
Adafruit_NeoPixel strip(PIXEL_COUNT, PIXEL_PIN, PIXEL_TYPE);
unsigned int nextTime = 0;    // Next time to contact the server
HttpClient http;

http_header_t headers[] = {
    //  { "Content-Type", "application/json" },
    //  { "Accept" , "application/json" },
    { "Accept" , "*/*"},
    { NULL, NULL } // NOTE: Always terminate headers will NULL
};

http_request_t request;
http_response_t response;

// Prototypes for local build, ok to leave in for Build IDE
void colorWipe(uint32_t c, uint8_t wait);

char* string2char(String command){
    if(command.length()!=0){
        char *p = const_cast<char*>(command.c_str());
        return p;
    }
}

void setup() {
  strip.begin();
  strip.setBrightness(BRIGHTNESS);
  strip.show(); // Initialize all pixels to 'off'
  accelerometer.init();
}

void loop() {
    
    request.hostname = "menopause-hackster.s3.amazonaws.com";
    request.port = 80;
    request.path = "/control.json";
    http.get(request, response, headers);

    if(response.body.substring(5,6) == "0"){
        Particle.publish("status","deactivate", PUBLIC);
    }
    else{
    Particle.publish("status","activate", PUBLIC);
    colorWipe(strip.Color(255, 129, 0), 50); // Red
    colorWipe(strip.Color(0, 0, 0), 50); // Black
    delay(200);
    }
    
    delay(3000);

  
	float x, y, z;
    accelerometer.getAcceleration(&x, &y, &z);
    Particle.publish("X axis: ", string2char(String(x)));
    Particle.publish("Y axis: ", string2char(String(y)));
    Particle.publish("Z axis: ", string2char(String(z)));
	delay(3000);
}
// Fill the dots one after the other with a color, wait (ms) after each one
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i<strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(wait);
  }
}
