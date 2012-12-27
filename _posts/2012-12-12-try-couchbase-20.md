---
layout: post
title: "Try Couchbase 2.0"
persona: "Andreas Kollegger"
description: "As a NOSQL developer, I'd like to evaluate the features of Couchbase 2.0"
category: actual
from: unaware
to: interested
duration: 1 hour
functional: A
reliable: A
usable: B-
pleasurable: C
tags: [dev, solo]
---
{% include JB/setup %}

# Becoming Aware

- Adam Frankl mentioned to me that Couchbase has announced the release of 2.0
- Over Skype, AF shared a link to the [press release](http://www.couchbase.com/press-releases/couchbase-announces-availability-couchbase-server-20)
- from PR, "adds document database capabilities, extends scalability and performance leadership"
- ABK: wasn't Couch originally a document database?
- Let's check it out

# Getting Interested

## Download Couchbase

- from PR: following link to [Download Couchbase Server 2.0](http://www.couchbase.com/download)
- download page includes a marketing blurb explaining Couchbase. +1 for nice reinforcement. 
    - ![download blurb](/assets/img/download_Couchbase_hero.jpg)
- table of download options
    - either Enterprise or Community for various OS platforms
        - brief sentence distinguishing intended audience for each
        - pop-up with bullet-listed details
    - dropdown for selecting the version, which updates the table cells
    - only stable release numbers (no snapshots, milestones, whatever)
    - direct, context appropriate links to:
        - install instructions per platform
        - release notes for download
        - documentation
    - MD5 has for downloads. meh, ok. assuring even though nobody ever checks?
- looks like this: ![download table](/assets/img/download_Couchbase.jpg)
- I'm on a Mac, so selecting that

## Unpacking and Running

- Mac download was a zip, got auto-expanded
- looking in folder
    - Couchbase Server
    - README.txt
- double-click on Couchbase Server
- Mac Security dialog
    > "Couchbase Server" can't be opened because it is from an unidentified developer
- click ok. go to system preferences to relax security to allow applications downloaded from "Anywhere"
- double-click again. Now a passable (can be passed) security dialog about running this rogue app
- um... nothing
- oh, there it is. a little couch icon in my menubar. would've been nice to get a little "hi there" dialog for this first run
- ![Couchbase menubar](/assets/img/Couchbase_menubar.jpg)
- let's start with "About Couchbase Server"
    - logo, version, license details. fair enough
- "Open Admin Console"
    - opens up browser to [http://127.0.0.1:8091/index.html](http://127.0.0.1:8091/index.html)
    - splash screen with button to "Setup" which looks like start of an install Wizard. ok
    - yup. let's do that...

## Setup

1. "Configure Server"
    - database(s) pathin my home Library/Application Support/ directory
    - Join Cluster/Start new Cluster
    - dude, I've just got a single developer laptop. no interest in clustering at the moment
    - glancing back at download website, Step #2 is a video about quick-starting a cluster. bleh
    - no non-clustering option. *sigh* fine, moving on
2. "Sample Buckets"
    - what's a bucket? is that a database? I chose a path for databases earlier. what's the relationship?
    - oh, nice. sample data and MapReduce (*shiver*) queries
    - none installed. selecting "beer-sample" and "gamesim-sample"
3. "Create Default Bucket"
    - m'kay. assuming defaults are good here
4. "Notifications"
    - notifications that appear where? email spam, or?
    - reading the "What's this" link
    - only now realizing that I'm using the "Couchbase Console (2.0.0)" aka "Couchbase web console" aka "Admin Console"
    - includes notice about config information being transferred during update check. that's a nice mention, and fair exchange.
      Seems perfectly reasonable that checking for an update means revealing what is currently installed. 
    - Disabling the notifications.
5. "Configure Server" - Secure this server
    - create an admin account. cool
    - apparently also used to auth would-be cluster members. 

Done.

## Couchbase Console

### Cluster Overview tab

- initial view is some kind of overview dashboard
- lots of free memory and disk
- 1 active server. ok, so I'm a cluster of 1

### Server Nodes tab

- details about the one server

### Data Buckets

- ah, the good stuff -- data!
- `beer-sample`, `default`, `gamesim-sample`
- option to "Create New Data Bucket"
- cllicking on reveal-triangle/play button for `beer-sample`
- it's a reveal-triangle (a bit large, honestly)
- more status widgets. I want to see the data
- "Documents" or "Views" buttons for the bucket
- clicking "Documents"
- list of docs
    - IDs that all look the same (cut off)
    - Content that looks like JSON docs
    - ooh, "Edit Document" button. click
- nice, nice, nice +1 web editor for the doc
- added a property, saved
- k, how do I dismiss this view to go back?
- dropdown of "buckets" and a "Documents" link
- click the "Documents" link 
- k, cool
- create a new document with "Create Document" button
- needs an id. I do not care, I just want to save a new document
- random typing for document id
- nice sample doc created with self-explaining fields

        {
            "click": "to edit",
            "new in 2.0": "there are no reserved field names"
        }
- ah, entered some bad field values. can't save, syntax error warning. +1
- ditto with forgetting a comma. 
- back to "Data Buckets" to try out "Views" button
- `beer-sample` "Views"
- oh, just goes to the "Views" tab with `beer-sample` bucket selected in dropdown
- confusing. what is this?
- "Development Views" or "Production Views" radio-button-ish thing
- "There are currently no Design Documents in Development." wha?
- "Production Views" has something
- is "Development" to "Production" a staging/workflow thing?
- click on "brewery_beers" view 
- I'm looking at... a view... of...
- "Preview a Random Document" button. click, click, click
- alright, so the top pane changes each time, loading different documents to preview
- which means the bottom "View Code" is the query
- looks like javascript: grr copy and past no work, make sad face
- hand-typing:

```javascript
function(doc, meta) {
    switch(doc.type) {
    case "brewery":
        emit([meta.id]);
        break;
    case "beer":
        if (doc.brewery id) {
            emit([doc.brewery_id, meta.id]);
        }
        break;
    }
}
```
- oh, I see. top-left panel is the original document, then the top-right is
  the view
- enough. ugh, moving on to other menus to see what they are

### Etc

- "XDCR" tab for cluster replication
- "Log" tab with a nice formatted table of logged events
- "Settings" to reconfigure the thing. cool.
    - ah, includes a sub-tab for Sample Buckets
- top-bar links: Documentation, Support Forums, About, Sign Out

Enough. Shutting down, purging the install. 

### Postscript

Overall a really pleasant experience, rewarding enough to try to learn more
about what Couchbase can do. 

Minor, minor annoyance about having to dig around to un-install -- this is a dev laptop. Next time, Couchbase, I'll sandbox you in a virtual machine.  

* Functional: A
  - yup, I was able to download, install, run and experiment
* Reliable: A
  - no indication of shakiness
* Usable: B-
  - not entirely consistent language
  - a lot of assumption that I knew about things requiring decisions, leading to classic "click yes or accept defaults to get through a wizard" behavior. A simple, "trust me" novice mode would be preferable, if un-doable
  - disliked that Couchbase made itself at home on my machine
* Pleasurable: C
  - 'C' is actually pretty good for a technology-focused product
