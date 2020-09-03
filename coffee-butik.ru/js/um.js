$(document).ready(function () {


    // $("#various2").fancybox({});


    $('.data1161').click(function () {
        $('.tabds').hide();
        $('.data1161').removeClass('act784');
        $(this).addClass('act784');
        $($(this).attr('href')).show();
    });

    $('.razv4').click(function () {
        if (!$(this).hasClass('rever')) {
            k = $(this).parent();
            $('.data-hid', k).show();
            $(this).addClass('rever');
            $(this).text('Свернуть');
        } else {
            k = $(this).parent();
            $('.data-hid', k).hide();
            $(this).removeClass('rever');
            $(this).text('Развернуть');
        }
    });


//---------- Скрытие пустых теговых блоков в каталоге ----------
    $('.tags_link_panel p').each(function (i, elem) {
        if ($(elem).find('[data-tag]').length == 0) {
            $(this).fadeOut();
        }
    });
//---------- /Скрытие пустых теговых блоков в каталоге ----------


    // ----------- Настройка высоты блоков с товарами в каталоге -----------
    var url_path = location.pathname;
    if (url_path.indexOf('katalog') !== -1) {
        var max_height = Math.max.apply(null, $(".bx_catalog_item_container .b_item__body").map(function () {
            return $(this).height();
        }).get());
        $('.bx_catalog_item_container .b_item__body').css({'height': max_height});

        var max_height = Math.max.apply(null, $(".bx_catalog_item_container .item_bottom_block").map(function () {
            return $(this).height();
        }).get());
        $('.bx_catalog_item_container .item_bottom_block').css({'height': max_height});
    }
    // ----------- /Настройка высоты блоков с товарами в каталоге -----------


    // --------------- Подарки в корзине ----------------

    function setDissabledPresents() {
        $('#basket_items tr[data-item-name]').each(function (i, elem) {
            var b_item_price = parseFloat($(this).attr('data-item-price'));
            var b_item_count = $(this).find('.custom');
            if (b_item_price == 0) {
                b_item_count.addClass('dissabled');
            }
        });
    }

    setDissabledPresents();
    BX.addCustomEvent('onAjaxSuccess', function () {
        setDissabledPresents();
    });


    function setGiftInBasket()
    {
        var small_gift_sum = 4000;
        var big_gift_sum   = 10000;

        if (location.hostname === 'www.coffee-butik.ru')
        {
            small_gift_sum = 5000;
        }

        var all_sum = parseFloat($('#allSum_FORMATED').text().replace(' руб.', '').replace(' ', ''));
        var need_sum_small = $('[data-gift="need_sum_small"]');
        var need_sum_big = $('[data-gift="need_sum_big"]');

        var no_gift_small = $('[data-gift="no-gift_small"]');
        var yes_gift_small = $('[data-gift="yes-gift_small"]');


        var no_gift_big = $('[data-gift="no-gift_big"]');
        var yes_gift_big = $('[data-gift="yes-gift_big"]');


        // ---------- Маленький подарок ----------
        $('[data-gift="section-gift__small"]').addClass('show');
        if (all_sum < small_gift_sum)
        {
            need_sum_small.text(XFormatPrice(small_gift_sum - all_sum));
            no_gift_small.addClass('show');
            yes_gift_small.removeClass('show');


            $('[data-gift="section-gift__small"]').parent().fadeIn(500);
            $('[data-gift="section-gift__big"]').parent().fadeOut(500);
        }
        else if (all_sum >= small_gift_sum && all_sum < big_gift_sum)
        {
            no_gift_small.removeClass('show');
            yes_gift_small.addClass('show');


            $('[data-gift="section-gift__small"]').parent().fadeIn(500);

        }
        // ---------- /Маленький подарок ----------



        // --------- Большой подарок -----------
        if (all_sum >= small_gift_sum)
        {
            $('[data-gift="section-gift__big"]').addClass('show');

            if (all_sum < big_gift_sum)
            {
                need_sum_big.text(XFormatPrice(big_gift_sum - all_sum));
                no_gift_big.addClass('show');
                yes_gift_big.removeClass('show');

                $('[data-gift="section-gift__big"]').parent().fadeIn(500);

            }
            else if (all_sum >= big_gift_sum)
            {
                no_gift_big.removeClass('show');
                yes_gift_big.addClass('show');

                $('[data-gift="section-gift__small"]').parent().fadeOut(500);
                $('[data-gift="section-gift__big"]').parent().fadeIn(500);

            }
        }
        else
        {
            $('[data-gift="section-gift__big"]').removeClass('show');
        }
        // --------- /Большой подарок -----------
    }


    setGiftInBasket();
    BX.addCustomEvent('onAjaxSuccess', function () {
        setGiftInBasket();
    });
    // --------------- /Подарки в корзине ----------------


    // ===== Округление числа ========
    function XFormatPrice(_number) {
        var decimal       = 0;
        var separator     = ' ';
        var decpoint      = '.';
        var format_string = '# руб.';

        var r     = parseFloat(_number)
        var exp10 = Math.pow(10, decimal);// приводим к правильному множителю

        r  = Math.round(r * exp10) / exp10;// округляем до необходимого числа знаков после запятой
        rr = Number(r).toFixed(decimal).toString().split('.');
        b  = rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1" + separator);
        r  = (rr[1] ? b + decpoint + rr[1] : b);

        return format_string.replace('#', r);
    }

//===== /Округление числа ========


    // ------ Спойлер с доставкой на детальной странице с товаром -------
    $('[data-collapse="true"]').collapsible();
    $('[data-collapse="header"]').on('click', function () {
        $(this).toggleClass('open');
    });
    // ------ /Спойлер с доставкой на детальной странице с товаром -------


    // --------- Добавление текста с описанием заказа товара при клике "Купить" в catalog.element ---------
    $('.item_buttons_counter_block .bx_cart, .bx_bt_button').on('click', function () {
        if ($(this).parent().parent().attr('data-order') === 'true')
        {
            setTimeout(function () {
                $('.popup-window-content').append('<div class="b_cart__order_mess"><p>Обращаем ваше внимание, что данный товар является заказной позицией. <br> Срок ожидания составляет от 30 до 90 дней. <br> Требуется 100% предоплата</p></div>');
            }, 1300);
        }
    });
    // --------- /Добавление текста с описанием заказа товара при клике "Купит" в catalog.element ---------


});


