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
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(window).scroll(function() {
        $('.down').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInDown");
            }
        });
    });
    $(window).scroll(function() {
        $('.up').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
    $(window).scroll(function() {
        $('.left').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeftBig");
            }
        });
    });
    $(window).scroll(function() {
        $('.right').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
    $(window).scroll(function() {
        $('.bounce').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeIn");
            }
        });
    });
});
