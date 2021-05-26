$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        initialSlide: 1,
        arrows: false,
        autoplay: true,
        dots: false,
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
        arrows: false,
        slidesToShow: 1,
        dots: false,
        autoplay: true
    });
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

