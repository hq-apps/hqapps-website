---
title: "QR code EXE"
fullTitle: "39C3 QR code EXE thing"
date: 2022-08-21T13:28:53+02:00
draft: false
---

I don't have any better name idea, please [contact me](https://fosstodon.org/@Lenni) if you do.


## Why?

You're seriously asking this?  
I saw a similar thing at 38C3 with a Linux binary encoded in a QR code (I can't find a photo of it right now, contact me if you do) and thought the next logical thing would be doing this with a Windows binary. I was also inspired by [this video](https://www.youtube.com/watch?v=ExwqNreocpg) from MattKC.

## How?

The (source code)[https://codeberg.org/Lenni/qrcode-exe] is written in x86 assembly and calls some win32 APIs to display the window and open the URL. I'm using a mix of Windows batch scripts and BASH scripts to build the executable and create the QR code. More details on that can be found in the README on Codeberg. 
