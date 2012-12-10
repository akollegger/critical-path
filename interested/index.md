---
layout: page
title: Interested
tagline: in what's going on with Neo4j
---
{% include JB/setup %}

People who are interested want to stay informed about Neo4j. 
{: .lead }
 
## Interested Stories

{% assign category_posts = site.categories['interested'] %}  

{% if category_posts.size > 0 %}
{% for story in category_posts %}
 * [{{ story.title }}]({{ story.url }})
{% endfor %}
{% endif %}


