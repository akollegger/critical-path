---
layout: post
title: "Jeff Altman FoaF"
persona: "Jeff Altman"
description: "As a developer, I'd like to try using Neo4j for a Friend-of-a-Friend query."
category: actual
from: aware
to: interested
duration: 1 hour
tags: [dev, 1.9.RC2, Windows]
---
{% include JB/setup %}

Hi Andreas - 

Got everything working on a Win7 64-bit machine. Much better experience than when I set up the neo4j-community-1.8.2 version. Here are some notes, impressions, and suggestions. Hope this is what you were looking for.

- Downloaded and unzipped into neo4j-community-1.9.RC2 folder
- Double clicked  Neo4j.bat in bin folder per directions on http://www.neo4j.org/download
- After watching command console was then presented with blank java screen. 
- Entered http://localhost:7474 for the Web UI. Worked immediately. 
- Subsequently, I closed java window and that disconnected the database. I suggest telling people to not close java window as that will disconnect database.
- Restarted the database via the .bat file and upon seeing the webadmin interface, I clicked on "Guide." Not sure if this came up the first time automatically but you may want to consider that. 
- Clicked on "Tour" and then wasn't sure how if it was a slide set or how to proceed.
- I pressed enter and switched to next slide. Woo hoo!

Suggestions:
- Let people know to use arrow keys or "enter" (both work) to navigate.
- Put a "live" next link on first slide to indicate there are slides to view.
- Show a slide progression indicator to give an idea 
- how many slides to view.
- Open Guide in separate window so as to easily switch back and forth between guide and web admin
 
I like the HTTP Console. However, Guide says "Use 'help' to learn about commands" - there is no "help" link. I did open the manual and looked for commands. For whatever reason, the blue text on whiote background was a little washed out. The HTTP console black and white is a little rough on the eyes - maybe soften that up (if possible)
 
I like the basic tutorial on graphs. Good use of color and whiteboard concept. It was a little too oriented towards "who knows who" so I'll be exploring relationships and properties more to determine applicability for PepperSlice.
 
Followed social graph example. I suggest for "CREATE (ee { name: "Emil", from: "Sweden" }) RETURN ee;" perhaps explain that "ee" is variable id. Also, I suggest the query should instead be: "CREATE (ee { name: "Emil", from: "Sweden" }) RETURN ee.name, ee.from;" to show how properties are returned instead of the id.
 
Tried to cut, copy, paste "many nodes and relationships." Received following error in last line: 
"Invalid query
 string matching regex `$' expected but `[' found
 Think we should have better error message here? Help us by sending this query to cypher@neo4j.org.
 Thank you, the Neo4j Team.
 "(rvb)[:KNOWS]->(ally);"
      ^
The query is missing a hyphen between (rvb) and [:KNOWS] - should be "(rvb)-[:KNOWS]->(ally);"  Also, I added "RETURN ee.name, js.name, ir.name, rvb.name, ally.name;" Unfortunately this produced a reserved word error. I dropped the RETURN and successfully ran a query against the newly created nodes.

Following the examples, I ran the following query:
"START ee=node(*) MATCH (ee)-[:KNOWS]->(friends)
WHERE n.name! = "Emil" RETURN friends;"

I believe it should be: "WHERE ee.name! = "Emil" RETURN friends;" Also , you may want to consider "WHERE n.name! = "Emil" RETURN friends.name" so that the query returns names instead of node numbers.

After that I created my own social graph and queried it. It was similar eneough to the examples that I didn't have any issues. You may want to enable the D3 forced directed layout so that people can see their graph - very powerful.

At that point I tried to delete all nodes and relationships (to start over) using query "START n=node(*) match n-[r?]->() DELETE n, r;" Result came back as "Returned 0 rows" However, Dashboard indicates database contains 1852 nodes, 14810 properties, and 22864 relationships. Where the hecj did all those come from?

To see if I cleared the database, I queried with "START n=node(*) RETURN n;" and it returned 0 rows. So I am assuming all nodes and relationships successfully deleted. Is there a way to reset the Dashboard counters?

Overall, a very good experience. Let me know what questions you have.

Jeff

## Addendum

Hi Andreas - Glad you liked the feedback. This version of Windows experience is actually pretty good compared to the last release. However, if the goal is to get less experienced developers to try it out, then simpler is better. A complete standalone application that installs the server, starts it, and launches the webadmin would certainly give the impression of ease-of-use.

Aside from the tutorial(s) needing some fleshing out, I believe a basic jquery-based CRUD web app with source code would be great. To me that is the launch point for people building prototypes. Perhaps you've seen - http://scottbush.net/web-dev/using-jquery-and-ajax-to-input-nodes-into-a-neo4j-rest-server/ - almost there, but not quite enough.

As for the t-shirt - I wear a medium. Please send to 222 Broadway #1408 Oakland, CA 94607. If we win a date with you, we'll take you to one our favorite restaurants in Jack London Square. We live/work a block away, plenty of parking at our building, and good beer. 

