---
layout: page
title: Aware
tagline: of what Neo4j is, enough to generally explain it to a friend
---
{% include JB/setup %}

 
## Aware Stories

{% assign category_posts = site.categories['aware'] %}  

{% if category_posts.size > 0 %}
{% for story in category_posts %}
 * [{{ story.title }}]({{ story.url }})
{% endfor %}
{% endif %}


