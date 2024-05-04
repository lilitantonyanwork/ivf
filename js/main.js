$(function (){
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:4
            }
        }
    })
    $('.doctors-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
    $('.news-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: true,
        dotsEach:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

    const observerLeft = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInLeft');
                return;
            }

        });
    });
    const observerRight = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInRight');
                return;
            }

        });
    });

    const leftItem = document.querySelectorAll('.leftAnimation');
    const rightItem = document.querySelectorAll('.rightAnimation');

    leftItem.forEach((element) => observerLeft.observe(element));
    rightItem.forEach((element) => observerRight.observe(element));



    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('fixed-top ', $(this).scrollTop() > $nav.height());
    });
    $('.close').on('click',function (){
        $('.navbar-toggler').trigger('click')
    })
})