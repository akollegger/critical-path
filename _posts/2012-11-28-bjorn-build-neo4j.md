---
layout: post
title: "Bjorn Build Neo4j"
persona: "Bjorgn Granvik"
description: "As an open-source developer, I'd like to build Neo4j from source"
category: interested
tags: []
---
{% include JB/setup %}

Short version:
Neo4j doesn't build out of the box. We typically don't do full builds locally before creating a pull request. 
As an alpha geek you have to be both patient and tinkering.
Can we aim for  a single platform dependent command to build neo4j?

Result: 
Some of our errors would get caught early on before hitting Jenkins?
More contributions from alfa geeks?



Long version: ------------------------------------------------

Here are my experiences trying to build Neo4j - which turned out to be series of problems during two days.

1) Naive first step
My naive thinking was to clone the repo and "just build it" on my Mac.
"mvn clean install" in neo4j

2) Running out of memory 
I added the following to my startup script in my account (MacOsX .bash_profile).
export MAVEN_OPTS=-Xmx2048m
Worked.

3) Failing on Python part
Need JPype. Got tip on:
	http://docs.neo4j.org/chunked/milestone/python-embedded-installation.html
Run first step, but get error on missing llvm-gcc. 
My XCode 4.3 has gcc (maybe llvm too?) but I cannot start xcode due to other reasons.
Getting tip on installing llvm-gcc.
Giving up on this path of building all of the everything.

4) Alternative approach - skipping Python but still building docs
Added a flag in pom file to skip building Python part (does depend on snapshots being available)
	mvn clean install -DskipPython -rf manual

5) Fail on building LInux installers
Bleh, additive and negated flags in pom-file makes it difficult for me to change fast. 
Revert back pom file, then a quick hack and remove python and linux-installers from the profile "manual-and-packaging" in pom-file. 
	mvn clean install -DskipNativeDeps -rf packaging

6) Success!
Ok, now on to the full build. Roughly 28 minutes build time (no python and linux-installers, but actually building manual).


Some thoughts/comments:
- It doesn't build out of the box. You will fail if you try to build it any non-linux os.

- You have to be really patient and tinkering alfa geek to make it through. SkipNativeDeps helps, but doesn't go all the way.
   I think we could get more contributions if we improve the build.

- Most of us within Neo don't do full neo4j builds (from what I hear). So we create PRs without full local build?

- Setting up the toolchain for building the manual is difficult and haphazard on Mac. Even on Linux the results vary (from what I've heard). Impossible on Windows?
   I gave up on building the python part.

- The build information is a one reeeaally long list of text with loads of warnings etc. We need to do spring cleaning?


Question:
What if we aimed for only "mvn clean install" that builds a "a normal product for your platform" and then use flags to opt in more (like manual).
This has the obvious side effect that won't build the manual locally by default? But most of us don't do it now anyway?

This way we would reach more alfa geeks and dog-food better.
