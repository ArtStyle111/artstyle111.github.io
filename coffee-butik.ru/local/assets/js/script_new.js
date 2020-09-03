$(document).ready(function () {

    //---------- Fancybox -------------
    $('.fancybox-buttons').fancybox({
		helpers     : {
			overlay : {
				locked: false
			},
			buttons	: {}
		}
	});

	$('.fancybox_no_padding').fancybox({
		padding: 0,
		helpers     : {
			overlay : {
				locked: false
			},
			title:  null
		}
	});

	$('.fancybox_no_padding').fancybox({
		padding: 0,
		helpers     : {
			overlay : {
				locked: false
			},
			title:  null
		}
	});

	$('.fancybox').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

	$('.js-leaders-slider').slick({
        slidesToShow: 4,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

	$("#various2").fancybox({});

	$(".bx_item_detail .bx_bigimages_imgcontainer").click(function(){
		if ($(".bx_slider_scroller_container ul li").is(".bx_active")) {
			$('.bx_slider_scroller_container ul li.bx_active span.fancybox').click();
		} else {
			$(".bx_slider_scroller_container ul li").first().find("span.fancybox").click();
		}
	});

	$(".fancybox-buttons").fancybox();
	//---------- /Fancybox -------------





    // ----------- Кнопки прибавления и уменьешния кол-ва -----------
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input     = spinner.find('input[type="number"]'),
        btnUp     = spinner.find('.quantity-up'),
        btnDown   = spinner.find('.quantity-down'),
        min       = input.attr('min'),
        max       = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    // ----------- /Кнопки прибавления и уменьешния кол-ва -----------






    //-------- Маска на телефон --------
    $('[data-mask="phone"], #soa-property-3, #soa-property-14').inputmask("+7 (999) 999 99 99", {showMaskOnHover: false});
    BX.addCustomEvent('onAjaxSuccess', function(){
        $('[data-mask="phone"], #soa-property-3, #soa-property-14').inputmask("+7 (999) 999 99 99", {showMaskOnHover: false});
    });
    //-------- /Маска на телефон --------








    //----------- Форма регистрации по СМС -------------
    var sms_reg_form     = $('[data-form="reg_form"]');
    var sms_reg_form_btn = sms_reg_form.find('[data-form="submit"]');

    sms_reg_form_btn.on('click', function () {
        if (checkForm('[data-form="reg_form"]')) {
            ajaxForm('[data-form="reg_form"]', '/local/ajax/sms_registration.php');
        } else {
            showAllert('Пожалуйста, заполните указанные поля', true);
        }

        return false;
    });
    //----------- /Форма регистрации по СМС -------------








    //----------- Форма смены пароля по СМС -------------
    var sms_pwd_form     = $('[data-form="pwd_form"]');
    var sms_pwd_form_btn = sms_pwd_form.find('[data-form="submit"]');

    sms_pwd_form_btn.on('click', function () {
        if (checkForm('[data-form="pwd_form"]')) {
            ajaxForm('[data-form="pwd_form"]', '/local/ajax/sms_changepass.php');
        } else {
            showAllert('Пожалуйста, заполните указанные поля', true);
        }

        return false;
    });
    //----------- /Форма смены пароля по СМС -------------






    //----------- Форма Нашли дешевле -------------
    var cheap_link = $('[data-cheap="link"]');
    cheap_link.on('click', function(){
        var prod_name = $('.bx_item_detail[data-product]').attr('data-product');
        $('#cheap_form input[name="product"]').val(prod_name);
    });

    var cheap_form     = $('[data-form="cheap_form"]');
    var cheap_form_btn = cheap_form.find('[data-form="submit"]');

    cheap_form_btn.on('click', function () {
        if (checkForm('[data-form="cheap_form"]')) {
            ajaxForm('[data-form="cheap_form"]', '/local/ajax/cheap_form.php');
        } else {
            showAllert('Пожалуйста, заполните указанные поля', true);
        }

        return false;
    });
    //----------- /Форма Нашли дешевле -------------






    // ---------- Форма: Оставлиь вопросы? Страница товара --------------
    var form     = $('[data-form="detail-question_form"]');
    var form_btn = form.find('[data-form="submit"]');

    form_btn.on('click', function () {
        if (checkForm('[data-form="detail-question_form"]')) {
            ajaxForm('[data-form="detail-question_form"]', '/local/ajax/detail-question_form.php');

            $('.questionForm__title, [data-form="detail-question_form"] [data-form="submit"]').fadeOut(60 * 5);
            $(':input', '[data-form]')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');

            $.fancybox.close();

            setTimeout(function () {
                $('.questionForm__title').text('Спасибо! Ваша заявка успешно отправлена').fadeIn(60 * 5);
            }, 60 * 5);
        } else {
            showAllert('Пожалуйста, заполните указанные поля', true);
        }

        return false;
    });
    // ---------- /Форма: Оставлиь вопросы? Страница товара --------------










    //---------- ГОРОДА: Поиск города ------------
    initScroll();

    //------- Анимация появления ---------
    $(document).mouseup(function (e){
		var container = $('[data-ajax="city-search__result"]');
		if (!container.is(e.target) && container.has(e.target).length === 0){
			container.removeClass('active');
		}
	});
    $('[data-ajax="city-search"]').on('click', function(){
        if ($('.city__search-result').length > 0) {
            $('[data-ajax="city-search__result"]').addClass('active');
        }
    });
    //------- /Анимация появления ---------




    //---------- AJAX поиск ----------
    $('[data-ajax="city-search"]').on('keyup', function(){
        var city   = $(this).val();
        var page   = $(this).attr('data-page');
        var result = $('[data-ajax="city-search__result"]');


        if (city.length <= 1){
            result.removeClass('active');
            setTimeout(function(){
                $('.city__search-result').remove();
            }, 60 * 10);
        }else {
            setTimeout(function(){
                $.ajax({
                    url: '/local/ajax/city_search_result.php',
                    type: 'POST',
                    data: {city: city, page : page},
                }).done(function (data) {
                    console.log(data);

                    result.html(data);

                    setTimeout(function () {
                        result.addClass('active');
                    }, 60 * 5);

                    initScroll();
                });
            }, 60 * 5);
        }
    });
    //---------- /AJAX поиск ----------




    //--------- AJAX Выбор региона ----------
    $('[data-region]').on('click', function(){
        var region_id = $(this).attr('data-region');
        var page      = $(this).attr('data-page');
        var result    = $('[data-ajax="region-cities__result"]');

        result.removeClass('active');
        $('[data-region]').removeClass('active');
        $(this).addClass('active');

        setTimeout(function(){
            $.ajax({
               url: '/local/ajax/city_region_result.php',
               type: 'POST',
               data: {region_id : region_id, page : page}
            }).done(function(data){
                result.html(data);

                setTimeout(function(){
                    result.addClass('active');
                }, 60 * 10);

                initScroll();
            });
        }, 60 * 10)
    });
    //--------- /AJAX Выбор региона ----------


    $("[data-fancybox]").fancybox({
        padding: [0],
        helpers: {
            overlay: {
                css: {
                    'width' : '100%',
                    'border-radius' : '0',
                    'overflow' : 'unset',
                }
            }
        }
    });
    $('[data-fancybox]').on('click', function(){
       var close_btn = $('.js-sm-menu-close');
       if (close_btn.hasClass('active')){
            setTimeout(function(){
                close_btn.trigger('click');
            }, 60 * 10);
       }
    });
    //---------- /ГОРОДА: Поиск города ------------









    // ---------- HC sticky -------------
    if ($(window).width() > 991) {
        var rightSticky = new hcSticky('#bx-soa-total', {
            stickTo: '#bx-soa-order',
        });
        rightSticky.update({
            top: 70,
        });
    }
    // ---------- /HC sticky -------------
});




//---------- Внедрение полосы прокрутки ------------
function initScroll() {
    $("[data-scroll]").mCustomScrollbar({});
}
//---------- /Внедрение полосы прокрутки ------------





//---------- Функция отображения предупреждения -----------
function showAllert(mess, error){
    $('.form__allert').attr('data-error', error).text(mess).addClass('show');
    $('.form__text').addClass('notshow');
    setTimeout(function()
    {
        $('.form__allert').removeClass('show');
        $('.form__text').removeClass('notshow');
    }, 4500);
}
//---------- /Функция отображения предупреждения -----------








// ---------- Валидация ----------
function checkForm(form) {

    var input    = $(form + ' [data-form="required"]');
    var label    = $(form + ' [data-form="label"]');
    var checkbox = null;


    if ($(form + ' [data-form="check"]').length !== 0) {
        checkbox = $(form + ' [data-form="check"]');
    }


    var check  = false;
    var errors = [];


    input.each(function (i, elem) {

        if (!$(this).val()) {
            $(this).addClass('error');
            $(this).parent().find('[data-form="label"]').addClass('error');

            errors.push($(this));
        }
    });


    if (checkbox !== null) {
        if (!checkbox.prop('checked')) {
            checkbox.parent().addClass('error');
            errors.push(checkbox);
        }
    }

    setTimeout(function(){
        input.removeClass('error');
        label.removeClass('error');

        if (checkbox !== null) {
            checkbox.parent().removeClass('error');
        }
    }, 4500);


    if (errors.length == 0){
        check = true;
    }

    return check;
}
// ---------- /Валидация ----------







// =============== AJAX FORM ===============
function ajaxForm(form_data, form_url) {

    $.ajax({
        type: 'POST',
        url: form_url,
        dataType: 'json',
        data: $(form_data).serialize(),

        complete:function (data)
        {
            rs_obj = $.parseJSON(data.responseText);

            if (rs_obj.CODE == 'SMS_SEND')
            {
                $('[data-form="submit"]').val('Зарегестрироваться');
            }
            if (rs_obj.CODE == 'CHANGE_PASS')
            {
                $('[data-form="submit"]').val('Сменить пароль');
            }
            showAllert(rs_obj.MESSAGE, rs_obj.ERROR);

            if (rs_obj.CODE == 'USER_REG')
            {

                $('[data-form="submit"]').val('Запросить код по СМС');
            }


            setTimeout(function(){
                // $(':input', '[data-form]')
                // .not(':button, :submit, :reset, :hidden')
                // .val('')
                // .removeAttr('checked')
                // .removeAttr('selected');
            $.fancybox.close();

            }, 2500);
        },

        error: function ()
        {

        }
    });
}
// =============== /AJAX FORM ===============