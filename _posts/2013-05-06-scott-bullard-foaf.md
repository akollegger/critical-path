---
layout: post
title: "Scott Bullard Foaf"
persona: "Scott Bullard"
description: "As a developer, I'd like to try using Neo4j for a Friend-of-a-Friend query."
category: actual
from: unaware
to: interested
duration: 1 hour
tags: [dev, 1.9.RC2, linux]
---
{% include JB/setup %}

Part 1: Beginnings

Okay. Fancy new site, typography and layout's not all that nice (jaggy slab serif? mixed alignment? really? designer gets this and this as early christmas presents...) but one must make sacrifices for fashion, and ooh, it's responsive, kind of. The graph's a nice touch; I can see pretty quickly where to download. Okay, the "auto-download" function isn't working (Safari 6.0.3, OSX 10.8.3). And the big green "Download" button in the header of the auto-download page that suggests hitting "Download" takes me back to the version chooser page, rather than manually forcing a download. Ohhhh, it's the tiny, unstyled link that says "Download" that the thing's referring to. OK, so sitting on the page long enough to find the actual manual download button seems to have given the auto-download thing a chance to work, so I don't have to click on it after all. Auto-download puts it in Safari's default downloads folder; which isn't where I wanted to put it, but whatever.

Lesson 1: don't get fancy. If someone's using Neo, they probably know how to download things.

Drag where I want it. Extract. No problems there. Open Terminal. Navigate to the right folder.

    $  bin/neo4j start
    WARNING! You are using an unsupported version of the Java runtime. Please use Oracle(R) Java(TM) Runtime Environment 7.
    Detected installation in launchd, starting it…
    $  ▌

$%!@%.

STAY TUNED for the continuing adventures of our gallant hero:
will Googling the error code produce useful documentation?
will Oracle attempt to charge him for downloading a JRE?
will he be forced to sign up to Oracle's mailing list?
will he download a GUI Java version switching tool because it's really annoying to switch back and forth all the time?
will he get the web UI running?
will he ever find his friends of friends?

