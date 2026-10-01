---
title: "Earlier projects (2013-2017): Part 3"
date: 2026-10-01
slug: "earlier-projects-2013-2017-part-3"
description: "Assortment of projects completed in the distant past"
tags: ["woodworking", "prototyping", "programming", "parametric-design", "3d-printing", "drawing-machine"]
author: "Vasken Dermardiros"
draft: false
---

## About this project catalogue

Here is, in alphabetical order, a collection of some of my very past work. I've built other things during this period but they've failed so hard that I rather just forget about them! Most of the software files are no longer functional due to outdated libraries and since AI coding is so good that it's probably easier to just ask Claude to build it again, that I decided not to include them. If you're really interested, contact me.

The main themes are: woodworking, 3d-printing often involving some form of parametric design using Rhino [Grasshopper](https://www.rhino3d.com/features/#grasshopper), electronics often involving the Arduino or ESP32, and drawing machines often involving a form of CNC.

Had to break this post into three parts:
- [Part 1](/blog/2026/earlier-projects-2013-2017-part-1/)
- [Part 2](/blog/2026/earlier-projects-2013-2017-part-2/)
- Part 3 (this post)

## polargraph

*Tags: design, drawing, electronics*

Pendulum-based drawing bot/machine. Commands sent via Processing.

Ever since I stumbled on [the polargraph instructables](https://www.instructables.com/Polargraph-Drawing-Machine/), I wanted one. I know
my drawing skills are crap and I'd want larger prints of some drawings which
I wouldn't be able to manually reproduce. There are also a lot of line drawings
I prepare on grasshopper that work well with this setup.

Build: 2 NEMA 17 el-cheapo stepper motors from ebay, Arduino motor shield v1, an
Arduino and a somewhat decent power supply to drive the board and motors. On the
stepper motors, we have a timing belt gear/pulley. The timing belt goes towards
the pendulum which is an old backup cd, a copper pipe with a screw to hold the
pen, and bearings. A little servo lifts the pen up and down. The wire connecting
to the servo should be thinner than what I have now, since it causes a bit of
interference. The other end of the timing belt goes to a pulley and weights and
attaches right next to the stepper motors. I did this to have a longer reach
with the pendulum. If I only had weights hanging from the end of the timing
belt, they would touch the floor a lot of the times. With the weights on the
pulley, I have twice the reach (but I had to double the weight to get the same
tension on the belt; physics, yes!). The weights are random metal bits I had.

For the drawings, the polargraph has it's program written in Processing. It
accepts *.svg or g-code files to draw vectors and any other image file to draw
rasters. For raster files, you can use their methods to fill in basically skewed
square pixels. I have some examples. Alternatively, you can use other tools
online to trace the raster as a vector using the travelling-salesman algorithm
or cross-hatches etc etc.

![](polargraph_20170128_115050.webp)
![](polargraph_20170928_215144.webp)
![](polargraph_20171006_134710.webp)
![](polargraph_20171006_134731.webp)
![](polargraph_20171006_134757.webp)
![](polargraph_20171006_142858.webp)
![](polargraph_20171006_143043.webp)
![](polargraph_drawing.webp)
![](polargraph_drawing2.webp)

## pyranometer mount

*Tags: BldgEng, design, lighting*

Li-Cor pyranometer mount for Varennes library. Angles match the roof slope and
bearing. Integrated sight to align with true North.

I designed this on Autodesk Fusion 360. Drew the diameters of the sensors,
extruded them, added a thickness, oriented them and made a block where they
would fit in. The block has a flat side with a sight for alignment and a rounded
side so that it "sticks" to the lamp pole where it was to be attached. There's a
rounded opening too where I can slide in the worm-gear metal tie. Neat things
you can do with 3D printers. This piece can't be machined.

![](pyranometer-mount_20170728_102940_HDR.webp)
![](pyranometer-mount_20170915_101547_HDR.webp)
![](pyranometer-mount_20170915_101550.webp)
![](pyranometer-mount_pyranometer_holder-v20.webp)

## raspberry pi tube amp streamer

*Tags: audio*

Kickstarter tube amp project for the RaspberryPi.

I had another DAC before this which was also funded on kickstarted (durion
sound), but I always wanted to hear that *tube sound* so I jumped on the
occasion. Compared to the other DAC, I don't really hear the difference. Maybe
the tube doesn't do much? Or maybe other tube amp designs actually muddle the
true sound and this one is too neutral. Looks nice and warm.

![](raspberry-pi-tube-amp-streamer_20171006_142032.webp)

## rock paper scissor using co-adapting genetic algorithms python

*Tags: software, BldgEng*

A game of rock, paper, scissors played between two computer agents evolving over
time. Genetic algorithms course final project.

Using genetic algorithms, the two agents learn the opponents strategies and
exploit them with time. As soon as one side is greatly losing, its mutation rate
increases to come up with new strategies to win back again.

More details in the *.pdf. (ask me, and I'll send it to you!)

![](rock-paper-scissor-using-co-adapting-genetic-algorithms-python_1461339118_nI_180_term_1_hist_4_RPSfitness.webp)
![](rock-paper-scissor-using-co-adapting-genetic-algorithms-python_1461339460_nI_360_term_2_hist_4_RPSfitness.webp)
![](rock-paper-scissor-using-co-adapting-genetic-algorithms-python_1461340622_nI_720_term_4_hist_4_RPSfitness.webp)

## shadowplay

*Tags: BldgEng, drawing, lighting*

Can we determine what a building looks like by observing its shadows? Well, not
really.

It's basically a problem where we want to infer the 3D object (the building)
from 2D data (the shadows). We also have the vector that projects the 3D object
to the 2D plane. Using the vector and shadow, I extruded the shape outwards. I
repeated it for different shadows (days/times) and I extruded the building
outline upwards. I then intersected these shapes to try to recover the original
3D shape. The results... it's ugly. In the real world, the shadows would be
intercepted by other buildings too.

![](shadowplay_drawing.webp)
![](shadowplay_shadowplay.webp)
![](shadowplay_step1.webp)
![](shadowplay_step2.webp)
![](shadowplay_step5.webp)

## singer table

*Tags: woodworking*

Old singer table with live edge walnut top.

The top is actually a single board cut in half and glued together. The dovetail
key is decorative since the board isn't actually cracked. Danish oil finish.
Needs to be refinished.

![](singer-table_20171006_142239.webp)
![](singer-table_IMG_20150307_174107.webp)
![](singer-table_IMG_20150307_174121.webp)
![](singer-table_IMG_20150311_122853.webp)

## spice rack

*Tags: woodworking, food*

Wooden crate to hold glass jars of spiced within drawer.

![](spice-rack_20171014_094254.webp)
![](spice-rack_20171014_094347.webp)

## spirograph and lissajous

*Tags: software, drawing*

Spirograph and Lissajous pattern generators built in grasshopper. The spirograph
generator was packaged. I drew out some of the spirograph curves using my [polargraph](/blog/2026/earlier-projects-2013-2017-part-3/#polargraph).

![](spirograph-and-lissajous_20171006_142829.webp)
![](spirograph-and-lissajous_Capture_lissajous.webp)
![](spirograph-and-lissajous_Capture_spirograph.webp)

## sudoku solver on excel basic

*Tags: software*

Very basic Sudoku solver on Excel. It basically looks at what are every number
that fit in a square and if a square has only 1 choice, it inserts that in and
redoes the look up to see what are the remaining numbers that fit in the
remaining squares. Repeat until solved.

*I've remade this in Python since and with recursion.*

## sun tracker

*Tags: software, lighting*

Grasshopper+Firefly+Servos heliostat to simulate a certain day given current
day. In the grasshopper file, the user sets their current location, bearing and
time, and then select the location, bearing and time they'd want to obtain. If
possible, the servos will orient the model (that's on top of the servos) so that
when looking into the model, the daylight will be that of that situation. There
are models using lamps but the beams of light from lamps are not parallel to
each other. Solar radiation is. The project can be extended on using larger
models and more powerful servos or even stepper motors (you'll then need a way
to 'home' the position).

![](sun-tracker_20171018_180555.webp)
![](sun-tracker_20171018_180603.webp)
![](sun-tracker_20171018_180606.webp)

## table lamp

*Tags: design, drawing, lighting*

Table lamp with LEDs. This project is linked with the [[*led warmwhite coolwhite amber fade][led warmwhite coolwhite
amber fade]] program. I also wanted to have an integrated pomodoro. The project is
still a WIP.

![](table-lamp_Mantis-floor-and-desk-lamps-7.webp)
![](table-lamp_line_lamp.webp)

## tilt table

*Tags: design*

Coffee table that, when tipped over, also acts as a working table. We wanted a
coffee table in front of the couch. I also wanted an extension to our dinning
table. Since our space isn't huge, I was thinking of having a coffee table that
can also act as an extension (different heights). So this idea was born: a table
that can tip over and be at the right height.

![](tilt-table_Capture.webp)

## tv router

*Tags: woodworking*

The TV media stand is already crowded. So I stuck the router behind the TV.
Since it's at a higher position, it can also broadcast better. The screws fit
into where you would put in the VESA mount. The piece of walnut wood has screws
that support the router. I varnished the piece, because, I had to.

![](tv-router_20171014_094140.webp)
![](tv-router_20171014_094154.webp)
![](tv-router_20171014_094205.webp)

## tv stand media

*Tags: woodworking, drawing*

Cheap, elegant and utilitarian TV stand and media console. When I first told
my wife I wanted to do this, she was totally against it, but I promised her it
would be nice, and for the amount I would be spending, if it weren't nice, I
wouldn't feel bad throwing it out. The cement blocks are 3ish\$ each, the pine
boards were 15ish\$ and then I used a stain and finish on the wood. Only the
visible sides. Everything holds just by gravity.

![](tv-stand-media_20171014_094126.webp)
![](tv-stand-media_20171014_094118.webp)

## waffle table

*Tags: woodworking, design*

Table inspired by the t-rex wood toys from when I was a kid. You would have the
spline of the animal and fit in the ribs perpendicularly to it. Why not have a
table with the same concept? Original definition was done on grasshopper but
then I discovered Autodesk 123D Make the capability built in. Not sure if the
program is still available online. Never made it.

![](waffle-table_Table.webp)
![](waffle-table_Table_pieces.webp)

## wall print holder

*Tags: woodworking, drawing*

Two thin pieces of wood clamping together with magnets to hold a drawing. An
extra set can be used on the bottom to hold it better. The wood piece toward the
wall has holes to secure the whole thing to the wall. I had this idea after
visiting the Guggenheim museum gift shop in Manhattan.

![](wall-print-holder_drawing.webp)

## weight holder

*Tags: woodworking*

Block of wood with holes the same size of the weights to a scale.

![](weight-holder_20171006_143127.webp)

## window planter

*Tags: woodworking, drawing, food*

Wooden furniture to hold 4 terra cotta pots. Main board in poplar, rest in oak.
Danish oil finish. I wanted to practice using the chisel.

![](window-planter_20171006_141945.webp)
![](window-planter_20171006_141953.webp)
![](window-planter_drawing2.webp)
