---
layout: page
title: Appeal
tagline: to a person's interest
---
{% include JB/setup %}

 
## Appealing Stories

{% assign category_posts = site.categories['appeal'] %}  

{% for story in category_posts %}
 * [{{ story.title }}]({{ story.url }})
{% endfor %}


