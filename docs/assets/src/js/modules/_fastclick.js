app.fastClick = {
    init: function(){
        if (app.settings.$html.hasClass('touch')) {
            yepnope.injectJs(
                app.pathBower + 'fastclick/lib/fastclick.js',
                function(){
                    FastClick.attach(document.body);
                }
            );
        }
    }
};