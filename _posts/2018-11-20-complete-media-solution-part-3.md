---
title: Building a Media Center For Your Mom Part 3 - Synology & Docker
layout: post
description: It's time to get that Synology NAS set up, and do a little exploring with Docker.
image: hardware.jpg
imagetext: Hey Mom! I'm building a COMPUTER!
---

#### Previous in Series - [Part 2 - Hardware and Accounting]({% post_url 2018-11-18-complete-media-solution-part-2 %})

`Note: This post is strictly and entirely an educational experiment and I am in no way condoning the use, nor advocacy, of software to acquire copyrighted media content. If you use this information for such a purpose, you have been warned.`

## Server Software (Synology NAS)
You have the drives installed, you're connected to power, you're plugged in to the internet. Now press the power button and fire it up. On a Synology system you can use the Find My Synology service to easily log in on the same network.

### Updates & Shared Folders

#### Run system updates
Before you go much further, it's usually a good idea to install any new system updates before anything else. Security is always an issue, so make sure your device is fully updated before proceeding.

#### Create shared folders
Open the File Station by clicking on it's icon on the desktop. Click on the Create button, and choose Create New Shared Folder. Uncheck the box "Enable Recycle Bin." We want this system to be fully automated, and if we delete something, we want it to be immediately gone for good so there is no human interaction required.
Name the folder "series" and make sure that's lowercase. Click Next and proceed through the next few screens, leaving default settings for Encryption and Advanced Settings.

Now repeat the same process to create Shared Folders for "movies" and "downloads"

![Synology shared folder setup screen](/assets/img/media_post/shareFolder.PNG)

### Download Docker (Synology NAS)

{% highlight bash %}
If you don't know what Docker is (and if you don't work in the industry so you'll probably never NEED to know what Docker is) here's a silly analogy that can serve as a basic explanation.
{% endhighlight %}

Log in to your Synology, and click on Package Center. In the left menu, click All and search for Docker. Click install, and wait for it to finish. 

![Docker install screen](/assets/img/media_post/dockerInstall.PNG)


### Download Docker Images (Synology NAS)

Next we need to download a Docker image for each of the different apps we'll be using.

Open up Docker by clicking on the Main Menu, and then click the Docker icon. You can drag the Docker icon to the desktop to create a shortcut, if you wish.

Click on the Registry tab. This will present you with a list of all the possible Docker images that can be downloaded from the official repository.

Find the search box at the top, and perform the following steps:

- Search for **nzbget**
- Find the entry titled linuxserver/nzbget. 
- Right-click on it, and click **Download This Image**. Choose the "latest" tag.

![Docker image install screen](/assets/img/media_post/docker1.PNG)

- Search for **sonarr** (for tv series)
- Find the entry titled linuxserver/sonarr
- Right-click on it, and click  **Download This Image**. Choose the "latest" tag

![Docker image install screen](/assets/img/media_post/docker2.PNG)

- Search for **radarr** (for movies)
- Find the entry titled linuxserver/radarr
- Right-click on it, and click  **Download This Image**. Choose the "latest" tag

![Docker image install screen](/assets/img/media_post/docker3.PNG)

- (streaming to tvs and other devices) Search for **emby**
- Find the entry titled emby/embyserver
- Right-click on it, and click  **Download This Image**. Choose the "latest" tag

![Docker image install screen](/assets/img/media_post/docker4.PNG)

Click on the Image tab in the left menu. It may take a couple minutes to download all of the containers, but when they are complete, you will see them all listed here.

![List of installed Docker containers](/assets/img/media_post/docker5.PNG)

You can see in this screenshot that I've also installed Ubooquity. This is an application that functions a lot like Sonarr/Radarr, but for books and comics. It's a bit more complicated to setup, and also prone to problems and misconfiguration. Because of that, it's beyond the scope of this post, but maybe that's a post for another day.

#### Next in Series - Configure and Setup NZBGet - Coming Soon