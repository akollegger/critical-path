
//
// render <span>(node)</span> elements as SVG
//
var nodeTexts = [];
d3.selectAll("span.node").each( function() { 
	nodeTexts.push(this.innerText.replace(/\(?([^\)]+)\)?/,'$1')); 
	this.innerText=""; 
});

var nodes = d3.selectAll("span.node").append("svg")
	.attr("viewBox", "101 156 85 63")
	.attr("width", "80pt")
	.attr("height", "63pt")
	.append("g");

// nodes.append("path")
// 	.attr("d","M 116.62086 169.67519 L 171.22086 169.67519 C 177.67926 169.67519 182.92086 177.73919 182.92086 187.67519 C 182.92086 197.61119 177.67926 205.67519 171.22086 205.67519 L 116.62086 205.67519 C 110.16246 205.67519 104.92086 197.61119 104.92086 187.67519 C 104.92086 177.73919 110.16246 169.67519 116.62086 169.67519 Z")
// 	.attr("fill","#e6e6e6");

nodes.append("path")
	.attr("d", "M 116.62086 169.67519 M 171.22086 169.67519 C 177.67926 169.67519 182.92086 177.73919 182.92086 187.67519 C 182.92086 197.61119 177.67926 205.67519 171.22086 205.67519 M 116.62086 205.67519 C 110.16246 205.67519 104.92086 197.61119 104.92086 187.67519 C 104.92086 177.73919 110.16246 169.67519 116.62086 169.67519 Z")
	.attr("stroke","black")
	.attr("stroke-linecap","round")
	.attr("stroke-linejoin","round")
	.attr("stroke-width","4");

nodes.append("rect")
	.attr("x","117.49833")
	.attr("y","167.6259")
	.attr("width","52.957748")
	.attr("height","40.09859")
	.attr("fill", "#eeeeee")
	.attr("stroke","#eeeeee")
	.attr("stroke-linecap","butt")
	.attr("stroke-linejoin","miter") 
	.attr("stroke-width","2");

nodes.append("path") 
	.classed("node-fill", true)
	.attr("d","M 119.19133 172.13295 L 168.6504 172.13295 C 174.50071 172.13295 179.24878 179.09589 179.24878 187.67521 C 179.24878 196.25454 174.50071 203.21747 168.6504 203.21747 L 119.19133 203.21747 C 113.341026 203.21747 108.592955 196.25454 108.592955 187.67521 C 108.592955 179.09589 113.341026 172.13295 119.19133 172.13295 Z")
	.attr("stroke", "#eeeeee")
	.attr("stroke-width", "2");


nodes.append("text")
	.attr("transform","translate(113.20255 180.67519)")
	.attr("fill","black")
	.attr("style", "text-anchor: middle;")
	.append("tspan")
		.attr("font-family","Helvetica")
		.attr("font-size","12")
		.attr("font-weight","500")
		.attr("x","30")
		.attr("y","11")
		.data(nodeTexts)
			.text(String);

//
// render <span>-[relationship]-</span> elements as SVG
//
var relationshipTexts = [];
d3.selectAll("span.relationship").each( function() { 
	relationshipTexts.push(this.innerText.replace(/[\[\-><]*([^\]]+)[\]\-><]*/,'$1')); 
	this.innerText=""; 
});

var relationships = d3.selectAll("span.relationship").append("svg")
	.attr("viewBox", "190 236 90 65")
	.attr("width", "60pt")
	.attr("height", "65pt")
	.append("g")
		.attr("stroke","none")
		.attr("stroke-opacity","1") 
		.attr("stroke-dasharray","none")
		.attr("fill","none")
		.attr("fill-opacity","1");


relationships.append("path")
	.attr("d","M 254.66675 248.89868 L 261.28647 248.89868 L 261.28647 288.99726 L 254.66675 288.99726 M 214.94844 288.99726 L 208.32873 288.99726 L 208.32873 248.89868 L 214.94844 248.89868")
	.attr("stroke","black")
	.attr("stroke-linecap","butt" )
	.attr("stroke-linejoin","round" )
	.attr("stroke-width","4");

relationships.append("rect")
	.classed("relationship-fill", true)
	.attr("x","212.11112" )
	.attr("y","253.40571" )
	.attr("width","45.48268" )
	.attr("height","31.084517" );

relationships.append("line")
	.attr("x1","265.98479" )
	.attr("y1","268.28194" )
	.attr("x2","278.37504" )
	.attr("y2","268.28194" )
	.attr("stroke","black" )
	.attr("stroke-linecap","butt" )
	.attr("stroke-linejoin","round" )
	.attr("stroke-width","3");

relationships.append("line")
	.attr("x1","191.24017" )
	.attr("y1","268.28194" )
	.attr("x2","203.63042" )
	.attr("y2","268.28194" )
	.attr("stroke","black" )
	.attr("stroke-linecap","butt" )
	.attr("stroke-linejoin","round" )
	.attr("stroke-width","3");

relationships.append("text")
	.attr("transform","translate(217.11112 261.94797)" )
	.attr("fill","black")
	.attr("style", "text-anchor: middle;")
	.append("tspan")
		.attr("font-family","Helvetica" )
		.attr("font-size","12" )
		.attr("font-weight","500" )
		.attr("x","18" )
		.attr("y","11" )
		.data(relationshipTexts)
			.text(String);

