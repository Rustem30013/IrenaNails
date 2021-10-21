(function ($) {
    'use strict';


    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#akameNav').classyNav();
    }

    // *********************************
    // :: 3.0 Welcome Slides Active Code
    // *********************************

    // if ($.fn.owlCarousel) {
    //     var welcomeSlider = $('.welcome-slides');
    //     welcomeSlider.owlCarousel({
    //         items: 1,
    //         loop: true,
    //         autoplay: false,
    //         smartSpeed: 1500
    //     })
    //     welcomeSlider.on('translate.owl.carousel', function () {
    //         var layer = $("[data-animation]");
    //         layer.each(function () {
    //             var anim_name = $(this).data('animation');
    //             $(this).removeClass('animated ' + anim_name).css('opacity', '0');
    //         });
    //     });

    //     $("[data-delay]").each(function () {
    //         var anim_del = $(this).data('delay');
    //         $(this).css('animation-delay', anim_del);
    //     });

    //     $("[data-duration]").each(function () {
    //         var anim_dur = $(this).data('duration');
    //         $(this).css('animation-duration', anim_dur);
    //     });

    //     welcomeSlider.on('translated.owl.carousel', function () {
    //         var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
    //         layer.each(function () {
    //             var anim_name = $(this).data('animation');
    //             $(this).addClass('animated ' + anim_name).css('opacity', '1');
    //         });
    //     });
    // }


    //Слайдер галерея
    var gallerySlider = $('#carousel1');

    $(document).ready(function() {
        gallerySlider.owlCarousel({
            items: 1,
            dots: false,
            nav: false
        });
    });

    $('#sliderRight').click(function() {
        gallerySlider.trigger('next.owl.carousel');
    });

    $('#sliderLeft').click(function() {
        gallerySlider.trigger('prev.owl.carousel');
    });

        //Слайдер отзывы
        var commentSlider = $('#carousel2');

        $(document).ready(function() {
            commentSlider.owlCarousel({
                items: 1,
                dots: false,
                nav: false
            });
        });
    
        $('#sliderRightClients').click(function() {
            commentSlider.trigger('next.owl.carousel');
        });
    
        $('#sliderLeftClients').click(function() {
            commentSlider.trigger('prev.owl.carousel');
        });

})(jQuery);


