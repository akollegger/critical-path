---
layout: post
title: "Michal Zajda FoaF"
persona: "Michal Zajda"
description: "As a new user, I'd like to try using Neo4j for a Friend-of-a-Friend query."
category: actual
from: aware
to: interested
duration: 1 hour
tags: [dev, 1.9.RC2]
---
{% include JB/setup %}

Andreas,
   thanks for motivation to play with neo ;)
   Here are my answers:

1. Download Neo4j 1.9.RC2 for your platform
  - That went smooth, however google does not show direct direct link to downloads page from phrase: "neo4j download"

2. Unpack it
  - *Done*

3. Run it
  - *Done*

4. Create a small social graph, with you and a few friends
  - I took neo4j tutorial last week in Menlo, so this went smoothly, too ;)

5. Write a Cypher query which finds the friends of your friends
  - Here I had good couple tries till I got it right:
    - I worked via browser console (copy-paste doesn't work very good
on mac/firefox)
    - my initial approach failed because by default auto_index is not
enabled and I did not want to write so many WHERE conditions
    - after rebooting db with index I had to create nodes again
    - I used `create unique a<-[:KNOWS]->b` to set relationship and it had surprising consequences
    - from some reason data browser did not plot my graph, but I verified it from console
    - now final query problem:

this:

    match a-[:KNOWS]->b-[:KNOWS]->c

returns something different than:

    match a-[:KNOWS]-b-[:KNOWS]-c

even though I created all relationships with:

    create unique a<-[:KNOWS]->b

I must admit that it is still not clear for me, why "->" is not subset of "<->".
(I attach the screen shot with example results).

To sum up, following query returned correct answer:

    start a=node:node_auto_index(name="Friend3")
    match a-[:KNOWS]-b-[:KNOWS]-c
    return distinct c;

Anyway, it was fun to get back to neo! I hope I will find some nice use-case
at work or hobby project.

thanks,
Michal
