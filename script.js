$(function () {

    // Video appearence play/pause
    var mediaVideo = $("#mine video").get(0);
    $("#mine").on('appear', function () {
        mediaVideo.play();
        if (mediaVideo.paused) {
            mediaVideo.play();
        }
    });

    $("#mine").on('disappear', function () {
        mediaVideo.pause();
    });

    $("#mine").appear();
    // end Video appearence play/pause

    $('.fadeslider').slick({
        dots: false,
        rtl: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // get header height for video banner
    const height = $('header').height();
    $(window).on("load resize", function () {
        const height = $('header').height();
        console.log(height);
        $('#videobanner').css('height', `calc(100vh - ${height}px)`);
    });
    // end get header height for video banner

    // Mega menu handler
    let ullist = $('.levelone li:first-child ul');
    ullist.clone().appendTo('.menulist');
    $('.levelone li a').on('mouseenter', function () {
        ullist = $(this).parent().children('ul');
        $('.menulist').html('');
        ullist.clone().appendTo('.menulist');

        $('.menulist ul li a').on('mouseenter', function () {
            if ($(this).attr('data-img')) {
                $('.linkimage img').attr('src', $(this).attr('data-img'));
            } else {
                $('.linkimage img').attr('src', '');
            }
        });
    });
    // end Mega menu handler

    // counter
    let once = true;
    $("#counter").on('appear', function () {
        if (once) {
            $('#number1').jQuerySimpleCounter({ end: 12, duration: 3000 });
            $('#number2').jQuerySimpleCounter({ end: 55, duration: 3000 });
            $('#number3').jQuerySimpleCounter({ end: 359, duration: 2000 });
            once = false;
        }
    });

    $("#counter").appear();

    // counter
});


//menu/
// (c) 2020-2023 Written by Simon Köhler in Panama
// simonkoehler.com

// Wait for the DOM (Document Object Model) to be fully loaded
document.addEventListener('DOMContentLoaded', function (event) {

    // Hamburger menu
    var navbarToggler = document.querySelectorAll('.navbar-toggler')[0];
    navbarToggler.addEventListener('click', function (e) {
        e.target.children[0].classList.toggle('active');
    });

    // Select the <html> element
    var html = document.querySelectorAll('html')[0];

    // Select the first element with the attribute 'data-bs-toggle-theme'
    var themeToggle = document.querySelectorAll('*[data-bs-toggle-theme]')[0];

    // Set the default theme to 'dark' for the <html> element
    html.setAttribute('data-bs-theme', 'dark');

    // Check if a themeToggle element is found
    if (themeToggle) {
        // Add a click event listener to the themeToggle element
        themeToggle.addEventListener('click', function (event) {
            // Prevent the default behavior of the click event
            event.preventDefault();

            // Check the current theme attribute value of the <html> element
            if (html.getAttribute('data-bs-theme') === 'dark') {
                // If the current theme is 'dark', change it to 'light'
                html.setAttribute('data-bs-theme', 'light');
            } else {
                // If the current theme is not 'dark', change it back to 'dark'
                html.setAttribute('data-bs-theme', 'dark');
            }
        });
    }

    setInterval(nextAnimation, 3000 );
});



$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


// slider
let images = document.querySelectorAll('.image');
const root = document.documentElement;
const elements = ['.image-1', '.image-2', '.image-3', '.image-4', '.image-5']
const totalImages = images.length;

let currentImage = 1;
let nextImage = currentImage + 1;
let upcomingImage = nextImage + 1;

function filterActiveImages(image1, image2) {
    const filteredResult = elements.filter((element) => element !== image1 && element !== image2)
    return filteredResult;
}

function slideImage(currentImage, nextImage, upcomingImage) {
    let tl = gsap.timeline({ defaults: { duration: 0.8, ease: Power1.easeInOut } });
    tl.to(`.image-${currentImage}`, { rotation: -10, xPercent: -100 })
        .to(`.image-${currentImage}`, { rotation: 0, xPercent: 0 })
        .to(`.image-${nextImage}`, { zIndex: 2, top: "-50px", left: "-100px" }, "-=1.6")
        .to(`.image-${currentImage}`, { zIndex: -1, top: "0px", left: "0px"  }, "-=1.6")
        .to(`.image-${upcomingImage}`, { zIndex: 1, top: "0px", left: "0px"  }, "-=1.6")
        .to(filterActiveImages(`.image-${nextImage}`, `.image-${currentImage}`), { zIndex: 0 }, "-=2.4")
    tl.timeScale(2);
    return tl;
}

function nextAnimation() {
    slideImage(currentImage, nextImage, upcomingImage);

    currentImage = nextImage;
    nextImage = currentImage - 1;

    if (currentImage === 1) {
        nextImage = totalImages
    }

    if (nextImage === 1) {
        upcomingImage = totalImages
    } else {
        upcomingImage = nextImage - 1;
    }
}


// slider
