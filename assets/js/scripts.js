$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // hide some elements on page load
    $('#intro').css('opacity', 0);
    $('#project1').css('opacity', 0);
    $('#project2').css('opacity', 0);

    $('#profile-pic').waypoint(function () {
        $('#profile-pic').addClass('bounceInDown');
    }, {
        offset: '100%'
    });
    $('.down-icon').waypoint(function () {
        $('.down-icon').addClass('bounce');
    }, {
        offset: '100%'
    });
    $('#intro').waypoint(function () {
        $('#intro').addClass('fadeInUpBig');
    }, {
        offset: '100%'
    });
    $('#work1').waypoint(function () {
        $('#work1').addClass('zoomInUp');
    }, {
        offset: '100%'
    });
    $('#work2').waypoint(function () {
        $('#work2').addClass('slideInUp');
    }, {
        offset: '100%'
    });
    $('#work3').waypoint(function () {
        $('#work3').addClass('rotateIn');
    }, {
        offset: '100%'
    });
    $('#project1').waypoint(function () {
        $('#project1').addClass('fadeInLeft');
    }, {
        offset: '100%'
    });
    $('#project2').waypoint(function () {
        $('#project2').addClass('fadeInRight');
    }, {
        offset: '100%'
    });
    $('#contact-form').waypoint(function () {
        $('#contact-form').addClass('jello');
    }, {
        offset: '100%'
    });

});