---
title: Building a Media Center For Your Mom Part 1 - Introduction
layout: post
description: Let's say your mom asks you to build her one of those "movie streaming" thingies she's heard about. You know how complicated these things can be, so you want to build something that is self-contained, simple, and requires zero user input.
image: media_post/action-plan.jpg
imagetext: Mom is gonna LOVE this! It's so simple!
---

`Note: This post is strictly and entirely an educational experiment and I am in no way condoning the use, nor advocacy, of software to acquire copyrighted media content. If you use this information for such a purpose, you have been warned.`

Let's say your mom asks you to build her one of those "movie streaming" thingys she's heard about. You know how complicated these things can be, so you want to build something that is self-contained, simple, and requires zero user input.

### Here's our end goal:

To build a system that will download media for you, as it's released, and allow playback both locally on your TV at full resolution as well as stream to remote devices with proper transcoding to avoid buffer/load time.

These are the key criteria we are interested in for this project:
1. **Compact**. With the size of hard drives today, there's no reason we can't hide this device on a bookshelf.
2. **Cheap**. Relative to the price of a cable subscription.
3. **Complexity**. This device should be simple to set up and, more importantly, so simple to use that your mother could do it.

For this piece, I'm going to cover every step of building, setting up, and maintaining the entire system. There are a lot of tutorials out there that talk about using that old junker PC you have in the back of the closet and turning it into a media center. That's not what we're doing here. For this experimnet, everything is being purchased new and set up from fresh devices in the simplest possible way. This means it may end up being more expensive overall, but the goal here is simplicity!

This involves multiple pieces of hardware and steps, but by the end of this tutorial you will have a fully-functional system which you will never have to touch again for the next decade (probably).

Here's a rundown of what we'll be doing over the next steps:

* [Set up hardware and third-party services]({% post_url 2018-11-18-complete-media-solution-part-2 %})
    - 2-4 bay Synology NAS
    - 2-4 (designed-for-NAS) hard drives
    - A TV-connected device for playback
    - Get access to Usenet
    - Get access to an indexer

* [Configure your NAS and set up Docker]({% post_url 2018-11-21-complete-media-solution-part-3 %})
    - Set up your NAS
    - Install and configure Docker
    - Prepare Docker containers

* [Install the server software - NzbGet]({% post_url 2018-12-22-complete-media-solution-part-4 %})
    - Configure the NzbGet Docker container
    - Configure NzbGet

* Install the server software - Sonarr - Coming Soon
    - Configure the Sonarr Docker container
    - Configure Sonarr

* Install the server software - Radarr - Coming Soon
    - Configure the Radarr Docker container
    - Configure Radarr

* Install the client software - Coming Soon
    - Set up Roku/AndroidTV
    - Emby for playback on your TV

* Networks and Mobile Access - Coming Soon
    - Configure your router for remote access
    - nzb360 for remote management
    - Emby on your phone for remote playback (optional)

Okay, let's dig in!