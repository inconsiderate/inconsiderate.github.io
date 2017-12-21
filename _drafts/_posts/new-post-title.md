---
title: WSL and Vagrant and Virtualbox and YOU!
layout: post
date: 2017-12-23 02:24:40 -0800
description: Windows Subsystem for Linux is awesome. Introduced with Windows 10, it
  lets you (sort of) natively run Ubuntu inside of Windows without a VM. It's great,
  but there there are still some major pains in getting a dev environment working.
image: "/uploads/2017/12/21/runrunrun.jpg"
imagetext: Why isn't this working? ...SUDO ALL THE THINGS!
---

1. Install Bash for Ubuntu for Windows

"Turn Windows Features On and Off"

Check Windows SubSystem For Linux

Install Ubuntu from Windows store

Reboot

Make sure you are able to run Windows apps from inside Bash by typing notepad.exe

Open Ubuntu/Bash and open Notepad.exe to test Windows executables in bash

2. Install Vagrant - I'm using version 1.9.7

Download the 64-bit Debian package of Vagrant and run it inside Bash.

[https://www.vagrantup.com/downloads.html](https://www.vagrantup.com/downloads.html "https://www.vagrantup.com/downloads.html")

sudo dpkg -i vagrant_1.9.7_x86_64.deb

Download the Windows package and install that as well.

3. Install Virtualbox - I'm using version 5.1.24

Download the Windows 10 install package for Virtualbox and run it in Windows.

[https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads "https://www.virtualbox.org/wiki/Downloads")

Add Virtualbox to your windows environment variables.

For me this was C:\\Program Files\\Oracle\\VirtualBox

Pro-tip: Just type "environment variables" into the Windows Searchbar, and it'll go right to it.

Reboot.

4. Get Vagrant & Virtualbox to Play Nicely Together

Inside Bash, run the following to allow Vagrant access to Windows filesystem.

export VAGRANT_WSL_ENABLE_WINDOWS_ACCESS="1"

5. vagrant up yay!

6.  Bonus Problems

* mounting failed with the error: Protocol error

`/sbin/mount.vboxsf: mounting failed with the error: Protocol error`

Microsoft has changed the location of the old lxss directory which stores everything WSL. To fix this, you can create a symlink (within a Windows Terminal) to where VirtualBox is expecting these files to be.

`mklink /J C:\\Users\\%username%\\AppData\\Local\\lxss C:\\Users\\%username%\\AppData\\Local\\Packages\\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\\LocalState\\rootfs`

* vbguest versions do not match

At this point I was able to get the boxes running, which is something. But it would fail immediately after booting, with a message:

Vagrant was unable to mount VirtualBox shared folders, because vb guest addition versions do not match.

Or maybe because the filesystem vboxsf is missing.

Installing vbguest additions manually did the trick for me.

vagrant plugin install vagrant-vbguest

* Failed to mount folders in Linux guest. This is usually because the "vboxsf" file system is not available. Please verify that the guest additions are properly installed in the guest and can work properly.  

Stderr: VBoxManage.exe: error: Failed to open/create the internal network 'HostInterfaceNetworking-Marvell AVASTAR Wireless-AC Network Controller' (VERR_INTNET_FLT_IF_NOT_FOUND).

You may be selecting the wrong network interface. I was trying to use my regular network controller, changing to the Hyper-V Adapter got things working again.