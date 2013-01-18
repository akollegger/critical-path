---
layout: post
title: "Bacon Number by Hand"
persona: "Mike Linetsky"
description: "As a sales guy, I'd like to use Neo4j to demonstrate a common pop-culture example of a graph problem"
category: actual
from: interested
to: like
duration: 2 hour
tags: [sales]

---
{% include JB/setup %}

goal: implement the classic bacon number

## Assumed

- familiar with [Bacon number](http://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon)
- understand graph concepts
- no prior use of Neo4j
 
## Get started

- download Neo4j...
- go to http://neo4j.org, click "Install" 
- Q: milestone or major version?
  - use stable for evaluation of product
- Q: community is fine for this?
  - licensing discussion
  - A: community is perfect for eval
- download Neo4j 1.8 Community Edition
- downloaded and upacked Neo4j
- watching "Installing Neo4j in 2 minutes video"
  - voice is quiet
  - starts with "go to download page" even though you find this video after downloading
- finished video
  - "that was a little quick"
  - "not too helpful, guess I have to use the terminal"
- attempting to perform the described steps...
- open `Terminal.app`
- rewind video, go back to `./bin/neo4j start` section
- [lots of stuff in the download folder]
- copy path from finder window, paste into `cd `
- run `./bin/neo4j start`
- back to video to check the browser URL
- open up Neo4j in web browser
- Q: "do I need to do that part?"
  - related to video section which mentions REST API
  - A: no, that's not important right now
- trying the Cypher query PN mentions. success.


## Domain work

- importing not obvious, so will create a fake movie database

Mock-up the domain
(Kevin Bacon)-[:ACTS_IN]->(JFK)<-[:ACTS_IN]-(Kevin Costner)

Task: create the mocked-up data
- [happened to decide to create data using Cypher]
- clicked to docs from Neo4j UI (cheatsheet link)
- click on "Create" link from the list on top
- read through that
- Q: how is node naming convention done?
  - anything goes, case sensitive, whatever you want
  - was referring to the node reference, like foo... create (foo {name: "whatever"})
- follow example of creating a node, changing node
- database has no memory of the node reference you are using, must search for the node based on knowing the ID (like Rik did) or by searching based on properties
- [why using Cypher?]
- all the examples use direct node-id references [I assume for simplicity, but this is not best practice]
- Q: how do I know the nodes that I want to create relationships between
  - list all nodes using `start n=node(*)` then note the IDs you want [bleh, bleh, meh]
- createed all movies and relationships
- now to write the query
- checking the Neo4j Manual
- read through examples, wrote the match
- some remembering from DM's examples, docs not too helpful
- Q: how to find nodes without knowing the node-id?
  - that's where indexes come in, for Cypher must be auto-indexed for now
  - or, start with all nodes, then use the where clause to find what you want
- Q: ordering of MATCH and WHERE clauses
- Q: can I delete node zero?
  - delete node zero to avoid the "node zero doesn't ahve this propery" problem
- re-wrote the query using WHERE clause!
- 