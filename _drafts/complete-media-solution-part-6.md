---
title: Building a Media Center For Your Mom Part 6 - Radarr Setup and Config
layout: post
date: 2018-09-26
description: Step-by-step instructions for building a reliable and scalable local media center that will scale as large as your house will allow (and beyond).
image: hardware.jpg
imagetext: Hey Dad! I'm building a COMPUTER!
---

`Note: This post is strictly and entirely an educational experiment and I am in no way condoning the use, nor advocacy, of software to acquire copyrighted media content. If you use this information for such a purpose, you have been warned.`

Sonarr is a manager for television series, while Radarr does the same for movies. Sonarr and Radarr are functionally very similar (in fact Radarr was built off of Sonarr), so you'll see all of the same steps repeated here for both, but please note that the environment variables are different between them.

## Set up Radarr

Log in to your NAS using your favorite web browser, and click on the Docker icon.
Click on the Image tab in the left menu, then click on the linuxserver/radarr image which we installed back in the [server setup](#server-software) section, and then click **Launch** in the top menu.

1. Name the container something easy and identifiable. I like to go with "radarr"
2. Leave high privilege and resource limitations unchecked.
3. Click on the **Advanced Settings** button
4. Check Enable auto-restart. This does what it sounds like, ensuring that Radarr will restart in case the system needs to reboot (in case of power failure, installing updates, etc)

We need to make changes in three other Advanced Settings tabs. First, the Volume tab. We need to add 3 new Folders to this container.

#### Advanced Settings -> Volume
1. Under the Volume tab, click Add Folder.
Select the **downloads** folder which we created back in the [server setup](#server-software) section, and click Select.
In the Mount Path box, type `/downloads` and click Apply

2. Click Add Folder again, to mount another folder. Select the **movies** folder, and click Select. In the Mount Path box, type `/movies` and click Apply

Basically what we're doing here is linking a folder on your hard drive to a folder inside the Docker container, so that the application running inside the container can use it.

#### Advanced Settings -> Port Settings

Under Port Settings, there should only be a single entry assigned Auto to 8989.
* Change the word `auto` to be `8989`.

#### Advanced Settings -> Environments
Click the large `+` symbol twice to add two new entries:
* In the variable box, type `PUID`, and for value enter `0`
* In the variable box, type `GUID`, and for value enter `101`

{% highlight bash %}
// It's possible that your PUID and PGID values may be different from mine. If you have problems, open a terminal and find out the values using the id command:
$ id <dockeruser>
    uid=1001(dockeruser) gid=1001(dockergroup) groups=1001(dockergroup)
{% endhighlight %}

Click Apply at the bottom, and then Next. Review the changes, and if everything looks correct as these instructions, click Apply.

Click the Container tab in the left menu, and after a few moments you should see your new Radarr container up and running. Select it, and click the Details button in the top menu. If you did everything right, it should look like this:

![Radarr config screen](/assets/img/media_post/radarrConfig.PNG)
If something isn't working, or you need to make a correction, you can stop the container (either in the current window, or by clicking Action -> Stop from the Container tab), and then click the Edit button in the Container tab.

