---
title: Building a Media Center For Your Mom Part 7 - Emby/Plex Setup
layout: post
date: 2018-09-28
description: Step-by-step instructions for building a reliable and scalable local media center that will scale as large as your house will allow (and beyond).
image: hardware.jpg
imagetext: Hey Dad! I'm building a COMPUTER!
---

`Note: This post is strictly and entirely an educational experiment and I am in no way condoning the use, nor advocacy, of software to acquire copyrighted media content. If you use this information for such a purpose, you have been warned.`

When you're streaming media to other devices, sometimes your network throughput isn't going to be good enough relative to the size of your files. Trying to stream a 4K (or higher) video from your your homeserver with a 2mb uplink, to your phone while you're riding the bus may not work very well. This is where the transcoding ability of Emby and Plex come in. Both of these programs will reduce the size of your media on the fly, while you're watching it. This means you'll be watching a lower quality stream when your connection is less than ideal, but you can avoid stuttering buffering video.

## Emby Server

### Setup the Docker Container

Log in to your NAS using your web browser, and click on the Docker icon.
Click on the Image tab in the left menu, then click on the emby/embyserver image which we installed back in the [server setup](#server-software) section, and then click **Launch** in the top menu.

1. Name the container something easy and identifiable. I like to go with "embyserver"
2. Leave high privilege and resource limitations unchecked.
3. Click on the **Advanced Settings** button
4. Check Enable auto-restart. This does what it sounds like, ensuring that the Emby Server will restart in case the system needs to reboot (in case of power failure, installing updates, etc).

We need to make changes in three other Advanced Settings tabs. First, the Volume tab. We need to add 2 new Folders to this container.

#### Advanced Settings -> Volume
1. Under the Volume tab, click Add Folder.
Select the **series** folder which we created back in the [server setup](#server-software) section, and click Select.
In the Mount Path box, type `/share1` and click Apply

2. Click Add Folder again, to mount another folder. Select the **movies** folder, and click Select. In the Mount Path box, type `/share2` and click Apply

Basically what we're doing here is linking a folder on your hard drive to a folder inside the Docker container, so that the application running inside the container can use it.

#### Advanced Settings -> Port Settings

Under Port Settings, you want to associate specific internal and external ports.
* In the 8096 row, change the word `auto` to be `8096`.
* In the 8920 row, change the word `auto` to be `8920`.

#### Advanced Settings -> Environments
Find the entries for UID and GID at the bottom of the list.

* Change the value for `UID` to `0`
* Change the value for `GID` to `101`

{% highlight bash %}
// It's possible that your UID and GID values may be different from mine. If you have problems, open a terminal and find out the values using the id command:
$ id <dockeruser>
    uid=1001(dockeruser) gid=1001(dockergroup) groups=1001(dockergroup)
{% endhighlight %}

Click Apply at the bottom, and then Next. Review the changes, and if everything looks correct, click Apply.

Click the Container tab in the left menu, and after a few moments you should see your new embyserver container up and running. Select it, and click the Details button in the top menu. If you did everything right, it should look like this:

![Emby config screen](/assets/img/media_post/embyConfig.PNG)
If something isn't working, or you need to make a correction, you can stop the container (either in the current window, or by clicking Action -> Stop from the Container tab), and then click the Edit button in the Container tab.

### Config Emby

Once your container is running head to http://yourServer:8096
If you only just launched the container, you may need to wait 5 minutes or so for it to completely initialize everything before it will respond.

I've seen on some installations the default path doesn't work. If so, try going to http://yourServer:8096/web/index.html?start=wizard#!/wizardstart.html

Continue through the prompts, choosing your language, entering your name, etc.
Skip linking an Emby account.

#### Set up your media library:

* Click the `+` next to Folders
* Scroll down and click on `/share1` then click `ok`
* Content Type: Choose TV Shows
* Choose your preferred metadata language and Country
* Check `Save artwork into media folders`
* Choose your default subtitle language
* Click `ok`

Repeat the same steps again, choosing `/share2` and `Movies`

On the following screens, uncheck `enable automatic port mapping` as we will be setting this up manually later on.

Accept the TOS, and click `Finish`


![Emby config screen](/assets/img/media_post/embyConfig.PNG)
![Emby config screen](/assets/img/media_post/embyConfig2.PNG)

## Plex Server

Plex and Emby have a fairly similar set up process.

# Client Software

## AndroidTV

## Roku

## Kodi install and config

## Emby install and config

## Plex install and config
This is the thing.