//------------ Обновление малой корзины в шапке -----------
$(function () {

    updateMiniBasket();
    BX.addCustomEvent('onAjaxSuccess', function () {
        updateMiniBasket();
    });

});

function updateMiniBasket() {
    setTimeout(function(){
        $.ajax({
            url: '/ajax/update_small_basket.php',
            success: function (data) {
                $('#small_basket_header').html(data);
            }
        });
    }, 60 * 60);
}

//------------ /Обновление малой корзины в шапке -----------


$(function () {
    if (screen.width > 744) {
        setTimeout(function () {
            for (i = 0; i < 5; i++) {
                ht = 0;
                $('.el78[atra="' + i + '"]').each(function () {
                    if ($(this).height() > ht) {
                        ht = $(this).height();
                    }
                });
                $('.el78[atra="' + i + '"]').css('height', ht + 'px');
            }
        }, 1500);
    }

    $('.z78654').click(function () {
        if ($('.srch41').val().length > 2) {
            location.href = '/search/?q=' + $('.srch41').val();
        }
    })
});


function searchMake() {
    if ($('.row19854').hasClass('bl405')) {
        $('.row19854').removeClass('bl405');
    } else {
        $('.row19854').addClass('bl405');
    }
}


$(function () {
    $('.slider_main2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="ar-left4"></div>',
        nextArrow: '<div class="ar-right4"></div>',
        dots: true,
        speed: 800,
        infinite: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false

                }
            },
        ]
    });
    $('.slider_main2').show();


    if (screen.width < 731) {
        $('.js-goods-slider .delim154').remove();
        $('.n-leaders-slider__slide').each(function () {
            $(this).replaceWith($(this).html());
        });
        $('.js-goods-slider .bx_catalog_item').wrap('<div class="n-leaders-slider__slide"></div>');
    }


    $('.js-goods-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="ar-left4"></div>',
        nextArrow: '<div class="ar-right4"></div>',
        // dots: true,
        speed: 800,
        infinite: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    // dots: true,
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                    arrows: true

                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true

                }
            }]
    });


    $('.js-goods-slider').show();

    if (screen.width > 730) {
        $('.js-goods-slider .slick-arrow').on('click', function () {
            $('.js-goods-slider').slick('refresh');
        });
    }

    min = 0;
    $('.js-goods-slider .bx_catalog_item_title').each(function () {
        if (min < $(this).height()) {
            min = $(this).height();
        }
    });
    console.log(min);
    if (min > 0) {
        $('.js-goods-slider .bx_catalog_item_title').css('height', min + 'px');
    }


    $('.brand_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<div class="ar-left4"></div>',
        nextArrow: '<div class="ar-right4"></div>',
        arrows: true,
        //dots: true,
        speed: 800,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    arrows: false,
                    //
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    arrows: true

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 3,
                    dots: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: false,

                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    dots: false,

                }
            }
        ]
    });


    $('.brand_slider').show();


    if (location.pathname == '/') {
        setTimeout(function () {
            $.ajax({
                url: '/include/certs_ajax.php?a=' + Math.random(),
                success: function (data) {
                    $('.sert19849').html(data);
                    $('.cert2_slider').slick({
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        prevArrow: '<div class="ar-left4"></div>',
                        nextArrow: '<div class="ar-right4"></div>',
                        arrows: true,
                        //dots: true,
                        speed: 800,
                        infinite: true,
                        responsive: [
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 5,
                                    arrows: false,
                                    //
                                }
                            },
                            {
                                breakpoint: 1000,
                                settings: {
                                    slidesToShow: 4,
                                    arrows: true

                                }
                            },
                            {
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 3,

                                }
                            },
                            {
                                breakpoint: 730,
                                settings: {
                                    slidesToShow: 3,
                                    dots: false,

                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 2,
                                    dots: false,

                                }
                            },
                            {
                                breakpoint: 400,
                                settings: {
                                    slidesToShow: 1,
                                    dots: false,

                                }
                            }
                        ]
                    });
                }
            });
        }, 2000);
    }

    if (screen.width <= 530) {
        $('.mega_bl_right .head1791').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="ar-left4"></div>',
            nextArrow: '<div class="ar-right4"></div>',
            arrows: true,
            // dots: true,
            speed: 800,
            infinite: true,
        });
    }

    $('.form2536').keyup(function () {
        $(this).removeClass('er187');
        $('.er1987').hide();
    });

    $('.form19547').click(function () {
        ok = true;
        $('.form2536').each(function () {
            if ($(this).val().trim() == '') {
                $(this).addClass('er187');
                $('.er1987').show();
                ok = false;
            }
        });
        if (ok) {
            $.ajax({
                url: '/include/send_main_page.php',
                data: $('#form96321').serialize(),
                success: function (data) {
                    console.log(data);
                    $('#form96321')[0].reset();
                    $('.suc14857').show();
                }
            });
        }
    });


});
$(function () {
    $('.atr').each(function () {
        atr = $(this).attr('atr');
        $(this).attr('href', atr);
    });

    $('.c_props').each(function () {
        var mh = 0;
        var child_td = $(this).children('td');
        child_td.each(function () {
            var h_block = parseInt($(this).height());
            if (h_block > mh) {
                mh = h_block;
            }
            ;
        });
        $(this).height(mh + 20);
    });
    $('.vklad2').click(function () {
        $('.vklad2').removeClass('activ');
        $(this).addClass('activ');
        $('.inner-info').hide();
        atr = $(this).attr('atr');
        $('#' + atr).show();
    });
});

