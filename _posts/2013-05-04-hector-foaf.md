---
layout: post
title: "Hector FoaF"
persona: "Hector"
description: "As a developer, I'd like to try using Neo4j for a Friend-of-a-Friend query."
category: actual
from: aware
to: interested
duration: 1 hour
tags: [dev, 1.9.RC2, Mac]

---
{% include JB/setup %}


Hi Andreas,

I work at Couchsurfing.com and I've been playing around with Neo4j for a few weeks now. I was using the stable 1.8.2 but I downloaded 1.9 RC2 to follow the instructions.
 

1. Download Neo4j 1.9.RC2 for your platform

Easy to find. Downloaded the Mac community version from http://www.neo4j.org/download

2. Unpack it

easy, no issues

tar -zxvf neo4j-community-1.9.RC2.tar.gz 

3. Run it

`bin/neo4j start `
 
4. Create a small social graph, with you and a few friends

    gremlin> g.addVertex([name: 'hector'])
    gremlin> g.addVertex([name: 'ismael'])
    gremlin> g.addVertex([name: 'diego'])
    gremlin> g.addVertex([name: 'anthony'])
    gremlin> g.addVertex([name: 'casey'])
    gremlin> g.addVertex([name: 'sarah'])
    gremlin> g.addVertex([name: 'alex'])
    gremlin> g.addVertex([name: 'peter'])
    gremlin> g.addVertex([name: 'tony'])
    gremlin> g.addEdge(g.v(1),g.v(2),'has_friend')
    gremlin> g.addEdge(g.v(1),g.v(3),'has_friend')
    gremlin> g.addEdge(g.v(1),g.v(4),'has_friend')
    gremlin> g.addEdge(g.v(1),g.v(5),'has_friend')
    gremlin> g.addEdge(g.v(2),g.v(1),'has_friend')
    gremlin> g.addEdge(g.v(2),g.v(3),'has_friend')
    gremlin> g.addEdge(g.v(2),g.v(4),'has_friend')
    gremlin> g.addEdge(g.v(2),g.v(6),'has_friend')
    gremlin> g.addEdge(g.v(5),g.v(7),'has_friend')
    gremlin> g.addEdge(g.v(7),g.v(10),'has_friend')
    gremlin> g.addEdge(g.v(5),g.v(8),'has_friend')
    gremlin> g.addEdge(g.v(5),g.v(9),'has_friend') 

![Hector Graph](http://f.cl.ly/items/2H371Z1X141o170y3k1l/Screen%20Shot%202013-05-04%20at%209.05.08%20PM.png)

I have tried quite few ways to work with Neo4j, API, java, groovy, cypher, shell. It looks confusing at first but I really like the flexibility.

About the View Mode of Data Browser (screenshot). I really like this feature to explain other people what a graph is. There are a couple of things that annoys me though.

When the graph is large, nodes go over the visual screen and there isn't an easy way to resize or making them fit on the screen.
I'd like to edit edges properties (change fonts and colors). Currently I only figured out to do it with vertexes.
 
5. Write a Cypher query which finds the friends of your friends

    neo4j-sh (0)$ CYPHER 1.9 START me=node(1) MATCH me-[:has_friend*2]->fof WHERE fof <> me RETURN fof;

I don't find very useful to have a web shell (http://localhost:7474/webadmin/#/console/). It adds and adds stuff into the DOM and after a while it becomes too slow so the only solution is to close it and open it again in a new tab, and doing so you lose your command history.

As a result notice how I use the shell. Problem is that I didn't figure out if there is a way not to write 'CYPHER 1.9' each time.

I like Cypher but I feel confortable with Gremblin as well. Cypher queries are definitely more readable with it and I use it most of the times but for complex queries I feel like Gremblin is much more powerful (especially because you can use any groovy code).


Hector
