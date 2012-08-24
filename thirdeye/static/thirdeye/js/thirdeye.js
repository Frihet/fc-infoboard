/**
 * Create an IFRAME slideshow
 */

(function($) {
    
    $.fn.thirdeye = function(options) {

        var settings = $.extend({
            'urls' : [],
            'duration' : 10
            }, options);

        this.each(function() {

            var dest = $(this);
            var iframe = $('<iframe/>').appendTo(dest);
            iframe.css('width', '100%');
            iframe.css('height', '100%');

            var rotate = function(index) {
                var duration = settings.duration;
                iframe.attr('src', settings.urls[index].url);
                if ((next = index + 1) >= settings.urls.length) {
                    next = 0;
                }
                if (settings.urls[index].duration !== undefined) {
                    duration = settings.urls[index].duration;
                }
                setTimeout(function() { rotate(next); }, duration * 1000);
            };

            rotate(0);
        });
    };

}) (jQuery);