$(function () {

    setSubmenusPosition();
    $(window).resize(function () {
        setSubmenusPosition();
    });

    $('.js-sm-menu-screen > a').click(function (e) {
        e.preventDefault();
        $('.sm-menu__screen').removeClass('active');
        $($(this).attr('href')).addClass('active');
    });

    $('.js-has-submenu > a').click(function (e) {
        e.preventDefault();
        $(this).closest('.sm-menu__menu').addClass('sm-menu__menu_inner-active');
        $(this).parent().find('.sm-menu__menu').addClass('active');

    });
    $('.js-submenu-back > a').click(function (e) {
        e.preventDefault();
        $(this).closest('.sm-menu__menu').removeClass('active');
        $(this).closest('.has-submenu').closest('.sm-menu__menu').removeClass('sm-menu__menu_inner-active');
    });

    $('.js-collapse').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('.sm-menu__collapse-content').toggleClass('active');
    });

    $('.js-sm-menu').click(function (e) {
        e.preventDefault();
        $('.sm-menu, .sm-menu-backdrop').addClass('active');
    });
    $('.js-sm-menu-close').click(function (e) {
        e.preventDefault();
        $('.sm-menu, .sm-menu-backdrop').removeClass('active');
    });


    $(window).scroll(function () {

        var scrollTop = $('html, body').scrollTop(),
            switchPos = $('.n-header__menu-wrap').offset().top + 50;
        if (scrollTop > switchPos) {
            fixedHeader(true);
        } else {
            fixedHeader(false);
        }

    });

});

