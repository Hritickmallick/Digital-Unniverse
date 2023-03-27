

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

$('.clients-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1200
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
        $(".search-menu").css('opacity','0'),
        $('.hidden').addClass("close-btn"),
        $('.hide').addClass("search-box");
    })

    $('.hidden').click(function(){
        $('.hidden').removeClass("close-btn"),
        $(".search-menu").css('opacity','1'),
        $('.hide').removeClass('search-box');
    })
})

$(document).ready(function(){
    $('.hamburger-menu').click(function(){
        $('.section-hamburger-menu').show(),
        $('.section-hamburger-menu').css('background-color','#0c0c0cf7'),
        $('.hamburger-close').addClass('animate__fadeInDown'),
        $(".hamburger-col-row-2").addClass('animate__slideInRight')
    });

    $('.hamburger-close').click(function(){
        $(".hamburger-col-row-2").removeClass('animate__slideInRight'),
        $('.section-hamburger-menu').css('background-color','transparent')
        $('.section-hamburger-menu').hide(1000)
    });

    $('.section-hamburger-menu').click(function(){
        $(".hamburger-col-row-2").removeClass('animate__slideInRight'),
        $('.section-hamburger-menu').css('background-color','transparent')
        $('.section-hamburger-menu').hide(1000)
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
      		              duration: 800,
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




