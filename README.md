# ProjectNIX

Complete IoT and domotics platform that tracks the patient’s sleep via three main devices, displays the data and gives recomendations.

<img src="https://i.ibb.co/BcZXy83/5eb3c8003b9be-1588840517-5eb3c8003b968-1.png" width="1000">

# Table of contents

* [Introduction](#introduction)
* [Materials](#materials)
* [Connection Diagrams](#connection-diagrams)
* [AWS Setup](#aws-setup)
* [Grove AI Hat Setup](#grove-ai-hat-setup)
* [RaspberryPi Setup](#raspberrypi-setup)
* [Argon Setup](#argon-setup)
* [Webpage Setup](#webpage-setup)
* [Epic Demo](#epic-demo)
* [Future Rollout](#future-rollout)
* [Studies supporting our thesis](#studies-supporting-our-thesis)
* [References](#references)
* [Apendix](#apendix-a)

# Introduction and inspiration:
Menopause is defined retrospectively as the time of the final menstrual period, followed by 12 months of amenorrhea (when menstrual bleeding stops); post-menopause describes the period following the final menses.

The signs and symptoms of menopause include central nervous system-related disorders; metabolic, weight, cardiovascular and musculoskeletal changes; urogenital and skin atrophy; and sexual dysfunction; Those hormonal changes contribute to one specific symptom, called Insomnia.

49.6% of the worldwide population is female, 100% of this women will have eventually menopause symptoms also 4 years before mensis cease, Natural menopause occurs around 51 years worldwide; the average life expectancy at birth is 72 years, Therefore, women are likely to spend almost 20-25 years in menopause.

<img src="https://hackster.imgix.net/uploads/attachments/1118376/image_VEjG1sF9wO.png?auto=compress%2Cformat&w=740&h=555&fit=max">

According to the National Sleep Foundation, approximately 61% of menopausal women have sleep problems.

Insomnia and mood disorders occur in 40–60% of women during the menopausal transition.

According to several articles and reports, including from Mayo Clinic and studies from universities such as Harvard, women with insomnia are more likely than others to report problems such as anxiety, stress, tension, and depressive symptoms, memory issues, and focusing problems. Repeatedly lack of sleep increases the risk of health problems such as high blood pressure, heart problems, diabetes and chronic pain. In worst cases they can also trigger more severe mental problems,as bipolar disorders, schizophrenia, panic disorder or OCD.

<img src="https://hackster.imgix.net/uploads/attachments/1118379/image_rqGcnfsThN.png?auto=compress%2Cformat&w=740&h=555&fit=max">

There´s available hormone therapy, that involves the administration of synthetic estrogen and progesterone to replace a woman's depleting hormone levels and thus alleviate menopausal symptoms. However, HT has been linked to various contraindications and several risks. Some of the contraindications are: History of breast and endometrial cáncer; liver disease; Hypertriglyceridemia; Thromboembolic disorders; Undiagnosed vaginal bleeding; Endometriosis; Fibroids

Some of the adverse effects are: Nausea; Bloating, weight gain; fluid retention; Mood swings ; Breakthrough bleeding and breast tenderness

Also we have to mention the potential risks of : breast and Endometrial cancer; uterine hyperplasia and its cancer; thromboembolism, biliary pathology and strokes.

Now, let's start with the crux of the problem, as you can understand, not every woman can start hormonal therapy, and also if they can, they will probably suffer the side effects and take the risks of different types of cancer.

By the year 2025, there will be 1 billion women globally experiencing the symptoms of menopause, a number too big to ignore. A huge part of the world’s workforce will be experiencing these symptoms and will lower their productivity, in which all sectors will be involved, it also can last up to ten years to take into consideration the economics of the problem.

<img src="https://hackster.imgix.net/uploads/attachments/1118380/image_eQdbJPRQN4.png?auto=compress%2Cformat&w=740&h=555&fit=max">

And as we know women have the greatest influence on the marketing and purchasing power globally, so solutions of this kind are sure to be a hit.

This sector is projected to be over $50B dollars by 2025. But there are very limited non drug solutions in the market.

If we summarize all that we find that there are two things that are crucial in easing those symptoms and improving the quality of life of women in this stage:

1. To improve sleep

AND

2. To routinely exercise.

Bad sleep creates a negative feedback loop for women that exacerbates with every passing day. Only by improving sleep and tracking exercise we would be attacking not one or two symptoms, but transforming that feedback loop into a positive one that improves the well being of the patient.


# Materials:

Hardware:
- RaspberryPi 4.                                       x1.
https://www.amazon.com/dp/B07TC2BK1X/ref=cm_sw_em_r_mt_dp_U_sInSEb8EJEPCB
- Seeed Studio Grove AI HAT.                           x1.
https://www.amazon.com/dp/B07SQ65MX7/ref=cm_sw_em_r_mt_dp_U_XJnSEb54YD1PC
- Grove - Light Sensor v1.2                            x1.
https://seeeddoc.github.io/Grove-Light_Sensor_v1.2/
- Grove - Temperature & Humidity Sensor (DHT11)        x1.
https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html
- 32 GB MicroSD Card.                                  x1.
https://www.amazon.com/dp/B06XWN9Q99/ref=cm_sw_em_r_mt_dp_U_XTllEbK0VKMAZ
- 5V 3A Type-C USB AC/DC                               x1.
https://www.amazon.com.mx/dp/B084KZRY7Q/ref=cm_sw_em_r_mt_dp_U_rOnSEbNV83B87
- MiBand 3.                                            x1.
https://www.amazon.com/dp/B07VSPQMNH/ref=cm_sw_em_r_mt_dp_U_y-ESEbC65R0BG
- Particle Argon.                                      x1.
https://docs.particle.io/argon/
- Matrix RGB NeoPixel 4x4                              x2.
// Hardware del dok

Software:
- Raspbian Buster Lite:
https://www.raspberrypi.org/downloads/raspbian/
- Arduino IDE:
https://www.arduino.cc/en/Main/Software
- NodeJS:
https://nodejs.org/
- ReactJS:
https://reactjs.org/
- balenaEtcher:
https://www.balena.io/etcher/
- Particle IDE:
https://console.particle.io/
- AWS:
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html

# Solution
Our solution is a complete IoT and domotics platform that tracks the patient’s sleep via three main devices, they display the data and give notifications and recommendations to the patient and it is compatible with Amazon Alexa.

<img src="https://hackster.imgix.net/uploads/attachments/1119303/p5_gm21Q3b4Ij.png?auto=compress%2Cformat&w=740&h=555&fit=max">

There is one single item that has proven through several clinical studies to improve sleep considerably and most people don´t know of its benefits:

- The sleep mask: Here, of course with the help of my teammates and the testimony of several women, some that are reaching or have past the age of menopause, we designed a modern IoT enabled sleep mask that tracks your sleep quality, movement, temperature and humidity via two main sensors and uses flashes of light from a couple of light sources.

NOTE: Blue LED Lights are dangerous for the eye, namely the cones and rods and the Retina, so in the sleep mask we only use RED and Yellow tones.

See: https://www.macular.org/ultra-violet-and-blue-light

<img src="https://hackster.imgix.net/uploads/attachments/1119286/p3_wmdGd5PAQr.png?auto=compress%2Cformat&w=740&h=555&fit=max">

The idea comes from a study in Stanford that demonstrated that flashing lights of certain colors and wavelengths can help fix our circadian rhythm and improve sleep considerably. (16, 17, 18, 19) All the information and the cycle is sent to our platform to track and use that data in order to perform domotics and follow up with recommendations.

Then for physical exercise and to track heart rate we are using a commercial fitness Band that we hacked through an embedded computer to receive and send information to our platform in order to complete the service. Heart rate is perhaps the most important variable we are tracking as it can give us an entry point to possibly pre-diagnose certain conditions and will enable the system to improve much more.

<img src="https://hackster.imgix.net/uploads/attachments/1119501/p6_2AWl3NcxP8.png?auto=compress%2Cformat&w=740&h=555&fit=max">

The last device is a hub with more sensors which in turn track now the patient’s environment in order to perform the last step which is domotics.

<img src="https://hackster.imgix.net/uploads/attachments/1119288/p1_zWB2HvHeo2.png?auto=compress%2Cformat&w=740&h=555&fit=max">

There are probably close to 100 million Amazon alexa enabled devices already in the US alone, which is the reason why we developed an alexa app that synchronizes with the platform and through other IoT devices such as these IoT bulbs, thermostat, and blinds we can, in effect control the surrounding of the person and create an environment around them that transforms into the proper one, to sleep.

<img src="https://hackster.imgix.net/uploads/attachments/1119289/p2_SceszTRwzH.png?auto=compress%2Cformat&w=740&h=555&fit=max">

Now let's talk more about the app. It’s interface is a progresive web app created with react that on its homepage shows you immediately a wellness score derived from all the data we are gathering, notice the Sharing capabilities of it as we know that these kind of apps make sense in this day and age whenever it is gamified and you can share and compete with others.

<img src="https://hackster.imgix.net/uploads/attachments/1118381/image_abAj2PKwqW.png?auto=compress%2Cformat&w=740&h=555&fit=max">

Now we go to our very animated dashboard which indicates all the variables we are tracking in real time and includes two big sections regarding Physical activity and sleep quality.

<img src="https://hackster.imgix.net/uploads/attachments/1118382/image_GqnbwQ4h4F.png?auto=compress%2Cformat&w=740&h=555&fit=max">

All this data is taken from the sensors both on the mask, watch and band to get to simple indicators. Then we have the recommendations tab in which you will be able to control in effect the level of automation, and hours for your sleep. A possible business model would be sell the hardware and a Freemium model on the software and platform.

<img src="https://hackster.imgix.net/uploads/attachments/1118383/image_kv3hzmmLfR.png?auto=compress%2Cformat&w=740&h=555&fit=max">

You can check the app via this link: http://menopause-hackster.s3-website-us-east-1.amazonaws.com/

If you are a judge of this contest, send us a message and we will show you a real time demo via Zoom of the sensors and system working!

Hope you liked our solution as much as we like to create the idea, thank you and take care of those symptoms by trying NYX.

# Connection Diagrams:

Full System:

<img src="https://hackster.imgix.net/uploads/attachments/1119574/image_yDdaIwjCzz.png?auto=compress%2Cformat&w=740&h=555&fit=max">

RaspberryPi Modules:

<img src="https://i.ibb.co/v3y7znW/esquema1.png" width="800">

RaspberryPi Connection:

<img src="https://i.ibb.co/qB0Qy4H/Esquemacomp.png" width="800">

System Connection:

<img src="https://i.ibb.co/ZHrz7Yq/squematic-1.png" width="800">

Argon for the Sleep mask:

<img src="https://hackster.imgix.net/uploads/attachments/1119336/image_RCsIkXiyWr.png?auto=compress%2Cformat&w=740&h=555&fit=max">

# Building the sleepmask:
Check:
https://www.hackster.io/340673/nyx-project-3d8ee3#toc-building-the-sleepmask-5

# AWS Setup:

AWS works through roles, these roles are credentials that we create so that the services can communicate with each other, in order to carry out all our integration we need to create a role that allows the effective transmission of all services, therefore that will be the first thing To make.

Note: always start here when doing a project with AWS.

## IAM:

- Enter the IAM console.

<img src="https://i.ibb.co/CHBndXs/image.png" width="1000">

- Enter through the role tab and click "Create role".

<img src="https://i.ibb.co/1fm8rhr/image.png" width="1000">

- Create a role focused on the IoT platform.

<img src="https://i.ibb.co/42Vv4dY/image.png" width="1000">

- Press next till review.

<img src="https://i.ibb.co/f22SfJ0/image.png" width="1000">

- Now we have to add the additional permissions to the Role, in the roles tab enter the role we just created and press the Attach policies button.

<img src="https://i.ibb.co/z5kVpXR/image.png" width="1000">

- Inside policies add the following:

  - AmazonDynamoDBFullAccess
  - AmazonS3FullAccess

<img src="https://i.ibb.co/7r0KcNJ/image.png" width="1000">

- Once that is finished, now we can start configuring the Rule within AWS IoT Core.

# IoT Things:

Since we have all our platform ready, we have to create the accesses to communicate with it. 

- First we have to access our AWS console y look for the IoT core service:

<img src="https://i.ibb.co/KVbtQLR/image.png" width="600">

- Obtain your AWS endpoint, save it.

<img src="https://i.ibb.co/ZYwrdfR/image.png" width="600">

- In the lateral panel select the "Onboard" option and then "Get started".

<img src="https://i.ibb.co/gmKxc7P/image.png" width="600">

- Select "Get started".

<img src="https://i.ibb.co/XSxSxbF/image.png" width="600">

- At "Choose a platform" select "Linux/OSX", in AWS IoT DEvice SDK select "Python" and then click "Next".

<img src="https://i.ibb.co/JR69Fdd/image.png" width="600">

- At Name, write any name, then click on "Next step".

<img src="https://i.ibb.co/NNLqqM0/image.png" width="600">

- At "Download connection kit for" press the button "Linux/OSX" to download the credential package (which we will use later) and click on "Next Step".

<img src="https://i.ibb.co/RHVTRpg/image.png" width="600">

- Click "Done".

<img src="https://i.ibb.co/N9c8jbG/image.png" width="600">

- Click "Done".

<img src="https://i.ibb.co/DtBxq0k/image.png" width="600">

- On the lateral bar, inside the Manage/Things section we can see our thing already created. Now we have to set up the policy of that thing for it to work without restrictions in AWS.

<img src="https://i.ibb.co/dQTFLZY/image.png" width="600">

- At the lateral bar, in the Secure/Policies section we can see our thing-policy, click on it to modify it:

<img src="https://i.ibb.co/jThNgtc/image.png" width="600">

- Click on "Edit policy document".

<img src="https://i.ibb.co/gV0tMtf/image.png" width="600">

Copy-paste the following text in the document and save it.

    {
    "Version": "2012-10-17",
    "Statement": [
        {
        "Effect": "Allow",
        "Action": "iot:*",
        "Resource": "*"
        }
    ]
    }

<img src="https://i.ibb.co/ydtTqB2/image.png" width="600">

## DynamoDB

This is how to configure the Rules to connect the rest of AWS services.

- Once we receive the data to our AWS IoT Core, we will configure the Rules to connect the following services.

<img src="https://i.ibb.co/zhzZXGh/Create.png" width="1000">

- Set any name for the Rule.

<img src="https://i.ibb.co/Rj05MW5/image.png" width="1000">

- In the SQL Query we will place our topic.

<img src="https://i.ibb.co/6W5F115/Screen-Shot-2020-05-05-at-17-20-52.png" width="1000">

- The first rule we are going to create will be to save all the data in a DynamoDB.

<img src="https://i.ibb.co/nRm3WNy/image.png" width="1000">

- Press "Create a new resource" to create the table where we will save the data.

<img src="https://i.ibb.co/Hn4TYS2/image.png" width="1000">

- For our table we will use the following parameters, I suggest that you use these specifically, since at production level all the device numbers will be different and in the "Time" column we are going to implement a special TIMESTAMP function.

<img src="https://i.ibb.co/ZWR8GcG/image.png" width="1000">

- Once the resource is created we return to:

<img src="https://i.ibb.co/qWTw8Kx/image.png" width="1000">

The Sort Key value special function is:

    ${parse_time("yyyy.MM.dd G 'at' HH:mm:ss z", timestamp() )}

- Once this is finished, we will have finished the first rule. In this case, because the rule for the lambda uses a different SQL query, we will no longer add any more actions to this rule.

## S3:

We will have to create an S3 bucket that will serve as storage of the sensor data and as web page hosting.

<img src="https://i.ibb.co/8r1mTKV/Screen-Shot-2020-05-05-at-16-55-49.png" width="1000">

The names of all the buckets in AWS are unique and unique, so try simple names first and then increase the complexity if they are not available.

In our case it is called: menopause-hackster

<img src="https://i.ibb.co/k27BWwf/Screen-Shot-2020-05-05-at-17-02-19.png" width="1000">

Now we have to configure the public access of the bucket to be able to access the data from the web page and the CORS access to be able to call the data by API.

We configure the public access of the bucket in this way:

<img src="https://i.ibb.co/rZgR3hN/Screen-Shot-2020-05-05-at-17-05-14.png" width="1000">

Policy:

    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AllowPublicReadAccess",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::YOURBUCKETNAME/*"
            }
        ]
    }

We enable CORS access as follows:

<img src="https://i.ibb.co/zZCLFsc/Screen-Shot-2020-05-05-at-17-05-27.png" width="1000">

The action that we are going to create so that the data read by the sensors reaches S3 will be the following.

<img src="https://i.ibb.co/QrNH8D2/Screen-Shot-2020-05-05-at-17-22-20.png" width="1000">

# Grove AI Hat Setup:

## Grove AI hat prerequisites:

NOTE: We used the Grove AI Hat because we did not have the Raspberry Grove shield and we had this one at hand, however I saved programming time for the RaspberryPi since we had experience working with this shield.

Configure the Arduino Board Manager URL.

Click File → Preference, copy the following URL into the Additional Boards Manager URLs

    https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_seeeduino_boards_index.json

<img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-Arduino-1.jpg" width="800">
<img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-Arduino-2.jpg" width="800">

Add the Grove AI HAT board into Arduino IDE.
Click Tools → Board:"xxxx" →Boards Manager, tap K210 into the search bar.
Find the Grove AI HAT for Edge Computing by Seeed Studio, click Install button.

<img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-Arduino-3.jpg" width="800">
<img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-Arduino-4.jpg" width="800">

When the installation is complete, you can find the Seeed K210 Pi board in the Arduino board list.

<img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-Arduino-5.jpg" width="800">

Also, to use the Grove AI HAT in the Arduino IDE, you need to select the K-flash Programmer at the Arduino Programmer list.

<img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-Arduino-6.jpg" width="800">

Install the libraries:

Open the demo at Sketch → Include Library → Add .ZIP Library...

<img src="https://i.ibb.co/bB7FnbW/Captura.png" width="800">

Add the two libraries in the Arduino / Libraries folder. Both are specifically designed to operate the sensors with this board.

- ADS1115-master.zip
- DHT_sensor_library.zip

<img src="https://i.ibb.co/JvM9jjB/Screen-Shot-2020-05-04-at-22-47-06.png" width="800">

Open the Arduino / Msensors / Msensors.ino file and if the whole installation worked correctly, you should see a correct compilation window.

<img src="https://i.ibb.co/hRrhtN1/Capturla.png" width="800">

## Communicating the shield with the Raspberry Pi:

Communicating the shield with the raspberry pi was a little laborious due to the following factors:

The serial ports of the raspberry and the Hat are connected Tx -> Tx and Rx -> Rx.

The I2C port of both is correctly connected but since the Analog sensor requires I2C in the Hat as Master, we could not communicate with the raspberry that can only function as master.

SPI communication is used by the micro controller for programming, so it was not an option either.

However, the Raspberry and the Microcontroller buy almost all the pins as you can see in the image.

<img src="https://i.ibb.co/NpWY8Fj/Screen-Shot-2020-05-04-at-23-00-24.png" width="800">

So it occurred to us to create a protocol where the data was passed in parallel from the Hat to the Raspberry, we decided to call it paralax, since the hat is a shield, it only needs to be programmed, in the codes of the Hat and the Raspberry already We carry out the corresponding programming, however they are connected by software.

| HAT | Direction | RPI |
| ---| ---------  |---  |
| 25 | -------->  | 7   |
| 33 | -------->  | 19  |
| 31 | -------->  | 4   |
| 30 | -------->  | 17  |
| 19 | -------->  | 27  |
| 9  | -------->  | 26  |
| 28 | -------->  | 10  |
| 26 | -------->  | 9   |
| 27 | -------->  | 11  |
| 13 | -------->  | 5   |
| 14 | -------->  | 6   |
| 22 | -------->  | 23  |
| 21 | -------->  | 24  |
| 10 | <--------  | 16  |

Every time pin 16 of the raspberry sends a 1, the microcontroller sends all the information to the raspberry in parallel and stores it in 3 variables.

# RaspberryPi Setup:

## RaspberryPi prerequisites:

Download the operating system of the Raspberry Pi.

- To download the operating system of the Raspberry enter the following link:
- Link: https://www.raspberrypi.org/downloads/raspbian/
- Download the lastest version.

Flash the operating system in the SD.

Software: https://www.balena.io/etcher/

- Through Etcher flash the raspberry operating system but DO NOT put it inside the raspberry yet.

Create a wpa_supplicant for the connection of the raspberry to the internet.

- Since you have flashed the operating system, copy and paste the files from the "RaspberryPiFiles" folder directly into the SD card.
- Then open the "wpa_supplicant.conf" file with a text editor
- In between the quotes in the ssid line write your wifi network and in psk the network key.

        country = us
        update_config = 1
        ctrl_interface =/var/run/wpa_supplicant

        network =
        {
        scan_ssid = 1
        ssid = "yourwifi"
        psk = "yourpassword"
        }


- We save the changes and remove the SD from the PC.

We then place the SD in the raspberry and connect it to its power source.

- The power source of a Raspberry Pi is recommended to be from 5 volts to 2.5A minimum. We recommend the official ower supply for the Raspberry pi.

Once the Raspberry has already started, we need to access it through SSH or with a keyboard and a monitor.

- If you want to access it through SSH we need your IP.
- In order to analyze your network and obtain the number we will have to use one of the following programs.
- Advanced IP Scanner (Windows) or Angry IP Scanner program (Windows, Mac and Linux).
- In the following image you can see how we got the Raspberry IP.

<img src="https://i.ibb.co/q9BM6dP/image.png"> 

Connect the raspberry with ssh.

- To connect using ssh to the raspberry we need the Putty program.
- Link: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
- This program will let us access the command console of the raspberry.
- In Linux, just open the terminal and put the following command.

        ssh pi@RASPBERRYIP

<img src="https://i.ibb.co/PxP86Xz/terminal.png">

- Password: “raspberry”

<img src="https://i.ibb.co/QpWj18S/image.png">

First, we will install the necessary libraries for our program to work.

- For it to work we just have to input the following command.

      sudo apt-get update
      sudo apt-get install python3-pip libglib2.0-dev libatlas-base-dev git -y
      sudo pip3 install bluepy Crypto crc16 paho-mqtt sklearn numpy

- Download the folder with our program

       git clone https://github.com/EddOliver/ProjectNIX

Rename the certificates you downloaded from the AWS folder to "nix.private.key" and "nix.cert.pem" and place them in the "RaspberryScipt /Certs" folder.

<img src="https://i.ibb.co/tz6WH89/Screen-Shot-2020-05-06-at-23-15-42.png">

- Enter the Covital/RpiScript folder.

      cd Covital/RpiScript

- We will have to configure the IBM IoT Platform credentials in our main.py program, so we open the editor of the Rpi Zero with the following command.

      sudo nano main.py

- Change the following value ​​for yours at the beginning of the code:

        EndPoint = "XXXXXXXXXXXXXXXXX.iot.us-east-1.amazonaws.com"

- To save the changes in the editor press the command "ctrl + o", Enter and then "ctrl + x", enter

With this preparation, the last thing we need to do is obtain the MAC-Address of our MiBand3, we will obtain this by executing the following command on the RaspberryPi.

      sudo hcitool lescan

<img src="https://i.ibb.co/1MfbWmZ/image.png" width="1000">

- To activate the code, execute the following command:

      sudo python3 main.py YOURMAC

- If everything works correctly you will see the following:

<img src="https://i.ibb.co/mC1fy47/5eb390c1bafde-1588826403-5eb390c1baf7d.png" width="1000">

## Raspberry software features:

The program that runs on the raspberry performs the following functions:

- Reading the sensors from the Shield.

Explanation Here: [Ai Hat](#communicating-the-shield-with-the-raspberry-pi)

- Reading the HR from the MiBand3.

<img src="https://i.ibb.co/n7khhG5/800-600-white-5eb3956d9ce62.png" width="1000">

- Direct communication to AWS from AWSIoT Rules.

<img src="https://i.ibb.co/k4J2w35/800-600-white-5eb3956d9ce62-1.png" width="1000">

- Analysis of the quality of sleep as a function of sleeping hours and HR data.

The quality of sleep is divided into 3 known patterns that indicate whether you have slept well or poorly, the references to these patterns and more references

We perform a mathematical algorithm that through giving the values recorded in the night of the HR, we can approximate which curve is more similar and know if the person has slept well or not, more details [Here](#appendix-a) and References.

Ideal curve (good):

<img src="https://d1a0efioav7lro.cloudfront.net/wp-content/uploads/2020/02/06220039/The-Hammock.png" width="1000">

The person eats a lot before sleeping (bad):

<img src="https://d1a0efioav7lro.cloudfront.net/wp-content/uploads/2020/02/06220033/The-Downward-Slope.png" width="1000">

Extreme physical or mental fatigue or stress (bad).

<img src="https://d1a0efioav7lro.cloudfront.net/wp-content/uploads/2020/02/06220103/The-Hill.png" width="1000">

Here is a sample of the HR of our teammate Victor showing that one of the sleep patterns suffers from stress.

<img src="https://i.ibb.co/RY3h4DK/Screen-Shot-2020-05-07-at-16-41-15.png" width="1000">

You can test this value yourself by opening the jupyter notebook in the "Google Colab" folder.

- Automatic reconnection upon sensor reading error or disconnection of the clock.

<img src="https://i.ibb.co/KWmj6Y7/5eb3af52cb740-1588834131-5eb3af52cb6ec.png" width="1000">

- Sleep and awake state detection via HR.

<img src="https://i.ibb.co/4fQqxXW/Untitled-Diagram.png" width="1000">

# Webpage Setup:

URL: http://menopause-hackster.s3-website-us-east-1.amazonaws.com/

All the files of the web page are in the webpage folder and you can open it locally with the following process:

Install the following program:

- Link: https://nodejs.org/es/

Enter the webapp folder.

<img src="https://i.ibb.co/4fhJ9rR/image.png" width="600">

Once there, open the terminal or in the case of windows cmd.

NOTE: If you are using windows just type cmd on the search bar.

<img src="https://i.ibb.co/RDr37Vk/image.png" width="600">

In the cmd or terminal write the next commmand.

    npm install

<img src="https://i.ibb.co/q9JdqRP/image.png" width="600">

After all the dependencies ave been installed, at the console write:

    npm start

<img src="https://i.ibb.co/TbxvFzS/ezgif-com-video-to-gif-3.gif" width="600">

# Argon Setup:

First we have to have an account created in:

https://www.particle.io/

Once there we have to access the WebIDE:

https://build.particle.io/

<img src="https://i.ibb.co/sbTRKrb/image.png" width="800">

All libraries can be added from the libraries tab.

<img src="https://i.ibb.co/YbkSyFT/image.png" width="800">

## How does it work:

In this case, the control is done by making a request to our S3 bucket every 3 seconds and checking if an activation has been made.

    request.hostname = "menopause-hackster.s3.amazonaws.com";
    request.port = 80;
    request.path = "/control.json";
    http.get(request, response, headers);

    if(response.body.substring(5,6) == "0")
    {
        Particle.publish("status","deactivate", PUBLIC);
    }

    else
    {
        Particle.publish("status","activate", PUBLIC);
        colorWipe(strip.Color(255, 129, 0), 50); // Red
        colorWipe(strip.Color(0, 0, 0), 50); // Black
        delay(200);
    }

# Light Bulb Control:

This setting works for bulbs compatible with SmartHome and MagicLight Bulbs (our case).

First we have to have our bulbs configured.

https://www.magiclightbulbs.com/pages/how-to-set-up-magiclight-wifi-bulb

And you'll have to have an IFTTT account:

https://ifttt.com/

Since we have everything configured we do the following:

- We create a new function:

<img src="https://i.ibb.co/y05kSb9/image.png" width="800">

We connect these two services:

- Webhooks (It allows us to control the lights through GET request):

<img src="https://i.ibb.co/mydTmLj/image.png" width="800">

- MagicHue:

<img src="https://i.ibb.co/svpvyRW/image.png" width="800">

We can see that we have all these options to modify what we want the lights to do, in this case we use the option of color, intensity and on / off.

<img src="https://i.ibb.co/nMHhFxd/image.png" width="800">

Our program does the following.

| State | color | Intensity | Before Sleep | After Sleep |
| ------| ----- | ----------| -------------| ----------- |
|  ON   | Red   | 75 %      |  45 min      | N/A         |
|  ON   | Red   | 25 %      |  15 min      | N/A         |
|  OFF  | N/A   | 0 %       |  0 min       | N/A         |
|  ON   | Blue  | 100 %     |  N/A         | 0 min       |

The execution of this is controlled by means of a lambda in AWS controlled by means of AWS IoT, this is activated every time we send any data from the raspberry to the topic / Bulbs, by means of an IoT Rule as previously seen.

<img src="https://i.ibb.co/QH19w7B/image.png" width="800">

In this case:

mysleepH: time to sleep 
mysleepM: minute to sleep 
myawakeH: time to get up 
myawakeM: minute to get up


## Webpage Features:

URL: http://menopause-hackster.s3-website-us-east-1.amazonaws.com/

Main Page:

This page is intended to be a summary of your performance when sleeping and to stay active, reflected in a score that takes into account the quality of sleep, physical activity and hours of sleep. We also give the option of being able to share your performance on social networks to demonstrate your goals!

<img src="https://i.ibb.co/F0NZ04S/image.png" width="800">

Dashboard:

We have a dashboard with all the measurements we make from the sensors, in addition to giving valuable data to the user about their physical activity, sleep, etc.

<img src="https://i.ibb.co/p4Xdy1T/image.png" width="800">

Recommendations:

This is one of the most important pages since it indicates the recommendations that we must take into consideration to improve our lifestyle and therefore improve the quality of sleep, the user here can also control what recommendations are useful in his lifestyle or not.

<img src="https://i.ibb.co/PtVxKfR/image.png" width="800">

Demo:

Again, you can find the test webpage at: http://menopause-hackster.s3-website-us-east-1.amazonaws.com/

Github:

This tab sends us to the project repository, since being open source, they can complement and improve it.

https://github.com/EddOliver/ProjectNIX/

Thinking about the different devices that could open our web app, we made it a responsive web page, therefore it can be opened on any device.

App in Samsung S10:

<img src="https://i.ibb.co/LzFWXDd/Screenshot-20200511-164610-Chrome.jpg" height="400"><img src="https://i.ibb.co/0cyLzSN/Screenshot-20200511-164627-Chrome.jpg" height="400"><img src="https://i.ibb.co/CM9bZfQ/Screenshot-20200511-164637-Chrome.jpg" height="400">

App in iPhoneSE:

<img src="https://i.ibb.co/cwLft2V/img3.png" height="400"><img src="https://i.ibb.co/r7wK04J/img2.png" height="400"><img src="https://i.ibb.co/tz5096J/img1.png" height="400">


### Epic DEMO:

Demo URL: http://menopause-hackster.s3-website-us-east-1.amazonaws.com/

Video: Click on the image
[![Nyx](https://i.ibb.co/BcZXy83/5eb3c8003b9be-1588840517-5eb3c8003b968-1.png)](https://www.youtube.com/watch?v=b-vgtMr4hpI&feature=emb_title)

Sorry github does not allow embed videos.

## Future Rollout:

I would consider the prototype finished as we only need a little of additional touches in the industrial engineering side of things for it to be a commercial product. Well and also a bit on the Electrical engineering perhaps to use only the components we need. That being said this functions as an upgrade from a project that a couple friends and myself are developing and It was ideal for me to use as a springboard and develop the idea much more. We tested the device and platform on several people and most seem to like it, almost everyone seem to adore the idea and the scientific basis, but yes we need to develop a bit more on the "comfort" side of things.

This one has the potential of becoming a commercially available option regarding the "quantify yourself" trend and an enourmous option for people who want to try something else apart from chemical and pharmaceutical solutions. Sleep is important and in this new world transitioning from the pandemic it seems to have little value, but the health virtues of an improved sleep are too Big to not notice.


# Studies supporting our thesis

The world bank mentions there are 3764 Billion women, 7.746% are between 40 to 50 years old, that represents 292 billion women suffering the process of menopause.

(1)According to ACOG “Menopause is the time in your life when you naturally stop having menstrual periods. Menopause happens when the ovaries stop making estrogen. Estrogen is a hormone that helps control the menstrual cycle. Menopause marks the end of the reproductive years. The average age that women go through menopause is 51 years.”

Nevertheless, the process of menopause begins in the 30's, that previous stage is called Perimenopause. Perimenopause starts when the estrogens levels begin to decay.

(2)Nature : Hormonal changes that begin during the menopausal transition affect many biological systems. Accordingly, the signs and symptoms of menopause include central nervous system-related disorders; metabolic, weight, cardiovascular and musculoskeletal changes; urogenital and skin atrophy; and sexual dysfunction.

(3) NIH said that one of the first symptoms, even in the perimenopause stage, is insomnia and sleep disorders. Also mentions that sleep disorders could persist even after menopause is over. Melatonin 1 (MT1) and Melatonin 2 (MT2) are the hormones in charge of drowsiness. Those hormones also affect the total sleeping time (TST) and the Sleeping Efficiency (SE).

The next graph shows the percentage of people that has sleep disorder, separated them in men and women.



The next graph shows how many women have sleep disorders during the age and during perimenopause and menopause. 

## Regarding sleep and light 


(4)A Harvard study shows that many of the symptoms of menopause could get worse if the patient does not get good sleep. Hormone levels change and that could cause insomnia, and insomnia symptoms could worsen the menopause symptoms. Insomnia could produce short memory problems and focusing problems. 

(5) Mayo Clinic in the USA said that insomnia could also produce another physical and mental illness. The lack of sleep increases the risk of having health problems such as, high blood pressure, heart diseases, diabetes and chronic pain. Putting in danger the people who suffer from this illness. 

(6)Elsavier published an article about 6 different research of sleeping treatments with light, and how those treatments improve the health of the people. Also mentions that in some cases it's better because it reduces the amount of drugs people have to take in order to get some sleep. 

(7)Pulse published an article where they showed that the red light makes it better to sleep. Also the red light it’s good to increase TST and SE. 

(8)Harvard says that eating food with a high GI index could produce insomnia.
Go for low-GI foods as much as possible. This means aiming to eat fruits and vegetables, beans and legumes, nuts and seeds, whole grains, and lean protein instead of anything made of processed grains or with added sugars. Think plain yogurt with berries and nuts instead of cereal or bagels for breakfast; a big plate of roasted vegetables and grilled salmon instead of pasta and meatballs for dinner.

Never eat large meals close to bedtime. As a general rule, a large meal should be eaten at least three to four hours before lying down, maybe more. You do not want to go to bed with lots of food in your intestines!

If you have to have a little something closer to bedtime, avoid sugars and processed grains. A sliced apple with a little almond butter; some blueberries and nut milk; or maybe hummus and carrots. Those are all well-balanced, plant-based snacks.

## References:

(1)https://datos.bancomundial.org/indicator/SP.POP.2529.FE.5Y?view=chart Banco mundial

(2)https://www.nature.com/articles/nrendo.2017.180?proof=trueIn Nature 

(3)https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4621258/ NIH y la NAtional Library of Medicine

(4)https://www.health.harvard.edu/womens-health/perimenopause-rocky-road-to-menopause
Harvard 

(5)https://www.mayoclinic.org/es-es/diseases-conditions/insomnia/in-depth/insomnia-treatment/art-20046677 MAyo Clinic

(6)https://www.elsevier.es/es-revista-atencion-primaria-27-articulo-terapia-luminica-efectividad-el-tratamiento-13116159 Elsavier

(7)https://www.pulse.ng/lifestyle/beauty-health/red-lights-helps-your-sleep-better-than-other-lights/8vb9l8s Pulse

(8)https://www.health.harvard.edu/blog/menopause-and-insomnia-could-a-low-gi-diet-help-2020011718710 Harvard 


(9) https://ouraring.com/heart-rate-during-sleep

(10) http://healthysleep.med.harvard.edu/healthy/science/what/characteristics

(11) http://healthysleep.med.harvard.edu/healthy/science/what/sleep-patterns-rem-nrem

(12) https://www.uclahealth.org/sleepcenter/heart-disease

(13) https://ouraring.com/sleep-stages#rem-sleep

(14) Dalal, Pronob & Agarwal, Manu. (2015). Postmenopausal syndrome. Indian journal of psychiatry. 57. S222-32. 10.4103/0019-5545.161483. 

(15).  https://emedicine.medscape.com/article/276104-overview 

(16) https://med.stanford.edu/news/all-news/2019/09/teens-sleep-43-more-minutes-per-night-after-combo-of-two-treatme.html

(17) https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2751894

(18) https://med.stanford.edu/news/all-news/2019/09/teens-sleep-43-more-minutes-per-night-after-combo-of-two-treatme.html

(19) https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2751894


## Appendix A:

Since the problem of approximating a series of data to a curve can be solved in many ways, we will use one that allows us with the same raspberry processing to obtain this result, so the method we will use is that of polynomial interpolation, since that the three graphs that we must detect are graphs that can be described by a polynomial.

    https://docs.scipy.org/doc/numpy-1.10.0/reference/generated/numpy.polyfit.html

In this case we will use a grade I, II and III interpolation for each of the curves.

    x1 = np.array([0, hours/2, hours])
    y1 = np.array([60,np.amin(hrss),60])
    z1 = np.poly1d(np.polyfit(x1, y1, 2))
    x2 = np.array([0, hours])
    y2 = np.array([60,np.amin(hrss)])
    z2 = np.poly1d(np.polyfit(x2, y2, 1))
    x3 = np.array([0, hours/3,(2*hours)/3, hours])
    y3 = np.array([50,np.average(hrss),np.average(hrss)-np.std(hrss),60])
    z3 = np.poly1d(np.polyfit(x3, y3, 3))

The Hammock Model:

<img src="https://d1a0efioav7lro.cloudfront.net/wp-content/uploads/2020/02/06220039/The-Hammock.png" height="250"><img src="https://i.ibb.co/9gnFXXd/Screen-Shot-2020-05-07-at-16-57-58.png" height="250">

The Downward Slope:

<img src="https://d1a0efioav7lro.cloudfront.net/wp-content/uploads/2020/02/06220033/The-Downward-Slope.png" height="250"><img src="https://i.ibb.co/SPLVp0C/Screen-Shot-2020-05-07-at-16-58-33.png" height="250">

The Hill:

<img src="https://d1a0efioav7lro.cloudfront.net/wp-content/uploads/2020/02/06220103/The-Hill.png" height="250"><img src="https://i.ibb.co/cbSsvRJ/Screen-Shot-2020-05-07-at-16-58-57.png" height="250">

The curve is calculated with all the input HR data and the square R of the prediction and the approximate curve are calculated and the one with the least error will be the curve that will be taken as valid.

    ss = r2_score(hrss, square)
    sl = r2_score(hrss, lin)
    st = r2_score(hrss, trip)

- Here we generate pseudo-randomly 3 arrays of data that follow the aforementioned curves.

<img src="https://i.ibb.co/822sQQ4/Screen-Shot-2020-05-07-at-1-21-58.png" width="500">
<img src="https://i.ibb.co/5sMG2gb/Screen-Shot-2020-05-07-at-1-22-44.png" width="500">
<img src="https://i.ibb.co/HPWxmQs/Screen-Shot-2020-05-07-at-1-23-25.png" width="500">

- If we go through our algorithm we can see that it tells us what type of curve it is and shows us the trend line, in this case what matters to us for the algorithm is the type of curve rather than the trend line.

<img src="https://i.ibb.co/dtMpLWP/Screen-Shot-2020-05-07-at-1-26-01.png" width="500">
<img src="https://i.ibb.co/8c0Sfsy/Screen-Shot-2020-05-07-at-1-26-12.png" width="500">
<img src="https://i.ibb.co/pZ9MB1X/Screen-Shot-2020-05-07-at-1-26-21.png" width="500">

Example with real Heart Rate data in one night:

<img src="https://i.ibb.co/RY3h4DK/Screen-Shot-2020-05-07-at-16-41-15.png" width="800">

[Return to Program Features](#raspberry-software-features)
