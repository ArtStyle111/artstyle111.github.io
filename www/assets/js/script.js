$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        initialSlide: 1,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '0' 
                }
            }
        ]
         
    });  
    $('.slider__bg').slick({
        arrows: true,
        slidesToShow: 1,
        dots: false,
        autoplay: true
    });
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
          
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

