  // Modern infinite marquee effect with pause on hover
        document.addEventListener('DOMContentLoaded', function() {
            var marqueeContent = document.getElementById('marqueeContent');
            var marqueeContentClone = document.getElementById('marqueeContentClone');
            var marqueeWrapper = document.querySelector('.marqueeWrapper');
            marqueeContentClone.innerHTML = marqueeContent.innerHTML;
            var marquee = marqueeContent.parentElement;
            var speed = 1; // px per frame
            var pos = 0;
            var paused = false;
 
            marqueeWrapper.addEventListener('mouseenter', function() {
                paused = true;
                marqueeWrapper.classList.add('is-paused');
            });
            marqueeWrapper.addEventListener('mouseleave', function() {
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
