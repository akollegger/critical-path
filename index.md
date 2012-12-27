---
layout: page
title: Critical Path
tagline: Trial driven studies of Neo4j
---
{% include JB/setup %}

From "hello" to "all systems go," each interaction affects how you relate to Neo4j, leading along an increasingly critical path.
{: .lead }

This is a research project. Through repeated trials by (real or impersonated) people using Neo4j, the intent is to understand user goals
and grade the experience of pursuing those goals. 

## Trials

Each trial describes a scenario, then records the transcript of a user's experience as a sequence of action and result pairs. 
Grading considers a range of standards:

* _F_unctional  - the system should work, satisfying a user goal
* _R_eliable    - failure is not tolerable
* _U_sable      - easy to learn, easy to use
* _P_leasurable - the experience should be delightful

<table class="table">
	<thead>
		<tr><th>Date</th><th>Title</th><th>Persona</th><th>From</th><th>To</th><th>F</th><th>R</th><th>U</th><th>P</th></tr>
	</thead>
	<tbody>	 
{% for post in site.posts %}
		<tr><td>{{ post.date | date_to_string }} </td><td> <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> </td><td>{{ post.persona }}</td>
			<td>{{ post.from }}</td><td> {{ post.to }}</td>
			<td>{{ post.functional }}</td><td>{{ post.reliable }}</td><td>{{ post.usable }}</td><td>{{ post.pleasurable }}</td>
		</tr>
{% endfor %} 
	</tbody>
</table>




