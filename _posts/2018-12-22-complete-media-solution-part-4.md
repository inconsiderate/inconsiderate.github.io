---
title: Building a Media Center For Your Mom Part 4 - NZBGet Setup
layout: post
description: NZBGet, the heart of the operation. Let's get it setup and running.
image: hardware.jpg
imagetext: Hey Dad! I'm building a COMPUTER!
---

#### Previous in Series - [Part 3 - Synology & Docker]({% post_url 2018-11-21-complete-media-solution-part-3 %})

`Note: This post is strictly and entirely an educational experiment and I am in no way condoning the use, nor advocacy, of software to acquire copyrighted media content. If you use this information for such a purpose, you have been warned.`

## NZBGet

NZBGet is a download client.

### Setup the Docker Container

Log in to your NAS using your favorite web browser, and click on the Docker icon.
Click on the Image tab in the left menu, then click on the linuxserver/nzbget image which we installed back in the [server setup](#server-software) section, and then click **Launch** in the top menu.

1. Name the container something easy and identifiable. I like to go with "nzbget"
2. Leave high privilege and resource limitations unchecked.
3. Click on the **Advanced Settings** button
4. Check Enable auto-restart. This does what it sounds like, ensuring that NZBGet will restart in case the system needs to reboot (in case of power failure, installing updates, etc)

We need to make changes in three other Advanced Settings tabs. First, the Volume tab. We need to add 3 new Folders to this container.

#### Advanced Settings -> Volume
1. Under the Volume tab, click Add Folder.
Select the **downloads** folder which we created back in the [server setup](#server-software) section, and click Select.
In the Mount Path box, type `/downloads` and click Apply

2. Click Add Folder again, to mount another folder. Select the **series** folder, and click Select. In the Mount Path box, type `/tv` and click Apply

3. Click Add Folder again. Select the **movies** folder, and click Select. In the Mount Path box, type `/movies` and click Apply

Basically what we're doing here is linking a folder on your hard drive to a folder inside the Docker container, so that the application running inside the container can use it.

#### Advanced Settings -> Port Settings

Under Port Settings, there should only be a single entry assigned Auto to 6789.
* Change the word `auto` to be `6789`.

#### Advanced Settings -> Environments
Click the large `+` symbol twice to add two new entries:
* In the variable box, type `PUID`, and for value enter `0`
* In the variable box, type `PGID`, and for value enter `101`

{% highlight bash %}
// It's possible that your PUID and PGID values may be different from mine. If you have problems, open a terminal and find out the values using the id command:
$ id <dockeruser>
    uid=1001(dockeruser) gid=1001(dockergroup) groups=1001(dockergroup)
{% endhighlight %}

Click Apply at the bottom, and then Next. Review the changes, and if everything looks correct as these instructions, click Apply.

Click the Container tab in the left menu, and after a few moments you should see your new NZBGet container up and running. Select it, and click the Details button in the top menu. If you did everything right, it should look like this:

![Sonarr config screen](/assets/img/media_post/nzbgetConfig.PNG)
If something isn't working, or you need to make a correction, you can stop the container (either in the current window, or by clicking Action -> Stop from the Container tab), and then click the Edit button in the Container tab.

### NZBGet Configuration

You can now log in to NzbGet by navigating to `http://yourServer.com:6789`

The default user name and password to access the web admin panel is `nzbget:tegbzn6789`
Once you're logged in, you should see a nice happy (empty) Download Queue page:

![NZBGet Homepage](/assets/img/media_post/downloadQueue.PNG)
Take a moment to familiarize yourself with how everything is laid out (if you like), then click on the Settings tab in the top menu, and let's get things configured.

#### Settings -> News-servers

* **Name** - Something simple like the name of your hosting provider: newshosting
* **Host** - See the NNTP page for your hosting provider. Probably: news.newshosting.com
* **Port** - See the NNTP page for your hosting provider. Probably: 563 or 443
* **Username** - The username you used when you signed up for hosting.
* **Password** - The password you used when you signed up for hosting. There's a trend here.
* **Encryption** - Flip to `Yes` and make sure you use the correct port above.
* **Connections** - See the NNTP page for your hosting provider. Probably: 30
* **Retention** - See the NNTP page for your hosting provider. Could be anywhere from 300 to 5000 or higher. If you can't find the right value, enter 0 for none.

#### Settings -> Security

Change **ControlUsername** and **ControlPassword** to values that you won't forget.

#### Settings -> Check and Repair

We want to make sure that everything here runs as smoothly as possible, with no user input. That means makes some allowances in these settings, to help avoid buffering issues during playback.

**ParScan - Limited**
Extended is the default here, but doing a full scan of all files is a huge CPU drain. Setting this to Limited means it will only do a scan of files belonging to the par-set. This saves time, and frankly we don't really care if there's a failure. We'll just download a new file.

**ParBuffer - Anywhere from 200-1000**
You should definitely increase this. The value you choose depends entirely on how much RAM is in your NAS. Repairs can sometimes take longer than the download itself, so increasing the amount of RAM available to the process will greatly reduce the time here. Note that there's no point in going higher than the theoretical total size of damaged blocks that you're repairing.

**ParTimeLimit - 10 min**
This is a big one. I don't know the reason why (comment if you do!) but I have found that fairly often I'll get a download that takes hours (sometimes up to 3 or 4 hours) to do the par-repair. That means the CPU is basically locked up for that entire time, which means that not only can nothing else finished downloading because the queue is backed up, but I also can't play any files on the TV because the CPU is throttled.
This setting will cancel the repair and mark it as a failure if the repair is estimated to take longer than 10 mins. This is good because then your downloader will go grab a different file. After some experimentation, I feel 10 minutes is the best comromise here based on my average completion times.

**ParPauseQueue - Yes (optional)**
Default here is no. I like to set this to Yes because, like the above, repair is the most intensive part of the whole process. Pausing downloads for 10 minutes while the Repair process does it's thing is a small trade in my opinion.

### Finally
1. Click Save at the bottom of the page.
2. Click Reload NZBGet, and wait for the page to reload.

#### Next in Series - Configure and Setup Sonarr - Coming Soon