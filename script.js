$(function () {
    // layer2 slider interval
    setInterval(nextAnimation, 3000);
    // layer2 slider interval

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
const elements = ['.image-1', '.image-2', '.image-3']
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
        .to(`.image-${nextImage}`, { zIndex: 2, top: "-50px", left: "-50px" }, "-=1.6")
        .to(`.image-${currentImage}`, { zIndex: -1, top: "0px", left: "50px" }, "-=1.6")
        .to(`.image-${upcomingImage}`, { zIndex: 1, top: "0px", left: "50px" }, "-=1.6")
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

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}


// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
    'تراش کیفیت از زیبایی خام',
    'علی رحیمی'
];


const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1800);
    });
    counter = (counter + 1) % phrases.length;
};

next();
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

//comparison draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
jQuery(document).ready(function ($) {
    var dragging = false,
        scrolling = false,
        resizing = false;
    //cache jQuery objects
    var imageComparisonContainers = $('.cd-image-container');
    //check if the .cd-image-container is in the viewport 
    //if yes, animate it
    checkPosition(imageComparisonContainers);
    $(window).on('scroll', function () {
        if (!scrolling) {
            scrolling = true;
            (!window.requestAnimationFrame)
                ? setTimeout(function () { checkPosition(imageComparisonContainers); }, 100)
                : requestAnimationFrame(function () { checkPosition(imageComparisonContainers); });
        }
    });

    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    imageComparisonContainers.each(function () {
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });

    //upadate images label visibility
    $(window).on('resize', function () {
        if (!resizing) {
            resizing = true;
            (!window.requestAnimationFrame)
                ? setTimeout(function () { checkLabel(imageComparisonContainers); }, 100)
                : requestAnimationFrame(function () { checkLabel(imageComparisonContainers); });
        }
    });

    function checkPosition(container) {
        container.each(function () {
            var actualContainer = $(this);
            if ($(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
                actualContainer.addClass('is-visible');
            }
        });

        scrolling = false;
    }

    function checkLabel(container) {
        container.each(function () {
            var actual = $(this);
            updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
            updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
        });

        resizing = false;
    }

    //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
    function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
        dragElement.on("mousedown vmousedown", function (e) {
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');

            var dragWidth = dragElement.outerWidth(),
                xPosition = dragElement.offset().left + dragWidth - e.pageX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth(),
                minLeft = containerOffset + 10,
                maxLeft = containerOffset + containerWidth - dragWidth - 10;

            dragElement.parents().on("mousemove vmousemove", function (e) {
                if (!dragging) {
                    dragging = true;
                    (!window.requestAnimationFrame)
                        ? setTimeout(function () { animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement); }, 100)
                        : requestAnimationFrame(function () { animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement); });
                }
            }).on("mouseup vmouseup", function (e) {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on("mouseup vmouseup", function (e) {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
    }

    function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
        var leftValue = e.pageX + xPosition - dragWidth;
        //constrain the draggable element to move inside his container
        if (leftValue < minLeft) {
            leftValue = minLeft;
        } else if (leftValue > maxLeft) {
            leftValue = maxLeft;
        }

        var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

        $('.draggable').css('left', widthValue).on("mouseup vmouseup", function () {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
        });

        $('.resizable').css('width', widthValue);

        updateLabel(labelResizeElement, resizeElement, 'left');
        updateLabel(labelContainer, resizeElement, 'right');
        dragging = false;
    }

    function updateLabel(label, resizeElement, position) {
        if (position == 'left') {
            (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
        } else {
            (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
        }
    }
});
//comparison draggable funtionality