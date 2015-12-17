app.responsiveImages = {
    settings: {
    },

    init: function () {
        app.responsiveImages.setBackgroundImage();
    },

    setBackgroundImage: function () {
        $('[data-responsive-bg-img]').each(function () {
            app.responsiveImages.setBackgroundImageStyle($(this));
        });
    },

    setBackgroundImageStyle: function (element) {
        element.css({'background-image': 'url(' + element.find('img')[0].currentSrc + ')'});
    }
};

/*doc
---
title: Responsive images
name: 8_responsive_images
category: Responsive images
---

If you're new to responsive images check out [this article](https://dev.opera.com/articles/native-responsive-images/).

Picturefill is used for wider browser support. There is a Picturefill [JavaScript API](https://scottjehl.github.io/picturefill/#api) available.

*/


/*doc
---
title: Fixed dimensions
name: fixed_dimensions
category: Responsive images
---
These examples will let the browser decide which image is best to display on the used device.

## Different sizes
This tells the browser the width of each image, the browser decides which image is best to display on the current viewport.

```html_example
<img srcset="http://placehold.it/400x200 400w,
            http://placehold.it/800x400 800w,
            http://placehold.it/1200x600 1024w"
    alt="Responsive image" />
```

## Retina example
Rendered with a width of 200 pixels, different size of images are shown based on the device DPI.

```html_example
<img
    srcset="http://placehold.it/200x200 1x,
            http://placehold.it/400x400 2x,
            http://placehold.it/600x600 3x"
    alt="Responsive image"
    width="200" />
```


*/

/*doc
---
title: Variable width
name: variable_width
category: Responsive images
---

## Different sizes
Here we hint the browser how the image will be displayed eventually based on the CSS media queries used for the design.

```html_example
<img sizes="(max-width: 30em) 100vw,
            (max-width: 50em) 50vw,
            60vw"
    srcset="http://placehold.it/400x200 400w,
            http://placehold.it/800x400 800w,
            http://placehold.it/1600x800 1600w"
    alt="Responsive image" />
```

*/

/*doc
---
title: Art direction
name: art_direction
category: Responsive images
---
This is used when you need to explicity set an image for a certian media querie, this way you can create cropped images with totally different dimensions for example. Read more about [art direction](https://dev.opera.com/articles/native-responsive-images/#art-direction).

*Note: the conditional comment is used to support IE9.*

```html_example
<picture>
    <!--[if IE 9]><video style="display: none;"><![endif]-->
    <source srcset="http://placehold.it/1000x400" media="(min-width: 1000px)" />
    <source srcset="http://placehold.it/800x400" media="(min-width: 800px)" />
    <!--[if IE 9]></video><![endif]-->
    <img srcset="http://placehold.it/600x400" alt="" />
</picture>
```

*/

/*doc
---
title: Set background image
name: set_background_image
category: Responsive images
---
Background image is set with the data-responsive-bg-img attribute, it reads the image tag for the current source. So all you have to do is add the attribute and place an image (with srcset) or a picture (like below).

*Note: the header class is added to add some demo styling, you could and probably should remove it in your code.*

```html_example
<div class="header" data-responsive-bg-img>
    <picture class="display-none">
        <!--[if IE 9]><video style="display: none;"><![endif]-->
        <source srcset="responsive-bg-img/1200.png" media="(min-width: 800px)" />
        <source srcset="responsive-bg-img/800.png" media="(min-width: 400px)" />
        <!--[if IE 9]></video><![endif]-->
        <img srcset="responsive-bg-img/400.png" />
    </picture>
</div>
```

*/