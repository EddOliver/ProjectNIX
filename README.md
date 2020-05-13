# ProjectNIX

Descripcion del proyecto

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
* [The Final Product](#the-final-product)
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

// Software del dok

# Connection Diagrams:

RaspberryPi Modules:

<img src="https://i.ibb.co/v3y7znW/esquema1.png" width="800">

RaspberryPi Connection:

<img src="https://i.ibb.co/qB0Qy4H/Esquemacomp.png" width="800">

System Connection:

<img src="https://i.ibb.co/ZHrz7Yq/squematic-1.png" width="800">

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

## Raspberry software features:

El programa que corre en la raspberry realiza las siguientes funciones:

- Lectura de los sensores desde el Shield.

Explicacion aqui: [Ai Hat](#communicating-the-shield-with-the-raspberry-pi)

- Lectura de el HR desde el MiBand3.

<img src="https://i.ibb.co/n7khhG5/800-600-white-5eb3956d9ce62.png" width="1000">

- Comunicacion directa con AWS desde AWSIoT Rules.

<img src="https://i.ibb.co/k4J2w35/800-600-white-5eb3956d9ce62-1.png" width="1000">

- Analisis de la calidad se sueño en funcion de las horas dormidas y los datos de HR.

La calidad de sueño la dividimos en 3 patrones conocidos que nos indican si haz dormido bien o mal, las referencias a estos patrones y mas referencias 

Realizamos un algoritmo matematico que a travez de dar los valores registrados en la noche del HR, podemos aproximar a que curva se parece mas y saber si la persona ha dormido bien o no, mas detalles [Here](#apendix-a) and [References](#references).

Ideal curve (good):

<img src="https://d1a0efioav7lro.cloudfront.net/wp-content/uploads/2020/02/06220039/The-Hammock.png" width="1000">

The person eats a lot before sleeping (bad):

<img src="https://d1a0efioav7lro.cloudfront.net/wp-content/uploads/2020/02/06220033/The-Downward-Slope.png" width="1000">

Extreme physical or mental fatigue or stress (bad).

<img src="https://d1a0efioav7lro.cloudfront.net/wp-content/uploads/2020/02/06220103/The-Hill.png" width="1000">

Aqui una muestra de el HR de [insertar el nombre que quieras] mostrando que sufre uno de los patrones de sueño por el estres.

<img src="https://i.ibb.co/RY3h4DK/Screen-Shot-2020-05-07-at-16-41-15.png" width="1000">

Este valor puedes probarlo tu mismo abriendo la jupyter notebook en la carpeta de "Google Colab".

- Reconexion automatica ante error de lectura del sensor o desconexion del reloj.

<img src="https://i.ibb.co/KWmj6Y7/5eb3af52cb740-1588834131-5eb3af52cb6ec.png" width="1000">

- Deteccion del estado despierto y dormido mediante el HR.

<img src="https://i.ibb.co/4fQqxXW/Untitled-Diagram.png" width="1000">

# Webpage Setup:

URL: http://menopause-hackster.s3-website-us-east-1.amazonaws.com/

Todos los archivos de la pagina web estan en la carpeta webpage y la puedes abrir en local con el siguiente proceso:

Instala e siguiente programa:

- Link: https://nodejs.org/es/

Entra en el folder webapp.

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

Primero tenemos que tener una cuenta creada en:

https://www.particle.io/

Una vez ahi tenemos que acceder al WebIDE:

https://build.particle.io/

Ya ahi podremos cargar nuestro programa en el IDE.

<img src="https://i.ibb.co/sbTRKrb/image.png" width="800">

Todas las librerías pueden ser agregadas desde la pestaña de librerías.

<img src="https://i.ibb.co/YbkSyFT/image.png" width="800">

## How does it work:

En este caso el control se hace realizando request cada 3 segundos a nuestro bucket de S3 y revisando si se ha realizado una activación.

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

Esta configuración funciona para focos compatibles con SmartHome y MagicLight Bulbs (nuestro caso).

Primero tenemos que tener configurados nuestros focos.

https://www.magiclightbulbs.com/pages/how-to-set-up-magiclight-wifi-bulb

Y tener una cuenta en IFTTT:

https://ifttt.com/

Ya que tenemos todo configurado realizamos lo siguiente:

- Creamos una nueva función:

<img src="https://i.ibb.co/y05kSb9/image.png" width="800">

Conectamos estos dos servicios:

Webhooks (Nos permite controlar las luces mediante GET request): 

<img src="https://i.ibb.co/mydTmLj/image.png" width="800">

MagicHue:

<img src="https://i.ibb.co/svpvyRW/image.png" width="800">

Podemos observar que tenemos todas estas opciones para modificar lo que queremos que hagan los focos, en este caso utilizamos nosotros la opcion de color, intensidad y encender/apagar.

<img src="https://i.ibb.co/nMHhFxd/image.png" width="800">

Nuestro programa realiza lo siguiente.

| State | color | Intensity | Before Sleep | After Sleep |
| ------| ----- | ----------| -------------| ----------- |
|  ON   | Red   | 75 %      |  45 min      | N/A         |
|  ON   | Red   | 25 %      |  15 min      | N/A         |
|  OFF  | N/A   | 0 %       |  0 min       | N/A         |
|  ON   | Blue  | 100 %     |  N/A         | 0 min       |

La ejecución de esto esta controlado mediante una lambda en AWS controlada mediante AWS IoT, esta se activa cada vez que mandamos cualquier dato desde la raspberry el topic /Bulbs, mediante una IoT Rule como ya se vio antes.

<img src="https://i.ibb.co/QH19w7B/image.png" width="800">

En este caso:

mysleepH: Hora de dormir
mysleepM: Minuto para dormir
myawakeH: Hora de levantarse
myawakeM: Minuto de levantarse

## Webpage Features:

URL: http://menopause-hackster.s3-website-us-east-1.amazonaws.com/

Main Page:

Esta pagina tiene como fin ser un resumen de tu desempeño al dormir y mantenerte activa, reflejado en un score que toma en consideración la calidad de sueño, actividad física y horas dormidas. Ademas damos la opción de poder realizar un share en redes sociales de tu desempeño para demostrar tus objetivos!

<img src="https://i.ibb.co/F0NZ04S/image.png" width="800">

Dashboard:

Tenemos un dashboard con todas las mediciones que realizamos de los sensores, ademas de dar datos valiosos para el usuario sobre su actividad física, sueño, etc.

<img src="https://i.ibb.co/p4Xdy1T/image.png" width="800">

Recommendations:

Esta es una de las paginas mas importantes ya que esta nos indica las recomendaciones que debemos de tomar en consideración para mejorar nuestro estilo de vida y por lo tanto mejorar la calidad de sueño, el usuario aquí puede controlar ademas que recomendaciones le son útiles en su estilo de vida o no.

<img src="https://i.ibb.co/PtVxKfR/image.png" width="800">

Demo:

Esta pagina muestra el Demo de nuestro proyecto.

<img src="IMAGEN PENDIENTE" width="800">

Github:

Esta pestaña nos manda al repositorio del proyecto, ya que al ser un código abierto, pueden complementarlo y mejorarlo.

<img src="IMAGEN PENDIENTE" width="800">

Pensando en los distintos dispositivos que podrían abrir nuestra web app hicimos que sea una pagina web responsive, por lo tanto puede ser abierta en cualquier dispositivo.

App in Samsung S10:

<img src="https://i.ibb.co/LzFWXDd/Screenshot-20200511-164610-Chrome.jpg" height="400"><img src="https://i.ibb.co/0cyLzSN/Screenshot-20200511-164627-Chrome.jpg" height="400"><img src="https://i.ibb.co/CM9bZfQ/Screenshot-20200511-164637-Chrome.jpg" height="400">

App in iPhoneSE:

<img src="https://i.ibb.co/cwLft2V/img3.png" height="400"><img src="https://i.ibb.co/r7wK04J/img2.png" height="400"><img src="https://i.ibb.co/tz5096J/img1.png" height="400">

# The Final Product:

Product:

<img src="" width="800">
<img src="" width="800">

Essential components:

<img src="" width="800">

UI:

* Real time model performance
<img src="" width="800">

* Real time emergency notifications
<img src="" width="800">

* Patient database search tool
<img src="" width="800">

### Epic DEMO:

Demo URL: http://menopause-hackster.s3-website-us-east-1.amazonaws.com/

Video: Click on the image
[![Nyx](https://i.ibb.co/BcZXy83/5eb3c8003b9be-1588840517-5eb3c8003b968-1.png)](https://youtu.be/GYoLvldvk-s)

Sorry github does not allow embed videos.

## Future Rollout:

// Mame


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


## Apendix A:

Ya que el problema de aproximar una serie de datos a una curva puede ser resuelto de muchas maneras, utilizaremos una que nos permita con el mismo procesamiento de la raspberry obtener este resultado, asi que el metodo que usaremos es el de la interpolacion polinomial, ya que las tres gtaficas que debemos detectar son graficas que pueden describirse por un polinomio.

    https://docs.scipy.org/doc/numpy-1.10.0/reference/generated/numpy.polyfit.html

En este caso usaremos una interpolacion de grado I, II y III para cada una de las curvas.

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

La curva se calcula con todos los datos de HR de entrada y se hace el calculo de la R cuadrada de la prediccion y la curva aproximada y la que tenga menos error sera la curva que se tomara por valida.

    ss = r2_score(hrss, square)
    sl = r2_score(hrss, lin)
    st = r2_score(hrss, trip)

- Aqui generamos de forma pseudo aleatoria 3 arreglos da datos que siguen las curvas ya antes mencionadas.

<img src="https://i.ibb.co/822sQQ4/Screen-Shot-2020-05-07-at-1-21-58.png" width="500">
<img src="https://i.ibb.co/5sMG2gb/Screen-Shot-2020-05-07-at-1-22-44.png" width="500">
<img src="https://i.ibb.co/HPWxmQs/Screen-Shot-2020-05-07-at-1-23-25.png" width="500">

- Si la pasamos por nuestro algoritmo podemos ver que nos dice que tipo de curva es y nos muestra la linea de tendencia, en este caso lo que nos importa para el algoritmo es el tipo de curva mas que la linea de tendencia.

<img src="https://i.ibb.co/dtMpLWP/Screen-Shot-2020-05-07-at-1-26-01.png" width="500">
<img src="https://i.ibb.co/8c0Sfsy/Screen-Shot-2020-05-07-at-1-26-12.png" width="500">
<img src="https://i.ibb.co/pZ9MB1X/Screen-Shot-2020-05-07-at-1-26-21.png" width="500">

Ejemplo con datos reales de un HR en una noche:

<img src="https://i.ibb.co/RY3h4DK/Screen-Shot-2020-05-07-at-16-41-15.png" width="800">

[Return to Program Features](#program-features)
