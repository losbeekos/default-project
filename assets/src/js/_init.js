app.settings.$document.ready(function () {
    var $this = $(this),
        scrollTop = $this.scrollTop();

    app.equalize.init();
    app.scrollSpyNav.init(scrollTop);
    app.fastClick.init();
    app.fitVids.init();
    app.navBar.init(scrollTop);
    app.dropdowns.init();
    app.formModules.init();
    app.jump.init();
    app.modals.init();
    app.tooltips.init();
    app.accordion.init();
    app.tabs.init();
    app.notifications.init();
    app.offCanvas.init();
    app.toggle.init();
    app.parallax.init(scrollTop);
    app.groupCheckable.init();
    app.leave.init();
    app.btnDropdown.init();

    //app.cycle.init();
    //app.fancybox.init();
    //app.navPrimary.init();

});

app.settings.$window.ready(function () {
    var $this = $(this),
        scrollTop = $this.scrollTop(),
        windowHeight = $this.height();

    app.scrollSpy.init(scrollTop, windowHeight, true);
    app.affix.init(scrollTop);

    app.settings.$html.addClass('app-active');
});

app.settings.$window.on('scroll', function () {
    var $this = $(this),
        scrollTop = $this.scrollTop(),
        windowHeight = $this.height();

    app.scrollSpy.init(scrollTop, windowHeight, false);
    app.scrollSpyNav.init(scrollTop);
    app.parallax.init(scrollTop);
    app.navBar.scroller(scrollTop);
    app.disableHover.init();

    if (app.settings.$html.hasClass('no-touch')) {
        // app.affix.scroller(scrollTop);
    }
});

app.settings.$window.on('touchmove', function(){
    var $this = $(this),
        scrollTop = $this.scrollTop(),
        windowHeight = $this.height();

    app.affix.scroller(scrollTop);
    app.scrollSpy.init(scrollTop, windowHeight, false);
    app.scrollSpyNav.init(scrollTop);
});

app.settings.$window.on('resize', function () {

    app.settings.$html.addClass('disable-transitions');

    if(this.resizeTo) {
        clearTimeout(this.resizeTo);
    }

    this.resizeTo = setTimeout(function() {
        var $this = $(this),
            scrollTop = $this.scrollTop(),
            windowHeight = $this.height();

        app.equalize.init();
        app.scrollSpy.init(scrollTop, windowHeight, true);
        app.scrollSpyNav.init(scrollTop);
        app.parallax.init(scrollTop);
        app.navBar.resize(scrollTop);
        app.navBar.scroller(scrollTop);
        app.affix.init(scrollTop);

        app.settings.$html.removeClass('disable-transitions');
    }, 500);
});