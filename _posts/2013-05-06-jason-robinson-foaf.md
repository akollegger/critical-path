---
layout: post
title: "Jason Robinson Foaf"
persona: "Jason Robinson"
description: "As a developer, I'd like to try using Neo4j for a Friend-of-a-Friend query."
category: actual
from: unaware
to: interested
duration: 1 hour
tags: [dev, 1.9.RC2, linux]
---
{% include JB/setup %}

I have meant to play with Neo4j for a while, so I'm glad that you made a little game of it.

Feedback and details are below:
1. Download Neo4j 1.9.RC2 for your platform
  * Not much feedback here -- simple to find, simple to download. I did download the o'reilly raw book while I was at it. 
  * I also noticed the 2 minute install video. I initially said "no, I don't need that". But it was only 2 minutes, so I watched it. I found it to be clear and informative to anyone who may want a helping hand while installing. Clearly, the website has evolved a bit since the video was shot, which is good. 

2. Unpack it
  * I'm running Linux, so this is no problem. 

3. Run it
  * Doesn't get much simpler than running an executable, so no issues there. 
  * 3 different flavors of warning, 1 to tell me that I can only have 1024 open files, but 40,000 would be better, another (with a !) telling me that Oracle (R) JRE (TM) 7 is the preferred JRE, and another indicating that we're not changing the user. This is a fresh ubuntu raring running in virtualbox on a quantal host, and I have not yet installed alternate JREs. No clear showstoppers, so moving onward. 
  * I like that the last message is a link to the admin interface. 

4. Create a small social graph, with you and a few friends
  * I started exploring the content in the guide, since I didn't know the syntax
  * I also started the CLI shell, side-by-side with the console shell
  * To get the hang of things, I started going through the example in the guide. 
  * I decide to use CLI, since the web localhost console (mozilla; again, fresh install of 13.04) is not easily copy/pasting for me. This may be due to running in a vm. 
  * Seemed fine, until I got a SyntaxException on the START ee=node(*) ... WHERE n.name! = ... ; turns out that the Neo4j Guide code needs a hyphen, i.e. (rvb)[:KNOWS] should be (rvb)-[:KNOWS] in the last line of the create clause. The error message was informative enough to find the issue relatively painlessly. 
  * Another error. Turns out n.name in the Neo4j Guide should be ee.name . At this point, I'm wondering if you're trying to teach me neo4j by making me find what isn't working. Which is a valid teaching method, since I'm picking up some syntax. 
  * Issue with CLI for me is that I can't seem to modify anything prior to the last line wrap. So I open a text editor to copy/paste. 
  * To give it a fair shake, I go back to the web console. Data browser worked well for visualizing the graph. 
  * OK; the challenge was to create my own social graph. Well, based on the prior work, I'm going to do that quickly in a text editor and paste into the CLI. 
  * SyntaxException: reserved keyword. Caret seems to indicate where the issue is, but I misinterpreted its pointing initially. Solved that and another (silly) syntax error (missing :, again pointed out by the caret, which is actually helpful when  you know what it's doing).  
  * 258 ms to create 6 nodes having 12 relationships. I'll take that as success. 

5. Write a Cypher query which finds the friends of your friends
  * Wrote the query using MATCH and WHERE clauses. The syntax is fairly straightforward and intuitive. 
  * Decided to give the browser interface another shot; the query window seemed smaller after running the prior query, and in mozilla, the (?) button below the query box is lost to the left. 
  * Visualization was no problem, though. 

Overall, this is a fun product. Thanks again. 
