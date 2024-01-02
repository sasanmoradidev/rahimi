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

    // get header height for video banner
    const height = $('header').height();
    $( window ).on( "load resize", function() {
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
            if($(this).attr('data-img')){
                $('.linkimage img').attr('src', $(this).attr('data-img'));
            }else {
                $('.linkimage img').attr('src','');
            }
        });
    });
    // end Mega menu handler
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
});