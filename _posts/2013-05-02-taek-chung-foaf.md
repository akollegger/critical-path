---
layout: post
title: "Taek Chung FoaF"
persona: "Teju Prasad"
description: "As a developer, I'd like to try using Neo4j for a Friend-of-a-Friend query."
category: actual
from: unaware
to: interested
duration: 1 hour
tags: [dev, 1.9.RC2]
---
{% include JB/setup %}

Andreas,

We recently hired an intern and let him install and use Neo4j a few weeks ago. As he is not familiar with Neo4j at all, I think his feedback would be useful. He is currently pursuing his PhD in Electrical Engineering from UC Berkeley.

Hope we could have an honor to date you :-)

Taek

FEEDBACK

1. Download Neo4j 1.9.RC2 for your platform
2. Unpack it
3. Run it

Step 1-3, were well guided by the docs on the web and hence straightforward.

4. Create a small social graph, with you and a few friends
5. Write a Cypher query which finds the friends of your friends

Step 4-5, I mainly used python binding, py2neo, so i have a limited experience of querying something in Cypher. I tested several cypher queries to check whether graph is well structured through the web admin page. 

One more suggestion is here. It would be extremely useful if I had a nice 'all-in-one' example which instructs 

1. how to use the webadmin page
2. how to create a graph and add nodes & rels, 
3. how to access & visualize the graph on the webadmin page. 

That would provide a very attracting 'first-appetite' of neo4j. However, the overall experience was really enjoyable to me.
