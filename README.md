# ProjectNIX

Descripcion del proyecto

<img src="https://i.ibb.co/RBjYTvq/5eb0d367016aa-1588646849-5eb0d36701648.png" width="1000">

# Table of contents

* [Introduction](#introduction)
* [Materials](#materials)
* [Connection Diagrams](#connection-diagrams)
* [AWS Setup](#aws-setup)
* [Grove AI Hat Setup](#grove-ai-hat-setup)
* [RaspberryPi Setup](#raspberrypi-setup)
* [Webpage Setup](#webpage-setup)
* [The Final Product](#the-final-product)
* [Future Rollout](#future-rollout)
* [References](#references)
* [Apendix](#apendix-a)

# Introduction:

// intro mamadora

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
- AWS:
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html

// Software del dok

# Connection Diagrams:

RaspberryPi Modules:

<img src="https://i.ibb.co/v3y7znW/esquema1.png" width="800">

RaspberryPi Connection:

<img src="https://i.ibb.co/qB0Qy4H/Esquemacomp.png" width="800">

System Connection:

<img src="Esquema completo" width="800">

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

Deberemos crear un bucket de S3 que nos sevrira como almacenamiento de los datos de los sensores y como hosting de la pagina web.

<img src="https://i.ibb.co/8r1mTKV/Screen-Shot-2020-05-05-at-16-55-49.png" width="1000">

Los nombres de todos los buckets en AWS son unicos y exclusivos, asi que intenta primero con nombres sencillos y luego aumentales la complejidad si no estan disponibles. 

En nuestro caso se llama: menopause-hackster

<img src="https://i.ibb.co/k27BWwf/Screen-Shot-2020-05-05-at-17-02-19.png" width="1000">

Ahora tenemos que configurar el acceso publico del bucket para poder acceder a los datos desde la pagina web y el acceso de CORS para poder llamar los datos por API.

Configuramos el acceso publico del bucket de esta forma:

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

Habilitamos el acceso del CORS de la siguiente forma:

<img src="https://i.ibb.co/zZCLFsc/Screen-Shot-2020-05-05-at-17-05-27.png" width="1000">

La action que vamos a crear para que los datos leidos por los sensores lleguen al S3 sera la siguiente.

<img src="https://i.ibb.co/QrNH8D2/Screen-Shot-2020-05-05-at-17-22-20.png" width="1000">

# Grove AI Hat Setup:

## Grove AI hat prerequisites:

NOTA: Utilizamos el Grove AI Hat debido a que no contabamos con el shield Grove de raspberry y teniamos este a la mano, sin embargo ahorro tiempo de programacion de la RaspberryPi ya que teniamos experiencia trabajando con este shield.

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

Añade las dos librerias en la carpeta de Arduino/Libraries. Especificamente ambas estan diseñadas para hacer funcionar los sensores con esta board.

- ADS1115-master.zip
- DHT_sensor_library.zip

<img src="https://i.ibb.co/JvM9jjB/Screen-Shot-2020-05-04-at-22-47-06.png" width="800">

Abre el archivo Arduino/Msensors/Msensors.ino y si toda la instalacion funciono correctamente, deberas ver una ventana de compilacion correcta.

<img src="https://i.ibb.co/hRrhtN1/Capturla.png" width="800">

## Communicating the shield with the Raspberry Pi:

Comunicar el shield con la raspberry pi fue un poco laborioso debido a los siguientes factores:

- Los puertos seriales de la raspberry y el Hat estan en conectados Tx -> Tx y Rx -> Rx.
- El puerto I2C de ambos esta correctamente conectado pero ya que el sensor Analogico requiere I2C en el Hat como Master, no podiamos comunicarlo con la raspberry que solo puede funcionar como master.
- La comunicacion de SPI la utiliza el micro controlador para programarse, asi que tampoco era una opcion.

Sin embargo la Raspberry y el Microcontrolador comprarten casi todos los pines como se puede ver en la imagen.

<img src="https://i.ibb.co/NpWY8Fj/Screen-Shot-2020-05-04-at-23-00-24.png" width="800">

Asi que se nos ocurrio crear un protocolo donde los datos se pasaran de manera paralela del Hat a la Raspberry, lo decidimos llamar paralax, ya que el hat es un shield, solo hace falta programarlos, en los codigos del Hat y de la Raspberry ya realizamos la programacion correspondiente, sin embargo asi estan conectados por software.

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

Cada vez que el pin 16 de la raspberry manda un 1, el microcontrolador manda toda la informacion a la raspberry de forma paralela y la almacena en 3 variables.

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

Renombra los certificados que descargaste de la carpeta de AWS por "nix.private.key" y "nix.cert.pem" y colocalos en la carpeta "RaspberryScipt/Certs".

<img src="https://i.ibb.co/tz6WH89/Screen-Shot-2020-05-06-at-23-15-42.png">

- Enter the Covital/RpiScript folder.

      cd Covital/RpiScript

- We will have to configure the IBM IoT Platform credentials in our main.py program, so we open the editor of the Rpi Zero with the following command.

      sudo nano main.py

- Change the following value ​​for yours at the beginning of the code:

        EndPoint = "XXXXXXXXXXXXXXXXX.iot.us-east-1.amazonaws.com"

- To save the changes in the editor press the command "ctrl + o", Enter and then "ctrl + x", enter

Ya con esta preparacion lo utltimo que necesitamnos es obtener la MAC-Address de nuestro MiBand3, eso lo obtendremos ejecutando el siguiente comando en la RaspberryPi.

      sudo hcitool lescan

<img src="https://i.ibb.co/1MfbWmZ/image.png" width="1000">

- To activate the code, execute the following command:

      sudo python3 main.py YOURMAC

- If everything works correctly you will see the following:

<img src="https://i.ibb.co/mC1fy47/5eb390c1bafde-1588826403-5eb390c1baf7d.png" width="1000">

## Program features:

El programa que corre en la raspberry realiza las siguientes funciones:

- Lectura de los sensores desde el Shield.

Explicacion aqui: [Ai Hat](#communicating-the-shield-with-the-raspberry-pi)

- Lectura de el HR desde el MiBand3.

<img src="https://i.ibb.co/n7khhG5/800-600-white-5eb3956d9ce62.png" width="1000">

- Comunicacion directa con AWS desde AWSIoT Rules.

<img src="https://i.ibb.co/k4J2w35/800-600-white-5eb3956d9ce62-1.png" width="1000">

- Analisis de la calidad se sueño en funcion de las horas dormidas y los datos de HR.



- Reconexion automatica ante error de lectura del sensor o desconexion del reloj.
- Deteccion del estado despierto y dormido.














       

# The Final Product:

Product:

<img src="https://i.ibb.co/cNx1sFw/ps2.jpg" width="800">
<img src="https://i.ibb.co/6BRDwXz/PsNew.jpg" width="800">

Essential components:

<img src="https://i.ibb.co/RT94wM3/Conection.jpg" width="800">

UI:

* Real time model performance
<img src="https://i.ibb.co/HPZ5MMb/image.png" width="800">

* Real time emergency notifications
<img src="https://i.ibb.co/F0BT9Mp/image.png" width="800">

* Patient database search tool
<img src="https://i.ibb.co/yVVtD9G/image.png" width="800">

### Epic DEMO:

Video: Click on the image
[![Cancer](https://i.ibb.co/p1MvBJF/Logo.png)](https://youtu.be/GYoLvldvk-s)

Sorry github does not allow embed videos.

## Future Rollout:

This is just an initial approximation, before February 17th we will have a much more polished final project.

## References:

Links:

(1) https://ctep.cancer.gov/protocolDevelopment/electronic_applications/docs/CTCAE_v5_Quick_Reference_8.5x11.pdf

(2) https://www.ncbi.nlm.nih.gov/books/NBK333506/table/ch04.sec1.table1/


## Apendix A:

Install.sh Content:

    export PATH=$PATH:~/.local/bin

    sudo apt-get update 

    sudo apt-get upgrade -y 

    sudo apt-get install libhdf5-serial-dev hdf5-tools libhdf5-dev zlib1g-dev zip libjpeg8-dev -y 

    sudo apt-get install python3-pip -y 

    sudo pip3 install -U pip testresources setuptools

    sudo pip3 install -U numpy==1.16.1 future==0.17.1 mock==3.0.5 h5py==2.9.0 keras_preprocessing==1.0.5 keras_applications==1.0.8 gast==0.2.2 enum34 futures protobuf 

    sudo pip3 install --pre --extra-index-url https://developer.download.nvidia.com/compute/redist/jp/v43 tensorflow-gpu 

    sudo pip3 install notebook awscli paho-mqtt

    sudo apt-get install python3-matplotlib python3-opencv python3-scipy -y 

[Return to Libraries Setup](#libraries-setup)
