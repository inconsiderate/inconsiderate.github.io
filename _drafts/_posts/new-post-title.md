---
title: WSL and Vagrant and Virtualbox and YOU!
layout: post
date: 2017-12-21 02:24:40 -0800
description: Windows Subsystem for Linux is awesome. Introduced with Windows 10, it
  lets you (sort of) natively run Ubuntu inside of Windows without a VM. It's great,
  but there there are still some major pains in getting a dev environment working.
image: "/assets/img/runrunrun.jpg"
imagetext: Why isn't this working? ...SUDO ALL THE THINGS!
---
I recently got a SurfaceBook 2 laptop to replace my aging Macbook Air. It's really not much of a "new thing" to me since I use Windows at the office, but there I work within Cygwin. I've read a bit about this newfangled WSL thing that Microsoft is promoting, and figured I may as well give that a try on my personal machine.

So. Here we go.

P.S. I don't miss [Sketch ](https://www.sketchapp.com/) at all. Really. I'm not in denial. :/

### 1. Install Bash for Ubuntu for Windows (for awesome people)

* In control panel, navigate over to "Turn Windows Features On and Off." In the list, find and check the "Windows SubSystem for Linux" box.
* In the Microsoft Store, find and install the Ubuntu app. Other places may tell you install from a terminal window, but the most up to date version is found on the app store.
* Reboot
* Open Ubuntu by clicking on the fancy new Ubuntu icon you just installed, and follow the prompts to choose a password and finish setting up.
* Inside Ubuntu, type `notepad.exe` to ensure you can execute Windows executables from within the WSL. If you can't, you're running an earlier version of the WSL and probably didn't install from the Microsoft Store.

### 2. Install Vagrant (I'm using version 1.9.7)

* Download the 64-bit Debian package of Vagrant that suits your needs. I'm using version 1.9.7 for compatibility reasons, and because this is the version I use in the office.

  [https://www.vagrantup.com/downloads.html](https://www.vagrantup.com/downloads.html "https://www.vagrantup.com/downloads.html")
* Open up Ubuntu, locate the file you just downloaded, and install it!

  `sudo dpkg -i vagran_t1.9.7_x86_64.deb`
* Download the Vagrant Windows package and install that as well. **Make sure it's the same version!**

### 4. Install Virtualbox - I'm using version 5.1.24

* Download the Windows 10 install package for Virtualbox and run it in Windows.

[https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads "https://www.virtualbox.org/wiki/Downloads")

### 5. Add Virtualbox to your Windows environment variables.

For me this was C:\\Program Files\\Oracle\\VirtualBox

Pro-tip: Just type "environment variables" into the Windows Searchbar, and it'll take you right to it.

### 6. Reboot.

### 7. Get Vagrant & Virtualbox to Play Nicely Together

* Inside Bash, you'll need to set an environment variable to give Vagrant access to the Windows filesystem.

   {% highlight bash %}export VAGRANT_WSL_ENABLE_WINDOWS_ACCESS="1"{% endhighlight %}
* `vagrant up` yay!

### 8. Mounting Directories

`mounting failed with the error: Protocol error`

`/sbin/mount.vboxsf: mounting failed with the error: Protocol error`

You're probably going to see one of these errors when you first try to bring up a fresh VM. Microsoft has changed the location of the old lxss directory which stores everything related to WSL. To fix this, you can create a symlink (within a Windows Terminal) to where VirtualBox is expecting these files to be.

`mklink /J C:\%username%\AppData\Local\lxss C:\Users\%username%\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\rootfs`

{% highlight bash %}Vagrant was unable to mount VirtualBox shared folders, because vb guest addition versions do not match.{% endhighlight %}
{% highlight bash %}Failed to mount folders in Linux guest. This is usually because the "vboxsf" file system is not available.

Please verify that the guest additions are properly installed in the guest and can work properly.{% endhighlight %}

At this point I was able to get the box to initialize, which is something (yay), but it would fail immediately after booting. Any of the above errors are likely caused by problems with Virtualbox. Vagrant has support for WSL, but as of writing Virtualbox does not.

Installing vbguest additions manually fixed this for me:

`vagrant plugin install vagrant-vbguest`

But you may get problems where the version are mismatched, or it just keeps failing with one of the same messages above. Mine worked right away, but a co-worker solved this by installing a different version of Virtualbox and guest-editions.

{% highlight bash %}Stderr: VBoxManage.exe: error: Failed to open/create the internal network 'HostInterfaceNetworking-Marvell AVASTAR Wireless-AC Network Controller' (VERR_INTNET_FLT_IF_NOT_FOUND).{% endhighlight %}

And finally, the last problem (that I encountered, at least). You may be selecting the wrong network interface. This was just me being stupid, but I was trying to use my standard network controller at first; switching to the Hyper-V Adapter got things working again.

### 9. Done?

Hopefully everything worked out, and you're now smooth sailing and able to fire up your own virtual machines. If not, please let me know what worked for you (and what didn't)!