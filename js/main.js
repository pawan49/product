$(document).ready(function() {
    $('#products').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                stagePadding: 50,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 4
            }
        }
    })

    $('#testi').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 2
            }
        }
    })

    $('.navbar-nav').click(function(e) {

        $('.navbar-collapse').collapse('hide');
    });

});