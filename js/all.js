

$(window).on('load', function () {
    /**
     * STICKY-HEADER
     * @type {jQuery|HTMLElement}
     */
    let header = $('#site-header'),
        site_body = $('body'),
        scrollPrev = 0;

    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();

        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('out');
            header.addClass('fixed');
            site_body.css('padding-top', header.outerHeight());
        } else if (scrolled < 100) {
            header.removeClass('fixed');
            site_body.css('padding-top', '0');
        } else {
            header.removeClass('out');
        }

        scrollPrev = scrolled;
    });
    /**
     * -=END=- STICKY-HEADER -=END=-
     */

    if ($(window).width() < 982) {
        $('#site-language').prependTo('#lang-menu_open-wrapper');

        let menu_items = $('.site-menu-item');
        if (menu_items.length) {
            menu_items.each(function (i, el) {
                let _self = $(el);

                if (_self.hasClass('site-menu-item-has_children')) {
                    _self.on('click', function (e) {
                        e.preventDefault();

                        _self.find('.site-menu-item_submenu').toggle();
                    });
                }
            });
        }
    }
});

$(document).on('click', '#open_menu', function () {
    $('body').toggleClass('open_mobile_menu');
    $(this).toggleClass('mobile_menu_open');
    $('#site-header').toggleClass('mobile_menu_open');
    $('#site-header-wrap').toggleClass('show');
});