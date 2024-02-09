$(document).ready(function () {
    var carousel_blog = $('#blog-c');
    carousel_blog.owlCarousel({
        dots: false,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 4
            }
        }

    });
    var carousel_invitados = $('#invitados-c');
    carousel_invitados.owlCarousel({
        dots: false,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }

    });

    // Go to the next item
    $('#navder').click(function () {
        carousel_blog.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('#naviz').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        carousel_blog.trigger('prev.owl.carousel', [300]);
    })


    var carousel_egresados = $('#egresados-c');
    carousel_egresados.owlCarousel({
        dots: true,
        items: 1
    });
    var areas = $('#areas-c');
    areas.owlCarousel({
        dots: true,
        items: 1
    });




});


