---
layout: post
title: "Training at Quadrus"
persona: "Tech Leads"
description: "As key technical stakeholders, we'd like to learn enough Neo4j to see if it is appropriate for our application"
category: actual
from: aware
to: like
duration: 4 hours
functional: F
reliable: F
usable: F
pleasurable: F
tags: [dev, workshop]
---
{% include JB/setup %}

# Intros & Install

- Distribute USB keys
- Q: Does the key contain the slide deck
- Q: I have the server already running locally, should I shut that down first
  - A: Yes, use the copy on the USB
  - ABK: how should Neo4j deal with another Neo4j already running on the port it wants? Fail, 
- Q: I have a server deployed, do I need it on my laptop?
  - A: You could skip that, optionally upload the dataset
- Edit conf/neo4j-server.properties to set `org.neo4j.server.database.location=data/social.db`
- a few minutes of helping 
  - clarify "what's on the drive, what do I do"
  - a few people load up http://neo4j.org
  - ABK
    - README.txt with the file collection would be helpful
    - should be self-contained, potentially self-led
    - include slide deck
- CL: showing "Neo4j Monitoring and Mana..." web application in browser
  - ABK: title doesn't fit
  - ABK: tabs do not scale down to smaller window size
  - ABK: nevermind working on an iphone, should at least work on a desktop with low res
- DM: just demo'ing the Data Browser
- DM: select all text (the default query presented in data browser entry field) and delete it, replace with '1'
- DM: demo'ing console as the "textual interface"
  - ABK:  "Gremlin" is on by default. stop that, for the love of god

### Coffee-break

- Q: what's the meaning of the number '1' that David put into that search bar?
- Q: on MacOSX: launchctl interfering with running a new copy 
  - our script realizes that there is an install of Neo4j, defers to it
  - ABK: add to Trello wall

# About graphs

- everyone is talking about graphs
- graphs are data structures
- graph database stores adjacent dat
- graphdb optimized for queries of connected data
- compare to relational

# Cypher Queries

- ABK: eek! examples using node-id == bleh
- Q: console versus data browser are confusing
  - in Browser, cypher queries don't seem to work when you're looking at visualization

# Cont'd

- Q: explain the meaning of syntax of `ID(a)`
  - A: oh, something I'll explain later that is just confusing right now
- is there an index with the sample data set? 
  - ABK: there should always be an index to use, to encourage best practice
  - ABK: perhaps auto-indexing on by default? 
  - ABK: (re-) build index tool to index after the fact
  - ABK: queries with raw lucene pass-throughs should be purged
- "we can just add an index to the data set"
  - while we still have to talk about explicit index manipulation, we should explain that lack of schema means creating an index does not auto-populate that index
  - ABK: consider whether the index-building tool should be part of standard distro


## Showing console

- but wait, there is a 3rd way to do Cypher queries: console.neo4j.org
- Q: what's GEOF
  - it's another third party format

## Back to Neo4j

- using TextMate to write Cypher queries, then copy-and-paste back into Neo4j to execute

### `WHERE` clause

- Q: from performance perspective, queries should not use `node(*)` right?
  - A: correct, that scans the entire data set. queries should constrain the part of the graph to be searched
- `WHERE n.name! = 'Ashley'` versus `WHERE has(n.name) AND n.name = 'Ashley'`
- ABK: reference node could be put into a namespace for 'reference nodes'
- using pattern in WHERE is more efficient than using DISTINCT to reduce the result set later
- Q: function for revealing direction of relationship found?


### using PATHS

- ran a simple looking query that "will use a lot of memory" to find a variable length query
  - all paths takes a long, long time
  - ABK: still no way to stop a running query other than killing the server
  - awkward wait for the query to stop
  - ABK: performance advantage? unconvincing
- assigning a variable `p` to path result
- extracting names from nodes of p with `extract(n in node(path): n.name)`
- Q: what's the meaning of colon
  - differs with context, a bit. for relationship type, or for separating closure in a function
  - what's the definition of ':'?
  - "should have a consistent meaning even if used in different contexts, to be coherent"
- ABK: graph visuals are fun, but the bulk of work is done with text, text, text
- ABK: good visuals require layouts, styling, customization
- Q: "curious about square brackets, couldn't that be parenthesis"
  - explain syntax very explicitly
  - "aren't there nodes in the middle of that variable length path, why don't they appear?"
- ABK: workshop == data + queries + progressive tutorial
  - much-maligned Dr.Who does this very, very well
- ABK: dude in front row browsing MongoDB website while Chirs talks

### CREATE

- like `INSERT` for SQL
- nodes, relationships, with properties
- CREATE UNIQUE tries to match, looks if it exists already

### DELETE

- Q: if we would delete just n, would it remove the relationships?
  - relationships must be deleted in order to remove the node
  - ABK: should not need prompting to mention that; it is such a common question
  