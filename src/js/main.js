/**
 * Hero fade transition
 */
(function () {
    // Caching
    var $window = window;
    var $heroSelector = document.querySelectorAll('.hero');

    // Check if the requirements are met
    if (!$heroSelector.length) {
        return;
    }

    // Bind event
    $window.addEventListener('load', doHero);

    // Handle hero fade on scroll
    function doHero() {
        $window.addEventListener('scroll', function () {
            // Calculate opacity based on scroll position
            var opacity = 1 - $window.scrollY / $heroSelector.offsetHeight;

            // Apply opacity to hero elements
            $heroSelector.forEach(function (hero) {
                hero.style.opacity = opacity;
            });
        });
    }

    // Initialization
    doHero();
})();


// ---------------------------------------------


/*
inspiration
https://cz.pinterest.com/pin/830703093792161391/
*/
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

swiper.slideTo(1, false, false);

alert('we')
