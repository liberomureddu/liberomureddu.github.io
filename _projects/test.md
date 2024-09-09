---
layout: distill
title: test
description: a page to test things
img: 
importance: 5
category: work
giscus_comments: false
permalink: /test/
og_image: 
related_publications: true
---
murmur trio investiga lo spazio dove si intersecano pratiche esclusivamente e volutamente elettroniche con la lunga ombra del jazz piano trio. Come reagiamo a questo potenziale attrito? Come si influenzano reciprocamente i mondi acustici ed elettronici? Quali (im)possibilità si presentano davanti a noi? 
murmur trio è un laboratorio di suoni e approcci in tempo reale, un esperimento in continua evoluzione, un viaggio che tenta di portare l’ascoltatore a visitare le strade meno battute, anche quelle meno percorribili.

​
murmur trio investigates the space where purely and intentionally electronic practices intersect with the long shadow of the jazz piano trio. How do we react to this potential friction? How do the acoustic and electronic worlds influence each other? What (im)possibilities lie ahead of us? 
murmur is a laboratory of sounds and real-time approaches, an experiment in continuous evolution, a journey that attempts to drive the listener off the beaten path, even venturing into the impassable ones.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/mx4gk79WcxE" class="img-fluid rounded" %}
    </div>
</div>
<div class="caption">
    murmur trio during a recording session in February 2023
</div>

<!-- This solution didn't work -->
<!-- <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/mx4gk79WcxE?si=peQGe6SiOJILTRPd" class="img-fluid rounded" %}
    </div>
</div> -->

<!-- Instead I'm using this one, taken from https://github.com/codepo8/youtube-embed/blob/main/youtube.html -->
<!-- <div class="embed-container">
    <iframe width="640" height="390" 
    src="https://www.youtube.com/embed/mx4gk79WcxE" 
    frameborder="0" allowfullscreen></iframe>
</div>
<style>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
-->


<!-- <div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <div class="embed-container">
            {% include video.liquid path="https://www.youtube.com/embed/jNQXAC9IVRw" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <div class="embed-container">
            {% include video.liquid path="https://player.vimeo.com/video/524933864?h=1ac4fd9fb4&title=0&byline=0&portrait=0" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <div class="embed-container">
            {% include video.liquid path="https://player.vimeo.com/video/524933864?h=1ac4fd9fb4&title=0&byline=0&portrait=0" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption">
    A simple, elegant caption looks good between video rows, after each row, or doesn't have to be there at all.
</div>

-->


This post shows how to add bibliography to simple blog posts. We support every citation style that [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) does. That means simple citation like {% cite einstein1950meaning %}, multiple citations like {% cite einstein1950meaning einstein1905movement %}, long references like {% reference einstein1905movement %} or also quotes:

{% quote einstein1905electrodynamics %}
Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor.

Lorem ipsum dolor sit amet, consectetur adipisicing.
{% endquote %}

If you would like something more academic, check the [distill style post]({% post_url 2018-12-22-distill %}).

## testing footnotes
Blabla<d-footnote>Text to footnote</d-footnote>








