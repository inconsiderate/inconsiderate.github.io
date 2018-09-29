---
title: The Complete Media Solution (for under $600)
layout: post
date: 2018-11-01 23:24:40 -1100
description: Step-by-step instructions for building a reliable and scalable local media center that will scale as large as your house will allow (and beyond).
image: hardware.jpg
imagetext: I'm building a COMPUTER!
---

We're going to build a system that will download media for you, as it's released, and allow playback both locally on your TV at full resolution as well as stream to remote devices with proper transcoding to avoid buffer/load time.

For this piece, I'm going to cover every step of building, setting up, and maintaining the whole system; and assume that everything is being purchased new and set up from fresh devices. This involves multiple pieces of hardware and steps, but by the end of this tutorial you will have a fully-functional system which you will never have to touch again for the next decade.

Here's a rundown of what we'll be doing over the next steps:

* [Set up the necessary accounts](#set-up-accounts)
    - Get access to Usenet
    - Get access to an indexer
* [Set up the hardware](#hardware)
    - Synology NAS
    - 2-4 NAS-capable hard drives
    - A TV-connected device for playback
* [Install the server software](#server-software)
    - Sonarr for TV series
    - Radarr for movies
    - NzbGet to handle the downloads
    - Ubooquity for comics and books (optional)
    - Emby/Plex for remote playback (optional)
* [Install the client software](#client-software)
    - Set up Roku/AndroidTV
    - Kodi/Emby/Plex for TV playback
* [Networks and Remote Access](#networks-and-remote-access)
    - Configure your router for remote access
    - nzb360 for remote management (optional)
    - Emby/Plex on your phone for remote playback (optional)

# Set Up Accounts

### Usenet
The heart of the whole operation.
List of known usenet services, and the important pieces of information you will need later:
- Retention days
- Hostname
- Port for encrypted access
- username/password

### Indexer (or two or three)
List of available indexers, along with prices

# Hardware
Before you start building anything, you're going to need hardware. For this project, our hardware priorities are:

1. Expandable storage
2. Easy to manage
3. Enough power to handle transcoding
4. Exceptionally quiet

In my experience, the best NAS devices on the market today are those on offer from Synology and QNAP. I have experience using Synology, and I know how they work, so that's what I'll be giving examples of throughout this piece. 

## The NAS Bit
I recommend getting the highest-end model you can afford. This is the most expensive piece of the whole puzzle, but if you treat it well it will quite literally last you a decade. Spend the extra hundred dollars and have piece of mind. Right now for Synology, the best is either the DS218play or the DS218+. The 2 represents how many drive bays it has, and the 18 represents the year it was released. It's 2018 right now. Hello from the past! You can compare the two models, but I believe the + is being phased out for the play, so you'll probably be going with the play.

https://www.synology.com/en-global/products/DS418play

## The Hard Drives Bit
Hard drives aren't very sexy, but there are a few important things to mention here, but we all know the most important part: go big or go home. 

There are two critical things to remember when it comes to hard drive selection. 
1. Buy NAS specific drives. These drives are going to be on _all_ the time. Even when you're not actively using the device, the software we're using will be running system checks, downloading files, checking for changes on disk. You really want to get drives that are designed to be used constantly. Again, you spend a bit extra now and they will last you for more years. Western Digital NAS drives are called Red, which Seagate are called IronWolf.

## Put It Together
Plug your fancy new hard drives in to the NAS, plug it in

# Server Software

## Docker

## Sonarr

## Radarr

## NzbGet

## Ubooquity

## Emby Server

## Plex Server

# Client Software

## AndroidTV

## Roku

## Kodi install and config

## Emby install and config

## Plex install and config
This is the thing.

# Networks and Remote Access
This is where we do all of the port forwarding on your router, and set up nzb360 and emby/plex on your phone.