---
title: Building a Media Center For Your Mom Part 2 - Hardware and Accounting
layout: post
date: 2018-11-18
description: Before we start building anything, we're gonna need hardware. Specifically, we need a NAS to serve files, hard drives to put in the NAS, and a tv-attached playback device. We'll also need to set up the external accounts that will link everything together.
image: hardware.jpg
imagetext: Hey Mom! I'm building a COMPUTER!
---

#### Previous in Series - [Part 1 - Introduction]({% post_url 2018-11-16-complete-media-solution-part-1 %})

`Note: This post is strictly and entirely an educational experiment and I am in no way condoning the use, nor advocacy, of software to acquire copyrighted media content. If you use this information for such a purpose, you have been warned.`

## Hardware

Before we start building anything, we're gonna need hardware. Specifically, we need a NAS to serve files, hard drives to put in the NAS, and a tv-attached playback device. For this project, our hardware priorities are:

1. Expandable storage
2. Easy to manage
3. Enough power to handle transcoding
4. Exceptionally quiet

The four Es. In my experience, the best NAS devices on the market today are those on offer from Synology and QNAP. I have experience using Synology, and I know how they work, so that's what I'll be giving examples of throughout this piece. 

### NAS
I recommend getting the highest-end model you can afford. This is the most expensive piece of the whole puzzle, but if you treat it well it will quite literally last you a decade. Spend the extra few dollars and get piece of mind. Right now for Synology, the best is either the DS418Play or the DS418+. The 4 represents how many drive bays it has, and the 18 represents the year it was released. It's 2018 right now. Hello from the past! You can compare the two models, but I believe the + is being phased out in favour of the Play, so you'll probably be going with the play.

https://www.synology.com/en-global/products/DS418play

### Hard Drives
Hard drives aren't very sexy, but there are a few important things to mention here.

There are three things to consider when it comes to hard drive selection. 
1. Buy NAS specific drives. These drives are going to be on _all_ the time. Even when you're not actively using the device, the software we're using will be running system checks, downloading files, checking for changes on disk. You really want to get drives that are designed to be used constantly. Again, you spend a bit extra now and they will last you for more years. Western Digital NAS drives are called Red, while Seagate are called IronWolf.
2. Buy drives of the same brand.
3. Buy drives of the same size. The reason _why_ you should do this has changed over the years. In older systems we would use something called a RAID array. One problem with a RAID is that if you had a system with 3 drives of different sizes, the larger drives would function as if they were the smallest size in the array. It's not important to worry about RAID anymore, because most NAS systems have a similar (sometimes better) way of handling clusters of drives, and not only do they allow use of the full available space, but they do it all for you automatically. What matters today is that if a drive happens to fail, you _must_ replace it with a drive of the same or more storage. For this reason, it's usually a good idea to keep things consistent.

### Put It All Together
Plug your fancy new hard drives in to the NAS, plug it in to the wall, plug in the network cable, depress the power button - and wait.
Wait for a long time.

From here, setup is fairly straightforward. Follow all of the prompts, filling in your information. Make sure to use a password that you won't forget, as we'll need it later!

Typically it should take around 10-20 minutes to complete the first time setup. That gives us a bit of time to move on to the next step. Setting up the necessary usenet and indexer accounts.

## Sign Up for Third-Party Accounts

### Usenet
The heart of the whole operation. Usenet is a complicated squiggle in the history of the internet. It's kind of like a repository of data that lives in a space apart from what we consider "the internet." Because of that, you need to get special access to it. The two main players in the world of Usenet are [usenetserver.com](http://usenetserver.com/partners/?a_aid=inconsiderate&a_bid=5725b6ed) and [newshosting.com](https://www.newshosting.com/partners/?a_aid=inconsiderate&a_bid=5ecfe99b).

When comparing usenet services, there are a few things to pay attention to:

#### Retention days
This is the amount of time a file will stay on the Usenet server after it's been uploaded. This will typically be around 3500 days, which is more than enough for our purposes.
#### Data cap / Transfer speed cap
This isn't really much of a problem anymore. Both [usenetserver.com](http://usenetserver.com/partners/?a_aid=inconsiderate&a_bid=5725b6ed) and [newshosting.com](https://www.newshosting.com/partners/?a_aid=inconsiderate&a_bid=5ecfe99b) offer unlimited data transfer. But some other services have a cap on how much you can download per month.
#### Server location
Choose a service with servers in your chosen country! Or at least nearby, if possible. The closer they are, the faster your downloads will be.

Once you've signed up for a service, you'll want to record the following information somewhere, as we'll need it later:
- Hostname
- Port for encrypted access
- Username/Password
- Retention

### Indexer (or two or three)
The second piece of the usenet puzzle is an indexer. These are websites that track everything that gets uploaded to the usenet network. Essentially what will happen is that you will search for a specific program on the Indexer, the indexer will then return a list of files that match your search, and finally your program will connect to the Usenet service to download that file.

There are A LOT of indexers online. Some of the charge a small monthly fee, some of them are free but invite-only, and some only accept new invitations extremely rarely, or only in small bursts.

I recommend signing up for one of the established services that offer a lifetime membership option. You'll save money in the long run, and it's vital part of the system. [NzbGeek](https://nzbgeek.info) and [NzbPlanet](https://nzbplanet.net/register) are two popular options that both offer lifetime subscriptions.

It can also be worth your while to sign up for both services (or even more if you decide to do some exploring yourself). Often one indexer may return files/episodes that another missed, so it's doesn't hurt at all to check multiple sources. 

Once you've signed up, you'll need to check in the settings for your account and find the API key. Save this, as we'll need it later.

#### Next in Series - Configure your NAS and set up Docker - Coming Soon