function fixedHeader(show) {
    if (show) {
        $('.n-header-fixed').addClass('n-header-fixed_active');
        $('.search-form-header').appendTo("#n-header-fixed__search");
    } else {
        $('.n-header-fixed').removeClass('n-header-fixed_active');
        $('.search-form-header').appendTo("#n-header-search");
    }
}

function setSubmenusPosition() {
    var menuPosL = $('.header-menu').offset().left,
        menuWidth = $('.header-menu').outerWidth();

    $.each($('.header-menu__submenu'), function (k, v) {
        $(v).css('left', '');
        var submenuPosL = $(v).offset().left,
            submenuW = $(v).outerWidth();

        var delta = (parseInt(submenuPosL) + submenuW) - (parseInt(menuPosL) + menuWidth);
        if (delta > 0) {
            $(v).css('left', -delta + parseInt($(v).css('left')));
        }

    });

}


function ecommerceAdd(product, price) {
    if (typeof product == 'undefined' || typeof price == 'undefined')
        return;
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': 'addToCart',
            "ecommerce": {
                'currencyCode': 'RUB',
                "add": {
                    "products": [{
                        "id": product.id,
                        "name": product.name,
                        "price": price.VALUE,
                        "quantity": 1
                    }]
                }
            }
        });
    }
    /*if (typeof ga !== 'undefined') {
        ga('ecommerce:addItem', {
            'id': new Date().getTime(),
            'name': product.name,
            'sku': product.id,
            'price': price.VALUE,
            'quantity': 1
        });

        ga('ecommerce:send');
    }*/
    return true;
}


$(function () {
    $('a.compare').click(function () {
        if (!$(this).hasClass('del')) {
            obPopupWin = BX.PopupWindowManager.create('CatalogSectionBasket2', null, {
                autoHide: false,
                offsetLeft: 0,
                offsetTop: 0,
                overlay: true,
                closeByEsc: true,
                titleBar: true,
                closeIcon: {
                    top: '10px',
                    right: '10px'
                }
            });
            id = $(this).attr('product-id');
            str = '';
            $.ajax({
                url: '/include/good_ajax.php?id=' + id,
                async: false,
                success: function (data) {
                    str = data;
                }
            });
            obPopupWin.setTitleBar('Товар добавлен в сравнение');
            obPopupWin.setContent(str);
            obPopupWin.setButtons([
                new BX.UI.Button({
                    text: "Перейти к сравнению",
                    className: "bx_medium bx_bt_button",
                    onclick: function (btn, event) {
                        location.href = '/katalog/compare/';
                    },
                }),
                new BX.UI.Button({
                    text: "Закрыть",
                    className: "bx_medium bx_bt_button",
                    onclick: function (btn, event) {
                        obPopupWin.close();
                    },
                })
            ]);
            obPopupWin.show();
        }
    });
});

