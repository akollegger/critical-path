---
layout: page
title: Unaware
tagline: 
---
{% include JB/setup %}

This is normal. Most people in the GP (general population) have little reason to be
familiar with graph databases, let alone Neo4j.
{: .lead }

<blockquote>
	<p>Look around you, graphs are everywhere.</p>
	<small>Neo4j</small>
</blockquote>
 
## Unaware Stories

{% assign category_posts = site.categories['unaware'] %}  

{% for story in category_posts %}
 * [{{ story.title }}]({{ story.url }})
{% endfor %}