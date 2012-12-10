---
layout: page
title: Like
tagline: using Neo4j or contributing to the project
---
{% include JB/setup %}

When people like Neo4j, they're driven by interest, though not need. 
{: .lead }
 
## Likeable Stories

{% assign category_posts = site.categories['like'] %}  

{% if category_posts.size > 0 %}
{% for story in category_posts %}
 * [{{ story.title }}]({{ story.url }})
{% endfor %}
{% endif %}


