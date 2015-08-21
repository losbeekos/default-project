app.equalize = {
    settings: {
        $el: $('[data-equalize]')
    },

    init: function(){
        if (app.equalize.settings.$el.length > 0) {
            app.equalize.settings.$el.each(function () {
                var currentHeight = 0,
                    $this = $(this);

                $this.find('[data-equalize-target]')
                    .each(function () {
                        var $this = $(this),
                            height = null;

                        $this.css({height: 'auto'});

                        height = $(this).height();

                        if (height > currentHeight) {
                            currentHeight = height;
                        }
                    })
                    .height(currentHeight);
            });
        }
    }
};

/*doc
---
title: Equalize
name: equalize
category: Content
---

Equalize targets in just a snap. It can be everything not just columns or blocks.

```html_example
<div class="grid" data-equalize>
    <div data-equalize-target class="column-4 block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, beatae, alias? Necessitatibus nulla sint voluptate perspiciatis excepturi, architecto et, incidunt itaque iusto inventore porro! Eum ullam placeat quam, eius aperiam!</div>
    <div data-equalize-target class="column-4 block">column-4</div>
    <div data-equalize-target class="column-4 block">column-4</div>
</div>
```

*/