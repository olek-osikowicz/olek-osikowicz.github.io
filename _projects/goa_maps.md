---
layout: page
title: GOA Maps
description: Generating detailed SVG city map posters in Python
img: assets/img/goa_maps/renders/copenhagen_onyx_a3.png
importance: 1
category: fun
# related_publications: true
---

I started this project in 2023, when I came across [this project by Anvaka](https://anvaka.github.io/city-roads/).
I simply thought, oh, it would be cool to have not only streets but more map layers to create a nice poster for the wall. A few months of tinkering later, I finished my own tool to generate detailed SVG city map posters from OpenStreetMap data.
You can find the project on my [GitHub](https://github.com/olek-osikowicz/goa-maps-generator).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/goa_maps/renders/copenhagen_onyx_a3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/goa_maps/renders/tallinn_emerald_a3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/goa_maps/renders/nyc_blueprint_a3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    These posters were generated from scratch with my GOA Maps tool.
</div>

Then a good friend of mine, an F1 enthusiast, suggested that my tool would be perfect for making street circuit posters.
For the color schemes, I used the colors of the constructor teams:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/goa_maps/renders/monaco_red_white_yellow_a3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/goa_maps/renders/baku_b_n_w_blue_a3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/goa_maps/renders/suzuka_black_grey_mint_a3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    F1-themed posters I made.
</div>

Check out my [repo](https://github.com/olek-osikowicz/goa-maps-generator) if you'd like such posters for yourself.
In the example configs, there are a few color themes and street circuits to choose from, or you can create your own.

Later, it turned out that map data processing is a useful skill to have.
For my UG dissertation project, I built a digital twin of the streets of Sheffield to test lane-keeping systems of autonomous driving systems in BeamNG.
Ultimately, this led to me enrolling for a PhD in the same area. :)