$(function () {
    //  /feedback/
    $('form[name=FEEDBACK_FORM] [type="text"], form[name=FEEDBACK_FORM] [type="email"]').keyup(function () {
        $(this).removeClass('has-error');
    });
    $("form[name=FEEDBACK_FORM]").submit(function (event) {
        var canSend = true;
        event.preventDefault(); //Г§Г ГЇГ°ГҐГІ Г®ГІГЇГ°Г ГўГЄГЁ ГґГ®Г°Г¬Г» Г®ГЎГ»Г·Г­Г»Г¬ Г¬ГҐГІГ®Г¤Г®Г¬ (Г± ГЇГҐГ°ГҐГ§Г ГЈГ°ГіГ§ГЄГ®Г©)

        if (!$("input[name=feedback_name]").val()) {
            canSend = false;
            $("input[name=feedback_name]").addClass('has-error');
        }
        // console.log(canSend);
        if (!$("input[name=feedback_email]").val() || !isValidEmailAddress($("input[name=feedback_email]").val())) {
            canSend = false;
            $("input[name=feedback_email]").addClass('has-error');
        }
        // console.log(canSend);
        if (!$("input[name=feedback_phone]").val()) {
            canSend = false;
            $("input[name=feedback_phone]").addClass('has-error');
        }
        // console.log(canSend);
        if (!$("input[name=feedback_text]").val()) {
            canSend = false;
            $("input[name=feedback_text]").addClass('has-error');
        }

        if (canSend) {
            $(this).find('input[name=feedback_submit]').val("Y");

            var data = $(this).serialize(); // Г±ГҐГ°ГЁГ Г«ГЁГ§Г Г¶ГЁГї ГўГ±ГҐГµ ГЇГ®Г«ГҐГ© ГґГ®Г°Г¬Г»
            //Г±ГґГ®Г°Г¬ГЁГ°Г®ГўГ Г­Г­Г»ГҐ ГІГҐГ¬ ГЁГ«ГЁ ГЁГ­Г»Г¬ Г±ГЇГ®Г±Г®ГЎГ®Г¬ Г¤Г Г­Г­Г»ГҐ Г¬Г®Г¦Г­Г® ГЇГҐГ°ГҐГ¤Г ГўГ ГІГј Гў $.ajax
            $.ajax({
                type: "POST",
                url: "/include/send_request.php",
                data: data,
                success: function (data) {
                    if (data.indexOf('Error') != -1) {
                        $("form[name=FEEDBACK_FORM]").find('.mess-result').html('<div class="alert alert-danger"><b>Ошибка :</b> ' + data + "</div>");
                    } else {
                        $("form[name=FEEDBACK_FORM]").trigger('reset').find('.mess-result').html('<div class="alert alert-success"><b>Заявка успешно отправлена</div>');
                    }
                }
            });
        } else {
            //$("form[name=FEEDBACK_FORM]").find('.mess-result').html('<div class="alert alert-danger">' + errorMessage + "</div>");
        }
    });

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

    // END  /feedback/


    // Hide and Show more features

    if ($(window).width() < 480) {
        var featItems = $('.advantage-feat:nth-child(n+4)');
        var servItems = $('.service-item:nth-child(n+4)');
        var seeMore = $('.btn-see-more');

        featItems.hide();
        servItems.hide();

        seeMore.click(function () {
            featItems.show();
            servItems.show();
            seeMore.hide();
        });
    }





      $('._more').on('click', function () {
          let text = $(this).attr('data-text');
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).children('span').text(text);
        } else {
            $(this).parent().addClass('active');
            $(this).children('span').text('Скрыть');
        }
      });

      $('._moreReviews').on('click', function () {
          $(this).toggleClass('active');
          if ($(this).parent().find('.api-reviews-list').hasClass('active')) {
              $(this).parent().find('.api-reviews-list').removeClass('active');
              $(this).children('span').text('Смотреть больше отзывов');
          } else {
              $(this).parent().find('.api-reviews-list').addClass('active');
              $(this).children('span').text('Скрыть');
          }

      })
      if ($(window).width() < 768 ) {
          $('._slider1').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              prevArrow: '<div class="navArrows__item slick-prev"></div>',
              nextArrow: '<div class="navArrows__item slick-next"></div>',
          })
      }


    if ($(window).width() < 1200) {
        $('[data-add-elem="pc"] a').appendTo('[data-add-elem="mobile"]');
        $('[data-delivery="pc"] .delivery-block').appendTo('[data-delivery="mobile"]');
    }
});