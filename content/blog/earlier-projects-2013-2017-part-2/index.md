---
title: "Earlier projects (2013-2017): Part 2"
date: 2026-10-01
slug: "earlier-projects-2013-2017-part-2"
description: "Assortment of projects completed in the distant past"
tags: ["woodworking", "prototyping", "programming", "parametric-design", "3d-printing", "drawing-machine"]
author: "Vasken Dermardiros"
math: true
draft: false
---

## About this project catalogue

Here is, in alphabetical order, a collection of some of my very past work. I've built other things during this period but they've failed so hard that I rather just forget about them! Most of the software files are no longer functional due to outdated libraries and since AI coding is so good that it's probably easier to just ask Claude to build it again, that I decided not to include them. If you're really interested, contact me.

The main themes are: woodworking, 3d-printing often involving some form of parametric design using Rhino [Grasshopper](https://www.rhino3d.com/features/#grasshopper), electronics often involving the Arduino or ESP32, and drawing machines often involving a form of CNC.

Had to break this post into three parts:
- [Part 1](/blog/2026/earlier-projects-2013-2017-part-1/)
- Part 2 (this post)
- [Part 3](/blog/2026/earlier-projects-2013-2017-part-3/)

## led pov

*Tags: photography, software, electronics*

Persistence of vision. Fast blinky lights to words.

![](led-pov_IMG_2218.webp)

## led warmwhite coolwhite amber fade

*Tags: software, lighting*

Lights that mimic the exterior light colour.

This was part one: how to blend the different colours. Next step is to read the
time and change the colour accordingly. The LED has 3 channels: amber, warm
white and cool white, which is pretty neat.

*Wish I took pictures of this...*

## line relief

*Tags: software, drawing*

I wanted lines to keep going straight and over object they encounter. Then, I'd
draw out the lines on my polargraph when looking at it from far. Here's what I
have: 3 cones and a cylinder. Imagine that with text. Easy peasy.

![](line-relief_Capture.webp)

## make a splash

*Tags: software, electronics, food, photography*

High speed photography with movement trigger.

I used an Arduino and a line sensor to trigger my camera. The camera has an
external trigger port (looks like a tiny headphone jack) to which I connected
the Arduino. A potentiometer was used to specify the delay to trigger the camera
after I drop the grape and it passes the line sensor.

![](make-a-splash_IMG_9038.webp)
![](make-a-splash_IMG_9066.webp)

## maps

*Tags: design, drawing*

Saw this somewhere, replicated it.

Simple city map. Can you guess which is which?

![](maps_manhattan-2.webp)
![](maps_montreal-3.webp)
![](maps_venice.webp)

## mechanical keyboards

*Tags: software, design, electronics*

### kwark 40% keyboard

40% keyboard. Damn small.

I always wanted one but they're quite expensive online and the key placement was
never what I exactly wanted. By custom making it I can decide where the keys go
and what they do. Using the TMK package, you program an Arduino-ish micro
controller to act as a keyboard. With layers accessed by function keys, you have
the number and F keys. I bought an old Razer keyboard (Cherry MX blues) and
unsoldered the keys and used those for this project. The key plate was laser cut
at school.

![](mechanical-keyboards__MG_6611.webp)
![](mechanical-keyboards__MG_6612.webp)
![](mechanical-keyboards_keyboard-layout.webp)

### alpha28 keyboard

For this one, I found someone else's design but didn't really like the keymap so
I designed my own; I then uploaded my firmware on the QMK GitHub.

Alternate keymap for [Alpha 28-key keyboard](https://github.com/qmk/qmk_firmware/tree/master/keyboards/alpha).

#### How-to

Assuming you've followed all the instructions from the original post, put my "keymap.c" file in "\$qmk-firmware-folder\$/keyboards/alpha/keymaps/vderm/" and then run your make command ("make alpha:vderm" while in \$qmk-firmware-folder\$ where this folder is what you've downloaded from the official github page) to compile the hex file to upload to your microcontroller. I've also uploaded my hex file.

#### Description

Instead of going up and down layers like in the original Alpha keyboard, I've made the bottom row keys all have alternate functions:
- Like in the original Alpha28 keymap, the 2U spacebar is a shift key when held down and space when tapped
- Z and M are Ctrl keys when held down or Z and M when tapped
- X and N are Alt keys
- C activates the function keys layer (arrows, page up/dn, esc, tab, etc.)
- V activates the characters and numbers layer
- C and V combined activated the F-keys layer (F1, F2, F3, etc.)
- The enter key is an enter key in the home layer, backspace in the function keys and characters/numbers layer and a delete in the F-keys layer
- While in the other layers, the bottom row acts like a "regular" bottom modified row: ctrl, alt, winkey

#### Keymap

![keymap](https://imgur.com/ZbDz0eL.jpg)

#### Build Images

Here is my keyboard.
- Switches: Aliaz Silent Switches (Tactile), PCB mount, 80g from [KBDfans](https://kbdfans.cn/collections/aliaz-switches/products/pre-orderaliaz-silent-switch-tactile?variant=2519899832333)
- PCB board: ordered from JLCPCB, in white
- Keycaps: ebay, can't find link :S
- Bottom plate: I cut a piece of canary wood that was laying around, needs to be varnished; I also need to actually screw the pcb to the wood instead of relying on double-sided tape

![vderm_alpha0](https://imgur.com/MjjoVtr.jpg)
![vderm_alpha2](https://imgur.com/A70Iemw.jpg)

Good luck on your build!
//vderm

## metal nail table

*Tags: woodworking*

Plywood table with metal legs.

The edges are chamfered so we don't hurt ourselves. Surface has clear
polyurethane finish.

![](metal-nail-table_20171006_142322.webp)

## moxon vise

*Tags: woodworking, drawing*

Woodworking vise.

Large screws to clamp wood. Hand knobs to facilitate use. Opening was too wide
and doesn't apply equal pressure across the work.

![](moxon-vise_IMG_20150429_143100.webp)
![](moxon-vise_IMG_20150429_143704.webp)
![](moxon-vise_drawing.webp)

## no 208 poster

*Tags: design, drawing, coffee*

Posters on top of espresso machine.

Different iterations led to different posters. One of them, I traced the
instructions from a Lavazza espresso grain bag.

![](no-208-poster_20171006_134649.webp)
![](no-208-poster_20171006_141854.webp)
![](no-208-poster_20171006_142935.webp)
![](no-208-poster_drawing2.webp)
![](no-208-poster_drawing3.webp)

## no 208 stamp

*Tags: design, drawing, coffee*

Because why not? I stamp my cups too.

I felt stupid walking outside with a white cup without my logo on it. Designed
in illustrator, ported to Autodesk Fusion 360 and cnc'ed on my Chinese machine
in Styrofoam.

![](no-208-stamp_20171006_141931.webp)
![](no-208-stamp_20171008_120706.webp)
![](no-208-stamp_drawing.webp)
![](no-208-stamp_drawing2.webp)
![](no-208-stamp_stamp-v21.webp)
![](no-208-stamp_stamp-v21_cut.webp)
