---
layout: post
title: "Ubuntu Cleanroom for Neo4j"
persona: "Andreas Kollegger"
description: "As a Neo4j developer, I'd like a cleanroom Ubuntu environment for working with Neo4j"
category: actual
from: like
to: like
duration: 1 hour
functional: F
reliable: F
usable: F
pleasurable: F
tags: [dev, self]

---
{% include JB/setup %}

# Scenario

For me, Ubuntu is the default host platform for deploying Neo4j in a production environment. I'd like to set up a cleanroom Ubuntu virtual machine so that I can sanity check new releases of Neo4j and related tooling. 

This trial will set up and snapshot the virtual environment, then use it to download and run Neo4j.

## Target Setup

- VirtualBox
- Ubuntu 12.04 LTS
- 2048MB RAM
- 8GB Disk
- vanilla user account
- OpenSSH server
- git
- oh-my-zsh
- jdk 1.7
- maven 3
- avahi (for zero-conf ssh'ing in)

## Get Java

```bash
    apt-get install openjdk-7-jdk
    apt-get install maven
```

## Clone and Build Neo4j

```bash
    git clone https://github.com/neo4j/neo4j.git
    cd neo4j
    mvn clean install
```

*Fail*: Out of Memory

- vi ~/.zshrc
- add `export MAVEN_OPTS="-Xms256m -Xmx2048m -XX:PermSize=512m -XX:MaxPermSize=1024m"`
- try again

```bash
mvn clean install
```

- Occasional warnings like:

```
16:09:15.581 [main] WARN  o.neo4j.kernel.EmbeddedGraphDatabase - WARNING! You are using an unsupported Java runtime. Please use JDK 6.
```

- Bleh. Giving up. So, so finicky. 

