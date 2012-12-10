---
layout: page
title: Love
tagline: and trust Neo4j
---
{% include JB/setup %}

<blockquote>
	<p>Your sucess is our success.</p>
	<small>Neo4j</small>
</blockquote>

 
## Love Stories

{% assign category_posts = site.categories['love'] %}  

{% if category_posts.size > 0 %}
{% for story in category_posts %}
 * [{{ story.title }}]({{ story.url }})
{% endfor %}
{% endif %}


