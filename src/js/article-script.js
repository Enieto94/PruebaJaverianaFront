$(document).ready(function () {
    var carousel_blog = $('#article-c');
    carousel_blog.owlCarousel({
        dots: false,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }

    });


    $('#accordion').on('hidden.bs.collapse', function (e) {
        $(e.target).prev().find('i').removeClass('fa-minus').addClass('fa-plus');
    });

    $('#accordion').on('shown.bs.collapse', function (e) {
        $(e.target).prev().find('i').removeClass('fa-plus').addClass('fa-minus');
    });
})