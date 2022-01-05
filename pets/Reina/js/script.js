var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 50 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});


var element = document.getElementById('header');

window.addEventListener('scroll', function () {
   if (window.scrollY > 100) {
        element.classList.add("header-change");
    } else {
        element.classList.remove("header-change");
    }
});

var logo = document.getElementById('main-logo');

window.addEventListener('scroll', function () {
   if (window.scrollY > 100) {
        logo.classList.add("remove-logo");
    } else {
        logo.classList.remove("remove-logo");
    }
});

var mobile = document.getElementById('mobile-logo');

window.addEventListener('scroll', function () {
   if (window.scrollY > 100) {
        mobile.classList.add("add-logo");
    } else {
        mobile.classList.remove("add-logo");
    }
});

// $(document).scroll(function () {
//         var y = $(this).scrollTop();
//         if (y > 300) {
//             $('.navbar-hidden').fadeIn();
//         } else {
//             $('.navbar-hidden').fadeOut();
//         }
//     });
$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
