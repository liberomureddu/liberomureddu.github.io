---
layout: page
title: Gallery
nav: true
nav_order: 4
permalink: /gallery/
---
<!-- Gallery -->
<div class="container">
  <div class="row">
    <!-- Landscape Images -->
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/160603_PICTURE_Libero_Toolosoi_Richard_Harris_Original.jpg" class="img-fluid rounded shadow-sm" alt="Landscape 1" />
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/171203_PICTURE_Libero_Live_setup_Richard_Harris.jpg" class="img-fluid rounded shadow-sm" alt="Landscape 2" />
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/190603_PICTURE_AuTopsiPohl_Photomusix-Cristina Marx_001.JPG" class="img-fluid rounded shadow-sm" alt="Landscape 3" />
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/190603_PICTURE_AuTopsiPohl_Photomusix-Cristina Marx_002.JPG" class="img-fluid rounded shadow-sm" alt="Landscape 4" />
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/190603_PICTURE_Bauchhund_Photomusix-Cristina Marx_001.JPG" class="img-fluid rounded shadow-sm" alt="Landscape 5" />
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/211002_PICTURE_Mureddu_Credit_Foto TJ Krebs_001.jpg" class="img-fluid rounded shadow-sm" alt="Landscape 6" />
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/PICTURE_Libero_Harri_Lavaklubi_03.jpg" class="img-fluid rounded shadow-sm" alt="Landscape 7" />
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/PICTURE_Libero_Harri_Lavaklubi_05.jpg" class="img-fluid rounded shadow-sm" alt="Landscape 8" />
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/231101_PICTURE_Libero_Soundscapes_4_Credit_Uli_Templin.jpg" class="img-fluid rounded shadow-sm" alt="Landscape 9" />
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/Antti_Ahonen_AAVE_Liquid.jpg" class="img-fluid rounded shadow-sm" alt="Landscape 10" />
    </div>
    <!-- Portrait Images -->
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/PICTURE_Libero_Harri_Lavaklubi_02.jpg" class="img-fluid rounded shadow-sm" alt="Portrait 1" />
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="assets/img/libero_gallery/PICTURE_Mureddu_Cartheuser_Mutefest15_Wilma_Hurskainen_cropped.png" class="img-fluid rounded shadow-sm" alt="Portrait 2" />
    </div>
  </div>
</div>
<!-- Gallery -->








<!-- Gallery https://mdbootstrap.com/docs/standard/extended/gallery/ -->
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>
  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>
  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
<!-- Gallery -->



Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>



The idea for this software is openly inspired by Peter Schmidt's and Brian Eno's Oblique Strategies.<d-footnote>Peter Schmidt's and Brian Eno's <a href="https://www.enoshop.co.uk/product/oblique-strategies?filter=Oblique%20Strategies">Oblique Strategies</a>, is a set of cards 'each of which is a suggestion of a course of action or thinking to assist in creative situations'. The idea of using research methods as the card content was developed during the [Summer Academy for Artistic research SAAR 2024](https://blogit.uniarts.fi/en/post/saar-in-august-2024-in-finland/).</d-footnote>




The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
