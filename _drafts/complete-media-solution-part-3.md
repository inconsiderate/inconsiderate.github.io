---
title: Building a Media Center For Your Mom Part 3 - Synology & Docker
layout: post
date: 2018-09-21
description: Step-by-step instructions for building a reliable and scalable local media center that will scale as large as your house will allow (and beyond).
image: hardware.jpg
imagetext: Hey Dad! I'm building a COMPUTER!
---

`Note: This post is strictly and entirely an educational experiment and I am in no way condoning the use, nor advocacy, of software to acquire copyrighted media content. If you use this information for such a purpose, you have been warned.`

## Server Software
You have the drives installed, you're connected to power, you're plugged in to the internet. Now press the power button and fire it up. On a Synology system you can use the Find My Synology service to easily log in on the same network.

### Updates & Shared Folders

- Run system updates
- Create new folders for Series, Movies, Downloads

### Download Docker Images

{% highlight bash %}
If you don't know what Docker is, and if you don't work in the industry so you'll probably never NEED to know what Docker is, here's a fun analogy that can serve as a basic explanation.

Explain docker as a whole, images, and containers.
{% endhighlight %}

First thing we need to do is download a Docker image for each of the apps we'll be using.

Opening up Docker by clicking on the Main Menu, and then clicking the Docker icon. You can drag the Docker icon to the desktop to create a shortcut, if you wish.

Click on the Registry tab. This will present you with a list of all the possible Docker images that can be downloaded from the official repository.

Find the search box at the top, and perform the following steps:
- (mandatory) Search for **nzbget**
- Find the entry titled linuxserver/nzbget. 
- Right-click on it, and click **Download This Image**. Choose the "latest" tag.
- (for tv series) Search for **sonarr**
- Find the entry titled linuxserver/sonarr. 
- Right-click on it, and click  **Download This Image**. Choose the "latest" tag.
- (for movies) Search for **radarr**
- Find the entry titled linuxserver/radarr. 
- Right-click on it, and click  **Download This Image**. Choose the "latest" tag.
- (streaming to tvs and other devices) Search for **emby**
- Find the entry titled emby/embyserver. 
- Right-click on it, and click  **Download This Image**. Choose the "latest" tag.

Click on the Image tab in the left menu. It may take a minute to download all of the containers, but when they are complete, you will see them all listed here.

#TODO: IMAGE OF CONTAINER LIST

Next, let's install and configure each of the applications we just downloaded.
