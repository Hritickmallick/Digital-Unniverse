$(document).ready(function () {
    $(".img-1").mouseenter(function () {
        $(".img-1").css('position', 'fixed')
    })
    $(".img-1").mouseleave(function () {
        $(".img-1").css('position', 'absolute')
    })

    $(".img-2").mouseenter(function () {
        $(".img-2").css('position', 'fixed')
    })
    $(".img-2").mouseleave(function () {
        $(".img-2").css('position', 'absolute')
    })

    $(".img-3").mouseenter(function () {
        $(".img-3").css('position', 'fixed')
    })
    $(".img-3").mouseleave(function () {
        $(".img-3").css('position', 'absolute')
    })

    $(".img-4").mouseenter(function () {
        $(".img-4").css('position', 'fixed')
    })
    $(".img-4").mouseleave(function () {
        $(".img-4").css('position', 'absolute')
    })

    $(".img-5").mouseenter(function () {
        $(".img-5").css('position', 'fixed')
    })
    $(".img-5").mouseleave(function () {
        $(".img-5").css('position', 'absolute')
    })

    $(".img-6").mouseenter(function () {
        $(".img-6").css('position', 'fixed')
    })
    $(".img-6").mouseleave(function () {
        $(".img-6").css('position', 'absolute')
    })
})

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow:'<i class="fa-solid fa-arrow-left prev-arrow arrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right next-arrow arrow"></i>',
    responsive: [
      
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
            breakpoint: 567,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
    ]

    
});

$('.slider-2').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
      
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ]
   
});

$('.center').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll:1,
    dots:false,
    prevArrow:'<i class="fa-solid fa-arrow-left prev-arrow arrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right next-arrow arrow"></i>',
})

$(document).ready(function(){
    $('.search-menu').click(function(){
        $(".search-menu").hide(),
        $('.hidden').addClass("close-btn"),
        $('.hide').addClass("search-box");
    })

    $('.hidden').click(function(){
        $('.hidden').removeClass("close-btn"),
        $('.search-menu').show(),
        $('.hide').removeClass('search-box');
    })
})

$(document).ready(function(){
    $('.hamburger-menu').click(function(){
        $('.section-hamburger-menu').addClass("close-mark")
    })

    $('.hamburger-close').click(function(){
        $(".section-hamburger-menu").removeClass('close-mark')
    })
})

$(document).ready(function(){
    $('.hamburger-nav-logo').click(function(){
        $('.hamburger-navigation').css('display','block'),
        $('.hamburger-nav-logo').css('display', 'none'),
        $('.hamburger-nav-close-btn').css('display','block')
    })

   $('.hamburger-nav-close-btn').click(function(){
        $('.hamburger-navigation').css('display','none'),
        $('.hamburger-nav-logo').css('display', 'block'),
        $('.hamburger-nav-close-btn').css('display','none')
    })
})


const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                    for(const counter of counters) {
      	              counterUp( counter, {
      		              duration: 3000,
      		              delay: 16,
      	              })
                    el.classList.add( 'is-visible' )
                  }
	    }
	} )
}

// observer
const IO = new IntersectionObserver( callback, { threshold: 1 } )

// First element to target
const el = document.querySelector( '.counter' )

// all numbers
const counters = document.querySelectorAll( '.counter' )
IO.observe( el )




