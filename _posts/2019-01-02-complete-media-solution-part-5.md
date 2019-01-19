---
title: Building a Media Center For Your Mom Part 5 - Sonarr Setup and Config
layout: post
description: Step-by-step instructions for building a reliable and scalable local media center that will scale as large as your house will allow (and beyond).
image: media_post/bitingcomputer.jpg
imagetext: Computer's taste like love.
---

#### Previous in Series - [Part 4 - Hardware and Accounting]({% post_url 2018-12-22-complete-media-solution-part-4 %})

`Note: This post is strictly and entirely an educational experiment and I am in no way condoning the use, nor advocacy, of software to acquire copyrighted media content. If you use this information for such a purpose, you have been warned.`

Sonarr is a manager for television series, while Radarr does the same for movies. Sonarr and Radarr are functionally very similar (in fact Radarr was built off of Sonarr), so you'll see all of the same steps repeated here for both, but please note that the environment variables are different between them.

## Set up Sonarr

Log in to your NAS using your favorite web browser, and click on the Docker icon.
Click on the Image tab in the left menu, then click on the linuxserver/sonarr image which we installed back in the [server setup](#server-software) section, and then click **Launch** in the top menu.

1. Name the container something easy and identifiable. I like to go with "sonarr"
2. Leave high privilege and resource limitations unchecked.
3. Click on the **Advanced Settings** button
4. Check Enable auto-restart. This does what it sounds like, ensuring that Sonarr will restart in case the system needs to reboot (in case of power failure, installing updates, etc)

We need to make changes in three other Advanced Settings tabs. First, the Volume tab. We need to add 3 new Folders to this container.

#### Advanced Settings -> Volume
1. Under the Volume tab, click Add Folder.
Select the **downloads** folder which we created back in the [server setup](#server-software) section, and click Select.
In the Mount Path box, type `/downloads` and click Apply

2. Click Add Folder again, to mount another folder. Select the **series** folder, and click Select. In the Mount Path box, type `/tv` and click Apply

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

Click the Container tab in the left menu, and after a few moments you should see your new Sonarr container up and running. Select it, and click the Details button in the top menu. If you did everything right, it should look like this:

![Sonarr config screen](/assets/img/media_post/sonarrConfig.PNG)
If something isn't working, or you need to make a correction, you can stop the container (either in the current window, or by clicking Action -> Stop from the Container tab), and then click the Edit button in the Container tab.


### Sonarr Configuration

You can now log in to Sonarr by navigating to `http://yourServer.com:8989`

You may want to immediately start adding your shows, but curb that urge. First we need to get everything configured properly. Click on the Settings tab in the top menu, and before anything else, click on the Advanced Settings button, changing it to `shown`.

#### Settings -> Media Management

Episode Renaming can be nice if you're going to be looking at the files directly. It'll rename every downloaded file to a consistent and sane format. I like to have it on, but it's not absolutely necessary.

Everything else in this section can be left as defaults.

#### Settings -> Indexers

1. Click the large `+` to add a new Indexer. We will likely be using one of the Newznab compatible indexers like NZBgeek or nzbsplanet.net. Using one of the presets from the dropdown, you should only need to enter your API key, which we set up back in the [Set Up Accounts](#complete-media-solution-part-2) post.

2. Click Test and wait for the connection to turn green. If you have issues connecting here, check that the URL is correct and that you have properly copy/pasted your API key. You might try generating a new API key if possible.

3. Click Save.

#### Settings -> Download Client

1. Click the large `+` to add a Download Client

2. Click on `NZBGet`

3. Enter a name for this client (probably `nzbget`)

4. Leave Host set to `localhost`

5. Enter the username and password for NzbGet, which you set up before.

6. Change `category` to `Series`

7. Change Recent Priority to High. This will ensure that if there is a queue of older downloads, episodes that aired today will download first.

8. Click Test, and if the connection is successful click Save

{% highlight bash %}
You may encounter issues at this point trying to get a successful connection between the Sonarr and NzbGet containers. 

Test was aborted due to an error: Unable to connect to NzbGet. Error: ConnectFailure (Connection refused): 'http://localhost:6789/jsonrpc'

If you're sure that everything is entered correctly, but your Test consistently fails, you may need to create a Docker link to the container. Go back to the Synology dashboard (yourServer.com:5000) and open up the Docker application. In the Container tab, stop the Sonarr container, and then click on Edit. In the Links tab, create a new link to the nzbget container, and name it nzbget. Restart the container and repeat the above Settings steps to add a new Download Client, with the following change:

4. Change Host to `nzbget`

{% endhighlight %}

Drone Factory Options:

Make sure that `Drone Factory Interval` is set to `0`. This setting does a periodic scan of a physical location on your drive for manual download files. This functionality is deprecated, and should be turned off by setting the value to `0`.

#### Settings -> Metadata

1. Click on Kodi/Emby
2. Click Enable
3. Click Save

#### Settings -> General

1. Under Security, change Authentication type from None to Basic. 
2. Enter a new username and password (don't forget it, you'll need this later).

#### Settings -> UI

Feel free to change these to whatever is most comfortable to you.

### Finally
1. Click Save at the top of the page.
2. Click Reload Sonarr, and wait for the page to reload.
