---
layout: post
title: "Clean Debian Install 1.8 Stable"
persona: "Andreas Kollegger"
description: "As a rookie sysadmin, I'd like to install Neo4j as easily as any other Debian package"
category: actual
from: interested
to: like
duration: 1 hour
tags: [sysadmin]

---
{% include JB/setup %}

- start up a naked Ubuntu 12.04 LTS system
- google ["neo4j debian"](http://lmgtfy.com/?q=neo4j+debian)
- go to [Neo4j Debian](http://debian.neo4j.org)
- follow the instructions...


```bash
$ wget -O - http://debian.neo4j.org/neotechnology.gpg.key| apt-key add - 
$ echo 'deb http://debian.neo4j.org/repo stable/' > /etc/apt/sources.list.d/neo4j.list
```


- fail, needs to be run as root, of course

```bash
$ echo 'deb http://debian.neo4j.org/repo stable/' | sudo tee /etc/apt/sources.list.d/neo4j.list
```
- continuing... Update the apt-get listings

```bash
$ sudo aptitude update -y # Find out about the files in our repository
```
- Verify that Neo4j is now available

```bash
$ apt-cache search neo4j                 
neo4j-coordinator - Coordinator service for Neo4j clusters.
neo4j-enterprise - graph database server
neo4j-advanced - graph database server
neo4j - graph database server
```

- Inconsistent descriptions. How about...


> neo4j-coordinator - coordinator service for Neo4j clusters
> neo4j-enterprise - graph database with clustering ability
> neo4j-advanced - graph database with monitoring
> neo4j - open source graph database

 - Installing `neo4j` package

```bash
$ sudo aptitude install neo4j -y
The following NEW packages will be installed:
  daemon{a} default-jre{a} default-jre-headless{a} neo4j 
0 packages upgraded, 4 newly installed, 0 to remove and 6 not upgraded.
Need to get 39.4 MB of archives. After unpacking 60.9 MB will be used.
WARNING: untrusted versions of the following packages will be installed!

Untrusted packages could compromise your system's security.
You should only proceed with the installation if you are certain that
this is what you want to do.

  neo4j 

Do you want to ignore this warning and proceed anyway?
To continue, enter "Yes"; to abort, enter "No": 
```

- Hm. Well, I already have java installed. Let's be agreeable to see what happens...

```bash
...
process [2589]... waiting for server to be ready........ OK.
Go to http://localhost:7474/webadmin/ for administration interface.
```

- Sadly, I'm on a headless machine and `curl`ing that address isn't helpful. 
- Consider a hint non-js hint about using `neo4j-shell`
- Also, consider adding that hint about the shell to the final message of the install, instead of the browser URL
- Also, consider mentioning that by default the URL is only available to localhost, and to check the config file, possibly

- Let's ask for help with `man neo4j`
- Why on earth is there a section on Windows? Should at least include a hint here about checking out `neo4j-shell`

- OK, commands to start/stop/whatever... oh and "info" is an option, let's try that...

```bash
$ neo4j info
zsh: command not found: neo4j
```

- Right, because no command called `neo4j` is actually available. Neo4j is just a system service. This makes the man page really confusing. 

- Insider knowledge let's me know I should give `neo4j-shell` a try.

```bash
$ neo4j-shell
Welcome to the Neo4j Shell! Enter 'help' for a list of commands
NOTE: Remote Neo4j graph database service 'shell' at port 1337

neo4j-sh (0)$ help
Available commands: alias begin cd commit create cypher dbinfo env eval export gsh help index jsh ls man mknode mkrel mv paths pwd rm rmnode rmrel rollback set start trav
Use man <command> for info about each command.
neo4j-sh (0)$ ls
neo4j-sh (0)$ dbinfo
USAGE: dbinfo -(g|l) <bean name> [list of attribute names].
neo4j-sh (0)$ man dbinfo

Get runtime information about the Graph Database.
This uses the Neo4j management beans to get information about the Graph 
Database.

Available Management Beans
* Kernel
* Configuration
* Primitive count

USAGE: dbinfo -(g|l) <bean name> [list of attribute names].
  
  -g     Get the value of the specified attribute(s), or all attributes of the specified 
     bean if no attributes are specified.
  -l     List available attributes for the specified bean. Including a description about 
     each attribute.
  
neo4j-sh (0)$ 
```

- Help was not helpful. `ls` seemed tempting, but was useless. `dbinfo` was promising but un-enlightening. What am I supposed to do with this? `exit` immediately

- Q: Was "NOTE: Remote Neo4j graph database service 'shell' at port 1337" telling me that I was connected to the running Neo4j? (I thought that was running on port 7474) I just don't know what that statement means. 
- Can't check the version or verify the database I'm using (path on disk). Would have to google to figure out next steps.
- Let's try the `neo4j-enterprise` package to set up a local cluster.
  - Accept changes to `/etc/neo4j/neo4j-wrapper.conf`
  - Fail...

```bash
neo4j-service already installed.
WARNING: Max 1024 open files allowed, minimum of 40 000 recommended. See the Neo4j manual.
WARNING! You are using an unsupported Java runtime. Please use JDK 6.
Another server-process is running with [2589], cannot start a new one. Exiting.
invoke-rc.d: initscript neo4j-service, action "start" failed.
dpkg: error processing neo4j-enterprise (--configure):
 subprocess installed post-installation script returned error exit status 2
No apport report written because MaxReports is reached already
                                                              Errors were encountered while processing:
 neo4j-enterprise
E: Sub-process /usr/bin/dpkg returned an error code (1)
A package failed to install.  Trying to recover:
Setting up neo4j-enterprise (1.8.1) ...
Running in headless (-h) mode
Installing with user neo4j
neo4j-service already installed.
WARNING: Max 1024 open files allowed, minimum of 40 000 recommended. See the Neo4j manual.
WARNING! You are using an unsupported Java runtime. Please use JDK 6.
Another server-process is running with [2589], cannot start a new one. Exiting.
invoke-rc.d: initscript neo4j-service, action "start" failed.
dpkg: error processing neo4j-enterprise (--configure):
 subprocess installed post-installation script returned error exit status 2
Errors were encountered while processing:
 neo4j-enterprise
```

- Uninstall it all. Shutdown. 

