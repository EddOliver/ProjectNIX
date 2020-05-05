# ProjectNIX

Descripcion del proyecto

<img src="https://i.ibb.co/RBjYTvq/5eb0d367016aa-1588646849-5eb0d36701648.png" width="1000">

# Table of contents

* [Introduction](#introduction)
* [Materials](#materials)
* [Connection Diagrams](#connection-diagrams)
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

# Grove AI Hat Setup:

## Grove AI hat Install Dependencies:

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

Añade las dos librerias en la carpeta de Arduino/Libraries




## Jetson SD card Setup:

This is the explanation on how to install the Jetson SDK OS image on an SD card. You will need a computer with an SD card reader to install the image.

We recommend downloading the latest version of the SDK, in this guide I use version 4.3.0 (most recent to date).

Official Link: https://developer.nvidia.com/embedded/jetpack

You'll need to unzip the file to get the image file (.img) to write to your SD card. If you do not have a program to unzip, I recommend any of the following according to your operating system (windows in my case).

7-Zip (Windows):

https://www.7-zip.org/

The Unarchiver (Mac):

https://theunarchiver.com/

Unzip (Linux):

https://linuxize.com/post/how-to-unzip-files-in-linux/

<img src="https://i.ibb.co/tx4ZSpb/image.png" width="600">

## Format your SD.

Windows and Mac:

https://www.sdcard.org/downloads/formatter/index.html

Linux:

https://www.pcworld.com/article/3176712/how-to-format-an-sd-card-in-linux.html

My computer does not have an SD card reader so I use this external one (any reader is ok).

<img src="https://i.ibb.co/drrQkgs/20200125-180653.jpg" width="600">

And this is the software for the SD card formatter. I especially like this program because this type of operating system creates multiple partitions in the SD memory and the format of them can be complicated if we want to reformat later, however this program does everything automatically.

<img src="https://i.ibb.co/yQ0mmc1/image.png" width="400">

## Flash the sd card with the OS

You will need to use an image writing tool to install the image you have downloaded on your SD card. I recommend balenaEtcher as it works on all OSs and it is not necessary to unzip the .zip to perform the OS flash.

Download Link: https://www.balena.io/etcher/

<img src="https://i.ibb.co/TWMH7FM/image.png" width="600">

Once the process is completed correctly, we see the following message.

<img src="https://i.ibb.co/zJSdVG4/image.png" width="600">

### Jetson OS Setup:

Insert the SD into the SD slot of the Jetson Nano.

<img src="https://i.ibb.co/YPKS7QF/Slot.png" width="600">

Connect the Jetson Nano to the screen using the HDMI cable, connect the wireless keyboard receiver, connect the network card and connect the power supply.

<img src="https://i.ibb.co/NY3t4pc/Hardwaresetup.png" width="600">

We will configure the operating system, it is very simple.

* Accept the terms.

<img src="https://i.ibb.co/5T55mgJ/20200126-015446.jpg" width="600">

* Select your language.

<img src="https://i.ibb.co/MSBkGmV/20200126-015511.jpg" width="600">

* Select your keyboard layout.

<img src="https://i.ibb.co/W5TGWtH/20200126-015531.jpg" width="600">

* Configure your wifi.

<img src="https://i.ibb.co/KFB4wC3/20200126-015605.jpg" width="600">

* Select your region.

<img src="https://i.ibb.co/F6q0vv9/20200126-015658.jpg" width="600">

* Select your credentials.

**SUPER IMPORTANT NOTE: CHECK THE OPTION "Log in Automatically"**

<img src="https://i.ibb.co/9Vw9f9H/20200126-015742.jpg" width="600">

* Click ok to expand your Partition Size.

<img src="https://i.ibb.co/NmC0XGn/20200126-015755.jpg" width="600">

* Wait a couple of minutes.

<img src="https://i.ibb.co/c89BKHk/20200126-015853.jpg" width="600">

* If everything works, you will see a screen like this.

<img src="https://i.ibb.co/Th0TXT5/image.png" width="1000">

* This animation shows the final setup of the operating system.

<img src="https://i.ibb.co/C2sh67K/ezgif-com-resize-2.gif" width="1000">

* With this you should already have everything configured, from now on the HDMI cable and the wireless keyboard are no longer necessary. All programming and final setup will be done through SSH.

## SSH Setup:

For this step we will create an ssh connection with the Jetson, if you have Mac or Linux are already preconfigured with OpenSSH library, so you can start your connection from the terminal with the following command.

    ssh -L 8000:localhost:8888 youruser@yourip

In my case the command is:

    ssh -L 8000:localhost:8888 vic@192.168.0.28

**NOTE: it is also possible to activate this library in windows but I recommend using the instructions that I will show you next.**

If you are a Windows user I recommend using the following program:

https://www.putty.org/

This animation shows how to configure Putty exactly as the last command.

<img src="https://i.ibb.co/JnsH0Xn/ezgif-com-video-to-gif-3.gif" width="600">

Taking the Putty console as example, clicking on connect will display the following message.

<img src="https://i.ibb.co/bWfcnds/image.png" width="600">

Click "Yes" to bring up the following window, as long as you do not format the Jetson OS it will not appear again, at this time it will ask for the password that we defined in the previous section.

<img src="https://i.ibb.co/QHCLHSs/image.png" width="600">

After inputting the password in the command console, this window will appear, indicating that we are already connected to the Jetson Nano.

<img src="https://i.ibb.co/brWpyCW/image.png" width="600">

## Libraries Setup:

Once the wireless connection to the console is established, we will have to copy and paste the following commands into it and execute them.

* Command to download the project and get all the necessary files for the project.

        git clone https://github.com/altaga/Anaphylactic-Skin-Reaction-Detection-during-Chemotherapy

* Command to enter the downloaded folder.

        cd Anaphylactic-Skin-Reaction-Detection-during-Chemotherapy/Installer

* This command will install all the libraries and configurations necessary to setup the project correctly. To facilitate its installation I'll make an .sh file that performs all this automatically, however I also attached the commands separately in [Apendix A](#apendix-a). Also the file can be reviewed by any text editor such as Notepad, Atom, VsCode, etc ...

**NOTE: Go for a coffee, some cookies and see the next chapter of your favorite series, because this process can take 45 minutes to 2 hours to complete, depending on your internet connection.**

        sudo bash Install.sh

With this process we will have all the libraries installed correctly:

* TensorFlow 2.0
* Awscli (we haven't finished setup this library)
* Numpy
* Jupyter Notebook
* PahoMQTT
* OpenCV (No Contrib Version)

Once this process has concluded, we have to check that the Jupyter notebook works correctly, as it will be our UI for the rest of the tutorial. Next, write the following command:

    jupyter notebook

You should see something like this in the terminal:

<img src="https://i.ibb.co/YD0DMBs/image.png" width="600">

Copy the token that appears and without closing the window go to a browser and on the address bar input:

    localhost:8000

You should get a window such as this one:

<img src="https://i.ibb.co/Y8dkkrM/image.png" width="600">

Paste the token you copied previously:

<img src="https://i.ibb.co/LtkbFkF/image.png" width="600">

If the token was valid we should have the Jetson files open on the browse, this is important because this window will allow us to manage the files easily, and allow us to execute the project's files.

## AWS Jetson setup:

First we have ti access our AWS console y look for the IoT core service:

<img src="https://i.ibb.co/KVbtQLR/image.png" width="600">

Obtain your AWS endpoint, save it because we will use it to setup the JEtson and the webpage.

<img src="https://i.ibb.co/ZYwrdfR/image.png" width="600">

In the lateral panel select the "Onboard" option and then "Get started".

<img src="https://i.ibb.co/gmKxc7P/image.png" width="600">

Select "Get started".

<img src="https://i.ibb.co/XSxSxbF/image.png" width="600">

In "Choose a platform" select "Linux/OSX", in AWS IoT DEvice SDK select "Python" and then click "Next".

<img src="https://i.ibb.co/JR69Fdd/image.png" width="600">

In Name write any name you'd like and then click on "Next step".

<img src="https://i.ibb.co/NNLqqM0/image.png" width="600">

In the section, "Download connection kit for" press the button "Linux/OSX" to download the credential package (which we will use later) and click on "Next Step".

<img src="https://i.ibb.co/RHVTRpg/image.png" width="600">

Click "Done".

<img src="https://i.ibb.co/N9c8jbG/image.png" width="600">

Click "Done".

<img src="https://i.ibb.co/DtBxq0k/image.png" width="600">

In the lateral bar, inside the Manage/Things section we can see our thing already created. Now we have to set up the policy of that thing for it to work without restrictions in AWS.

<img src="https://i.ibb.co/dQTFLZY/image.png" width="600">

In the lateral bar, in the Secure/Policies section we can see our thing-policy, click on it to modify it:

<img src="https://i.ibb.co/jThNgtc/image.png" width="600">

Click on "Edit policy document".

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

Once this is done, we will go to our pc and to the folder with the credentials previously downloaded and extract them.

<img src="https://i.ibb.co/mFKPxcY/image.png" width="600">

We enter the extracted folder and we will rename the files the following way:

    ThingNAME.cert.pem -> ThingCert.cert.pem

    ThingNAME.private.key -> PrivateCert.private.key

<img src="https://i.ibb.co/jzZqZHh/image.png" width="600">

Now, with the files already renamed we will go to our Jupyter Notebook in the following route:

<img src="https://i.ibb.co/fN00K9G/image.png" width="600">

In the right corner there's a button that says "upload"

<img src="https://i.ibb.co/jz27sTD/image.png" width="600">

By clicking on it we are able to upload our two certificates to the folder.

<img src="https://i.ibb.co/ggQ8hq1/image.png" width="600">

Click every single one of the blue colored "upload" buttons to finish the file upload.

<img src="https://i.ibb.co/k6X04K2/image.png" width="600">

By this point we should have all the necessary credentials.

## AWSCLI Setup:

This is the AWS library to manage and execute actions via Python for Cloud, so we have to set it up like so:

At the console we go to the IAM service.

<img src="https://i.ibb.co/qk3LP62/image.png" width="600">

In the Access Management/Users section we click on Add user.

<img src="https://i.ibb.co/xMpKZWz/image.png" width="600">

We type any username and we click on "Next:Permissions"

<img src="https://i.ibb.co/qMcmJSt/image.png" width="600">

Click "Attach existing polices directly", at the searchbar we write "S3" and we select the "AmazonS3FullAccess" policy.

<img src="https://i.ibb.co/XYLz6DW/image.png" width="600">

We click on "Next" until we reach the success screen, where we will see the Access Key ID and the Secret Access Key, both keys we have to save in order to set up the Awscli.

<img src="https://i.ibb.co/kqmFzHg/image.png" width="600">

From our Jupyter notebook UI at the "new" button open a new terminal.

<img src="https://i.ibb.co/Tm0W9p4/image.png" width="600">

Typoe the following command on it.

    aws configure

<img src="https://i.ibb.co/ZYJ0zPy/image.png" width="600">

Configure the credentials the following way:

    AWS Access Key ID [None]: YOUR ACCESS KEY ID
    AWS Secret Access Key [None]: YOUR SECRET ACCESS KEY
    Default region name [None]: us-east-1
    Default output format [None]: json

Ready! we have now configured the Jetson Nano.

# Webpage Setup:

## Aws Credentials Setup:

Enter the AWS console and search for the "Cognito" service.

<img src="https://i.ibb.co/nrF8P0W/image.png" width="600">

Enter "Manage Identity Pools"

<img src="https://i.ibb.co/Rh0mMQL/image.png" width="600">

Enter "Manage Identity Pools"

<img src="https://i.ibb.co/GMHB0d2/image.png" width="600">

Enter "Create new identity pool"

<img src="https://i.ibb.co/Rh0mMQL/image.png" width="600">

Type any name at the pool and check "Enable access to unauthenticated identities" and click on "Create Pool"

<img src="https://i.ibb.co/VJS43ff/Untitled-2.png" width="600">

Just click "Allow".

<img src="https://i.ibb.co/c3qgj5H/image.png" width="600">

We just got our POOLID, save it as we will use it afterwards.

<img src="https://i.ibb.co/xhBfqVk/image.png" width="600">

Go to the AWS console and enter "IAM".

<img src="https://i.ibb.co/qk3LP62/image.png" width="600">

Inside the console enter the Role section, at the searchbar write "web" and enter in the one that says "Cognito_WebPagePoolUnauth_Role".

<img src="https://i.ibb.co/r0kcdvz/image.png" width="600">

Inside the Role we click on the Attach policies button to add the services we need for our webapp.

<img src="https://i.ibb.co/vZdLsFj/image.png" width="600">

Inside that window we need to add three services:

* AmazonS3FullAccess
* AWSIoTFullAccess
* AmazonDynamoDBFullAccess

<img src="https://i.ibb.co/mFY33w9/image.png" width="600">

Now that we have the permissions required we part ways to configure the database where we will have the patient's information. From the AWS we will search for DynamoDB.
<img src="https://i.ibb.co/W3MH7Zf/image.png" width="600">

Select Create Table.

<img src="https://i.ibb.co/k35HZ30/image.png" width="600">

Create a table with the following parameters, it is important that the names are the same ones we are showing in the image.

Name: HacksterDB
Partition Key: PartKey
Sort Key: SortKey

<img src="https://i.ibb.co/dbFqpF6/image.png" width="600">

Once the table is created we can generate registers on it about patients which we will be able to visualize on our platform, the registers have to follow the following structure.

    {
    "Age": "56",
    "App": " 03/03/2020",
    "Cancer": "Sarcoma",
    "Comments": "Entrepreneur, if you don't have at least one TitanRTX on your computer, don't talk with him",
    "Incidents": "1",
    "Medicine": "Carboplatin",
    "PartKey": "dev1",
    "SortKey": "Jen-Hsun Huang"
    }

* Desciption of the registers:
    * Age: age of the person
    * App: Date of his following appointment
    * Cancer: Type of Cancer
    * Comments: Any comments of the specialist
    * Incidents: Number of incidents to date.
    * Medicine: Pharmacological treatments
    * PartKey: The device that procures the register
    * SortKey: Name of the patient

Finally we will create an S3 bucket which will allow us to store any file or image we need. From the AWS console look for the S3 service.

<img src="https://i.ibb.co/dtCKMBj/image.png" width="600">

On S3 click the button to create a bucket.

<img src="https://i.ibb.co/zstLq8T/image.png" width="600">

Type any name for the bucket but remember it as we will call it back afterwards.

<img src="https://i.ibb.co/PDmWFrs/image.png" width="600">

Uncheck all the block options as in the image:

<img src="https://i.ibb.co/FW4Fqbv/image.png" width="600">

Once all that is finished, we have everything ready to setup our webapp.

<img src="https://i.ibb.co/2ZP8mw0/image.png" width="600">

Uncheck all the options to block as in the image:.

<img src="https://i.ibb.co/FW4Fqbv/image.png" width="600">

With this done we have created our bucket, with the following URL.

    https://yourbucketname.s3.amazonaws.com/

## Add credentials to the WebPage

Download the Github file to your PC.

<img src="https://i.ibb.co/Ksd8Y42/image.png" width="600">

Inside the project folder go to: ReactAPP\src\views\examples.

<img src="https://i.ibb.co/Xt0yFmm/image.png" width="600">

With your favourite editor open the following files:

* aws-configuration.js
* MyCard.jsx
* Card.jsx
* Profile.jsx

Inside aws-configuration.js paste our POOLID and our AWS Endpoint.

<img src="https://i.ibb.co/tsYPQBw/image.png" width="600">

Inside MyCard.jsx paste your bucket URL.

<img src="https://i.ibb.co/TWscqmB/image.png" width="600">

Inside Card.jsx paste your bucket URL.

<img src="https://i.ibb.co/bbJdCPS/image.png" width="600">

Inside Profile.jsx paste the name of the DB, if you named it "HacksterDB" you don't need to do anything else.

<img src="https://i.ibb.co/HpsxRFp/image.png" width="600">

To visualize the DB in a Navigator you need to install NodeJS in your computer.

Link: https://nodejs.org/es/

Once installed enter the folder of the project called "ReactAPP".

<img src="https://i.ibb.co/NsHJj18/image.png" width="600">

Once there, oper the terminal or in the case of windows cmd.

NOTE: If you are using windows just type cmd on the search bar.

<img src="https://i.ibb.co/F3b8GGd/ezgif-2-e535d3643141.gif" width="600">

In the cmd or terminal write the next commmand.

    npm install

<img src="https://i.ibb.co/bgp4Ms6/image.png" width="600">

After all the dependencies ave been installed, at the console write:

    npm start

<img src="https://i.ibb.co/SPdkwZL/ezgif-com-video-to-gif-2.gif" width="600">

# Jupyter Notebook:

### Final Setup:

Enter the Jupyter notebook UI from the browser at "localhost:8000". The token should not longer be needed.

<img src="https://i.ibb.co/LtkbFkF/image.png" width="600">

Enter the "Anaphylactic-Skin-Reaction-Detection-during-Chemotherapy\Jupyter Notebook\Anaphylactic Skin Reaction Detection during Chemotherapy.ipynb" folder

<img src="https://i.ibb.co/mSW4dFD/image.png" width="600">

With everything set up we now enter the browser before performing the code revision we need to paste our Bucket name and AWS IoT Endpoint.

<img src="https://i.ibb.co/wJdN3Bk/image.png" width="600">

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
