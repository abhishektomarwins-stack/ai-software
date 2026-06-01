// Modern infinite marquee effect with pause on hover
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.marqueeWrapper').forEach(function (marqueeWrapper) {
        var marqueeContents = marqueeWrapper.querySelectorAll('.marqueeContent');
        if (marqueeContents.length < 2) return;
 
        var marqueeContent = marqueeContents[0];
        var marqueeContentClone = marqueeContents[1];
        marqueeContentClone.innerHTML = marqueeContent.innerHTML;
        var speed = 1; // px per frame
        var pos = 0;
        var paused = false;
 
        marqueeWrapper.addEventListener('mouseenter', function () {
            paused = true;
            marqueeWrapper.classList.add('is-paused');
        });
        marqueeWrapper.addEventListener('mouseleave', function () {
            paused = false;
            marqueeWrapper.classList.remove('is-paused');
        });
 
        function animateMarquee() {
            if (!paused) {
                pos -= speed;
                if (Math.abs(pos) >= marqueeContent.offsetWidth) {
                    pos = 0;
                }
                marqueeContent.style.transform = 'translateX(' + pos + 'px)';
                marqueeContentClone.style.transform = 'translateX(' + pos + 'px)';
            }
            requestAnimationFrame(animateMarquee);
        }
        animateMarquee();
    });
});


        $(document).ready(function () {
    $(".roadmapSlider").owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            768: {
                items: 2,
                margin: 20
            },
            1200: {
                items: 3,
                margin: 30
            }
        }
    });
});
