$(document).ready(function () {

    $(document).on('keyup', '#search-input', function () {
        var val = $(this).val();
        val != "" ? $(this).addClass('not-empty') : $(this).removeClass('not-empty');
    });

    $(document).on('click', '.shop-header .search-box button.submit', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('activated')) {
            $(this).addClass('activated');
            $('.menu-catalog').addClass('hidden');
            $('.menu-search .search-inner').removeClass('hidden');

            /*
            $('.mobile-menu').addClass('hidden');
            $('.search-box .menu-catalog').addClass('hidden');
            $('.shop-header .search-box form.menu-search').removeClass('hidden');
            $('.search-box').addClass('visible');
            */

        }
    });

    $(document).on('mouseleave', '.submenu-overlay, .catalog .content .product, .product-in-wishlist', function () {
        $(this).addClass('disabled');
        var that = $(this);
        setTimeout(function () {
            that.removeClass('disabled');
        }, 1000);
    });

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    mainClass: 'mfp-fade',
    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        $('.table-popup-form').show();
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

    $(document).on('click', '.shop-header .search-box button.reset', function (event) {
        $('.shop-header .search-box button.submit').removeClass('activated');
        $('.menu-catalog').removeClass('hidden');
        $('.menu-search .search-inner').addClass('hidden');
        $('#search-input').removeClass('not-empty');
        /*
        $('.search-box .menu-catalog').removeClass('hidden');
        $('.mobile-menu').removeClass('hidden');
        $('.shop-header .search-box form.menu-search').addClass('hidden');
        $('.search-box').removeClass('visible');
        */
    });

    $('.front-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        appendDots: '.front-pagination',
    });

    var product_slider = $('.featured-slider');
    product_slider.slick({
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        prevArrow: '.product-slider .arr-left',
        nextArrow: '.product-slider .arr-right',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ],
    });

  var tab_slider = $('.tab-slider');
  var arrows = $('#tabs .arrows')
  var numSlick = 0;

  if($('.tab-slider').length) {
    tab_slider.each( function() {
      numSlick++;
      $(this).addClass('slider-' + numSlick).slick({
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        prevArrow: '.product-slider .arr-left_' + numSlick,
        nextArrow: '.product-slider .arr-right_' + numSlick,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
            }
          }
        ],
      });
    });
  }
  $( function() {
    $( "#tabs" ).tabs();
  });

  $(".arrows").hide();
  $(".arrows:eq(0)").show();

  $(document).on( 'click', "#ui-id-1", function () {
    $(".arrows").hide();
    $(".arr-left_1").parent().show();
  });
  $(document).on('click', "#ui-id-2", function () {
    $(".arrows").hide();
    $(".arr-left_2").parent().show();
  });
  $(document).on('click', "#ui-id-3", function () {
    $(".arrows").hide();
    $(".arr-left_3").parent().show();
  });


    var initiated = false;
    $(window).on('load resize', function () {
        if ($(this).width() <= 576) {
            if (!initiated) {
                $('.article-mobile-slider').slick({
                    dots: false,
                    arrows: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    variableWidth: true,
                });
                initiated = true;
            }
        }
        else {
            if (initiated) {
                console.log(1);
                $('.article-mobile-slider').slick('unslick');
                initiated = false;
            }
        }
    });

    var set = $('.product-slider').find('.buttons button.checked').attr('data-set');
    if (set !== undefined) {
        $('.featured-slider').slick('slickFilter', '[data-' + set + ']');
        toggleSlideArrows();
    }
  $(document).on('click', '.product-slider .buttons button:not(.checked)', function () {

    $(this).addClass('checked').siblings().removeClass('checked');
    $('.featured-slider').slick('slickUnfilter');

    var set = $(this).attr('data-set');
    $('.featured-slider').slick('slickFilter', '[data-' + set + ']');
    //$('.featured-slider').slick('slickSetOption', 'refresh', true, true);

    toggleSlideArrows();

  });


    function toggleSlideArrows() {
        if ($(document).find('.featured-slider .product').length <= 4) {
            $('.product-slider .arrows').hide()
        }
        else {
            $('.product-slider .arrows').show()
        }
    }


    $('.offers-slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        prevArrow: '.front-offers .arr-left',
        nextArrow: '.front-offers .arr-right',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });


    if ($('.price-slider').length) {

        /*var price = $('.price-slider'),
            min = price.attr('data-min'),
            max = price.attr('data-max'),
            min_input = $('#min-input'),
            max_input = $('#max-input');
        price.ionRangeSlider({
            type: "double",
            skin: 'modern',
            min: min,
            max: max,
            from: min,
            to: max,
            onChange: function(data){
                min_input.val(data.from);
                max_input.val(data.to);
            },
        });
        var price_instance = price.data("ionRangeSlider");
        $(document).on('keyup', min_input, function(){
            var value = parseInt( min_input.val() );
            console.log(value);
            price_instance.update({
                from: value,
            });
        });
        $(document).on('keyup', max_input, function(){
            var value = parseInt( max_input.val() );
            price_instance.update({
                to: value,
            });
        });*/
    }

    $(document).on('click', '.product .hover .size-block .size button', function (event) {
        event.preventDefault();
        $(this).closest('.size-blocks').find('button').removeClass('active');
        $(this).addClass('active');
    });


    $(document).on('click', '.cart .cart-controls .coupon .coupon-link', function (event) {
        event.preventDefault();
        $(this).next().stop().toggleClass('active');
    });
    /*$(document).on('click', '.cart .cart-controls .coupon button.submit', function(event){
        //$(this).parent().addClass('valid');
    });*/
    $(document).on('click', '.cart .cart-controls .coupon input.coupon-input', function (event) {
        $(this).parent().removeClass('valid');
    });

    $(document).on('click', '[data-quantity] [data-action]', function (event) {
        event.preventDefault();
        var FORM = $(this).closest('[data-quantity]'),
            CLASS = $(this).attr('class'),
            MINUS_BUTTON = FORM.find('.minus'),
            INPUT = FORM.find('input[data-q-input]'),
            INPUT_VAL = parseInt(INPUT.val());


        if (CLASS == 'plus') {
            INPUT.val(INPUT_VAL + 1);
            MINUS_BUTTON.prop('disabled', false);
        }
        else {
            if (INPUT_VAL <= 1) return false;

            INPUT.val(INPUT_VAL - 1);
            if (INPUT.val() == 1)
                MINUS_BUTTON.prop('disabled', true);
        }
        INPUT.trigger('change');
    });
    $(document).on('click', '[data-remove-cart-row]', function (event) {
        event.preventDefault();
        $(this).closest('.cart .cart-table .cart-tr').fadeOut(500, function () {
            $(this).remove();
        });

    });


    $(document).on('click', '.language span:not(.active)', function () {
        var index = $(this).index(),
            lang_block = $(this).closest('.hover');
        $(this).addClass('active').siblings().removeClass('active');
        lang_block.find('.size-blocks .outer').eq(index).addClass('active').siblings().removeClass('active');
    });

    $(document).on('click', '[data-clear-favourite]', function (event) {
        event.preventDefault();
        $('.favourite-page .row .product, .favourite-page .product-pagination').fadeOut(500, function () {
            $(this).remove();
        });
        setTimeout(function () {

            $('#showifempty').show();
            $('body').addClass('footer-to-bottom');

        }, 400);
    });


    $('.product-detail .card-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        prevArrow: '.product-detail .gallery .prev-arr',
        nextArrow: '.product-detail .gallery .next-arr',
        asNavFor: '.product-detail .card-slider-sub'
    });
    $('.product-detail .card-slider-sub').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.product-detail .card-slider-main',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });
    $('.color-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.color-select .prev-arr',
        nextArrow: '.color-select .next-arr',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: false,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $(document).on('click', '.product-detail .color-select .slide', function () {
        $(this).addClass('checked').siblings().removeClass('checked');
    });
    $(document).on('click', '.product-detail .size-select .toggler, #preview .size-select .toggler, #fast-purchase .size-select .toggler', function (e) {
        $(this).toggleClass('active');
    });
    $(document).on('click', '.product-detail .size-select .hover button, #preview .size-select .hover button, #fast-purchase .size-select .hover button', function (event) {
        var input = $(this).closest('.size-select').find('.toggler span'),
            hidden = $(this).closest('.size-blocks').find('input[name="size-selected"]');

        $(this).closest('.size-blocks').find('button').removeClass('active');
        $(this).addClass('active');

        $(this).closest('.size-select').find('.toggler').removeClass('active');
        input.text($(this).text());

        if (hidden.length) {
            hidden.val($(this).text());
        }


    });

    $(document).on('click', '[data-fast-purchase]', function () {
        var size = $('.size-blocks input[name="size-selected"]').val();
        if (size) {
            $('#fast-purchase .size-select .toggler span').text(size);
        }
        ;
    });

    $(document).on('click', '.a2f a', function (event) {
        event.preventDefault();
        $(this).toggleClass('loved');
        if ($(this).hasClass('loved')) $(this).text('В избранном');
        else $(this).text('В избранное');
    });


    $('#showfast').fancybox({
        touch: false,
        beforeShow: function () {

            $('#preview .card-slider-main').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '#preview .gallery .prev-arr',
                nextArrow: '#preview .gallery .next-arr',
                asNavFor: '.card-slider-sub'
            });
            $('#preview .card-slider-sub').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '#preview .card-slider-main',
                dots: false,
                arrows: false,
                focusOnSelect: true
            });


        },
        afterClose: function () {
            $('#preview .card-slider-main').slick('unslick');
            $('#preview .card-slider-sub').slick('unslick');
        }
    });

    $('#showcart').fancybox({
        touch: false,
        beforeShow: function () {

            setTimeout(function () {
                $('.popup-featured-slider').slick({
                    dots: false,
                    arrows: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 3,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                variableWidth: true,
                            }
                        }
                    ],
                    prevArrow: '#a2csuccess .product-slider .arr-left',
                    nextArrow: '#a2csuccess .product-slider .arr-right',
                });
            }, 10);


        },
        afterClose: function () {
            $('.popup-featured-slider').slick('unslick');
        }

    });

    $(document).on('click', '#filter-heading', function () {
        $(this).toggleClass('active');
        $('.filter-outer').slideToggle();
    });


    $('.star-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        variableWidth: true,
        prevArrow: '.stars .arr-left',
        nextArrow: '.stars .arr-right',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });

    $(document).on('click', '.show-comment-form', function (event) {
        event.preventDefault();
        $('.reviews .comment-form').stop().slideToggle();

    });
    $(document).on('click', '.reviews .comment-form .inner .review-heading .close-toggle-form button', function (event) {
        event.preventDefault();
        $('.reviews .comment-form').stop().slideUp();
    });
    if ($('.dropzone-area').length) {
        var reviewDZ = new Dropzone(".dropzone-area", {
            url: "/index.php?route=product/product/addReviewFiles",
            paramName: 'review',
            maxFiles: 5,
            acceptedFiles: "image/*",
            uploadMultiple: true,
            createImageThumbnails: false,
            previewTemplate: "<div></div>",
            autoProcessQueue: false,
            parallelUploads: 10
        });
        reviewDZ.on("addedfile", function (file, url) {
            var files_amount = this.files.length;
            $('.reviews .comment-form .inner .form-controls .form-file .upload-counter span').html('Максимальное количество<br>фотографий - 5');
            $('.reviews .comment-form .inner .form-controls .form-file .input-file span').text(files_amount + ' / 5');
        });


        $(document).on('change', '#reviews form .input-file input', function () {

            var files = $(this)[0].files;

            if (files.length) {
                $('.reviews .comment-form .inner .form-controls .form-file .upload-counter span').html('Максимальное количество<br>фотографий - 5');
                $('.reviews .comment-form .inner .form-controls .form-file .input-file span').text(files.length + ' / 5');
            }
            /*
            else
            {
                $('.reviews .comment-form .inner .form-controls .form-file .upload-counter span').html('0 фото');
                $('.reviews .comment-form .inner .form-controls .form-file .input-file span').text('ЗАГРУЗИТЬ ФОТО');
            }
            */


        });

        $(document).on('click', '#send-review', function () {
            //reviewDZ.processQueue();

            $(".error").removeClass('error');

            var rating = $("#review-form #rating-input .selected").length;
            if (rating == 0)
                rating = 1;
            $("#review-rating").val(rating);

            $.ajax({
                url: 'index.php?route=product/product/write',
                type: 'post',
                data: $("#review-form input, #review-form textarea"),
                dataType: 'json',
                success: function (json) {
                    if (!json.success) {
                        for (i in json) {
                            var element = $('#review-' + i);
                            element.parent().parent().addClass('error');
                        }
                    }
                    else {
                        reviewDZ.on("sending", function (file, xhr, formData) {
                            formData.append("review_id", json.success);
                        });

                        reviewDZ.processQueue();

                        $("#review-thanks").trigger('click');
                        $(".show-comment-form").trigger('click');
                        $('#review-form')[0].reset();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                }
            });

            return false;
        })

    }

    $('#rating-input div').on('mouseover', function () {
        var onStar = parseInt($(this).attr('data-value'), 10);
        $(this).removeClass('selected').siblings().removeClass('selected');
        $(this).parent().children('div').each(function (e) {
            if (e < onStar) {
                $(this).removeClass('disabled');
            }
            else {
                $(this).addClass('disabled');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('div').each(function (e) {
            if (e != 0) $(this).addClass('disabled');
        });
    });

    $('#rating-input div').on('click', function () {
        var onStar = parseInt($(this).attr('data-value'), 10);
        var stars = $(this).parent().children('div');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).addClass('disabled');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).removeClass('disabled').addClass('selected');
        }

        $('#rating-input').addClass('chosen');

    });


    $(document).on('click', '[data-load-elements]', function (event) {
        event.preventDefault();
        var that = $(this);
        var block = $(this).closest('[data-ajax-container]').find('[data-ajax-block]');
        // AJAX Делает append новых элементв (с классом item-loaded) в .reviews .reviews-list а дальше анимация

        var elements_count = block.find('.item-loaded').length;
        if (elements_count) {
            that.addClass('attaching');
            block.find('.item-loaded').each(function (index) {
                $(this).delay(400 * index).fadeIn(1000, function () {
                    $(this).removeClass('item-loaded');

                    if (!--elements_count) {
                        if (!block.find('.item-loaded').length) that.hide()
                        else that.removeClass('attaching');
                    }
                });
            });
        }
    });

    /*$(document).on('click', '[data-load-elements-reviews]', function(event){
        event.preventDefault();
        var that = $(this);
        var block = $(this).closest('[data-ajax-container]').find('[data-ajax-block]');
        // AJAX Делает append новых элементв (с классом item-loaded) в .reviews .reviews-list а дальше анимация

        var elements_count = block.find('.item-loaded').length;
        if(elements_count)
        {
            that.addClass('attaching');
            block.find('.item-loaded').each(function(index){
                $(this).delay(400*index).fadeIn(1000, function(){
                    $(this).removeClass('item-loaded');

                    if (!--elements_count)
                    {
                        if( !block.find('.item-loaded').length ) {
                            //that.show();that.hide()
                            that.show();
                            that.removeClass('attaching');
                        }
                        else {
                            that.show();
                            that.removeClass('attaching');
                        }
                    }
                });
            });
        }
    });*/

    $(document).on('click', '.delivery-page .heading .delivery-controls button:not(.active)', function () {
        var tabIndex = $(this).attr('data-tab-index');
        $(document).find('[data-tab]').hide();
        $(document).find('[data-tab=' + tabIndex + ']').fadeIn();
        $(this).addClass('active').parent().siblings().find('button').removeClass('active');
    });


    $(".toggle_mnu").click(function () {
        $(".toggle_mnu .sandwich").toggleClass("active");
        if ($('.toggle_mnu .sandwich').hasClass('active')) {
            $('#mobile-menu').animate({'top': 0});
        }
        else {
            $('#mobile-menu').animate({'top': '-100%'});
        }
    });
    $(document).on('click', '#mobile-menu .close-mobile-menu button', function (event) {
        event.preventDefault();
        $(".toggle_mnu:first").trigger('click');
    });


    $(document).on('click', '#mobile-menu .mobile-menu-catalog > ul > li.parent  .toggler', function (event) {
        event.stopPropagation();
        var container_LI = $(this).closest('.parent').toggleClass('active').find('.submenu').toggle();
        return false;
    });
    $('#mobile-menu .mobile-menu-catalog ul li.parent > a').click(function (event) {
        var container_LI = $(this).parent();
        if (!container_LI.hasClass('active')) event.preventDefault();
        container_LI.toggleClass('active').find('.submenu').toggle();
    });


    $(document).on('focus', 'input.error', function () {
        var name = $(this).attr('name');
        $(this).attr('placeholder', defaultMessage[name]);
        $(this).removeClass('error');
    });
    $(document).on('change', '.required-checkbox', function () {
        $(this).removeClass('error');
    });


    $('.phone-field').inputmask({"mask": "+7 (999) 999-99-99"});
    $(document).on('change keyup', '.phone-field', function (event) {
        var val = $(this).val(),
            letter = val.charAt(4);

        if ((event.which == 55 || event.which == 56 || event.which == 103 || event.which == 104) && (letter == 8 || letter == 7)) {
            var new_val = val.replaceAt(4, "_");


            $(this).blur();
            $(this).val(new_val);
            //$(this).unmask().inputmask({"mask": "+7 (999) 999-99-99"});
            $(this).focus();
        }
    });

    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    $(document).on('click', '.goscroll', function () {
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 800, {offset: -20});
        return false;
    });


    $('.select-custom').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option:selected').text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'optionz'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            /*
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            */

            $(this).toggleClass('active').next('ul.optionz').fadeToggle();
        });


        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            $(this).addClass('selected').siblings().removeClass('selected');
            $this.trigger('change');
            //document.location = $(this).attr('rel');
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
    var dt = new Date();
    dt = dt.setDate(dt.getDate() + 1);
    $('.datepicker').datetimepicker({
        locale: 'ru',
        //debug: true,
        defaultDate: dt,
        ignoreReadonly: true,
        allowInputToggle: true,
        stepping: 10,
        format: 'DD.MM.YYYY',
        minDate: new Date(),

    });
    $('.datepicker').on('dp.hide', function () {
        $(this).removeClass('shown');
    });
    $(document).on('click', '.datepicker', function () {
        $(this).addClass('shown');
    });
    $(document).on('click', '.datepicker.shown', function () {
        $(this).data('DateTimePicker').hide();
        $(this).removeClass('shown');
    });


    if ($('#map').length) initMap();
    if ($('#delivery-map').length) {
        var infowindow = new google.maps.InfoWindow({
            size: new google.maps.Size(150, 50)
        });
        initDeliveryMap();
    }


    function initDeliveryMap() {
        var myLatLng = {lat: 55.75254185053081, lng: 37.619689740722656};

        var map = new google.maps.Map(document.getElementById('delivery-map'), {
            zoom: 9,
            center: myLatLng,
            disableDefaultUI: true,
            styles: [{"elementType": "geometry", "stylers": [{"color": "#212121"}]}, {
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#212121"}]
            }, {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{"color": "#757575"}]
            }, {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            }, {
                "featureType": "administrative.land_parcel",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#bdbdbd"}]
            }, {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#181818"}]
            }, {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#616161"}]
            }, {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#1b1b1b"}]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#2c2c2c"}]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#8a8a8a"}]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{"color": "#373737"}]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{"color": "#3c3c3c"}]
            }, {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{"color": "#4e4e4e"}]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#616161"}]
            }, {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#000000"}]
            }, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#3d3d3d"}]}]
        });


        var shape1Arr = [[37.41154213975701, 55.6925349491273], [37.43203148054128, 55.66271290866529], [37.50550254987733, 55.59939436072489], [37.51940712141053, 55.59375675144835], [37.58892997907655, 55.5771307888057], [37.598543016185936, 55.575963789009975], [37.6697824876216, 55.57178175370843], [37.6874636094478, 55.57416459611849], [37.75372490095174, 55.601969894298165], [37.794408647289636, 55.62402505456164], [37.836294023266255, 55.65160075438269], [37.840757219067065, 55.66130586793409], [37.829427568188166, 55.68904915746554], [37.829427568188166, 55.697969372448966], [37.83921226667452, 55.71454390733496], [37.84333213972145, 55.775934095907715], [37.83886894392071, 55.81712918749549], [37.83440574811995, 55.82659980181647], [37.70668968366682, 55.89109294802447], [37.679223863354345, 55.89456557399221], [37.632531968823095, 55.89765209062997], [37.58240684675276, 55.911538364266825], [37.529535142651284, 55.905753023677505], [37.40937217878409, 55.87121580738769], [37.39151939558097, 55.84823822774743], [37.39598259138176, 55.83394276606386], [37.387748059118486, 55.80530192150066], [37.37024381249972, 55.79018277550929], [37.36784055322237, 55.746828933577824], [37.386123522657705, 55.71361334926295], [37.41154213975701, 55.6925349491273]];
        var shape2Arr = [[37.21735330048641, 55.74651314103789], [37.26940961304718, 55.64861919978175], [37.38133283082046, 55.54636710458966], [37.55162091675812, 55.49260680490382], [37.705429510508196, 55.4848093361628], [37.872971014414304, 55.539359074485645], [37.95330853882836, 55.586833385339936], [37.99794049683618, 55.62065283253161], [37.99794049683623, 55.65560765951827], [38.01030011597696, 55.78776364620395], [37.98008771363328, 55.866610139414185], [37.87983746949254, 55.929109252179074], [37.717789129649006, 55.98842828461368], [37.51660199585994, 55.99881897060495], [37.42047162476617, 55.97495470201906], [37.33807416382876, 55.947993392805095], [37.27833600464891, 55.931422092670964], [37.258079962168615, 55.856569999629826], [37.229155020152014, 55.829091108494595], [37.21735330048641, 55.74651314103789]];
        var shape3Arr = [[38.154818450915265, 55.59661386804817], [38.16777888487544, 55.81523412072111], [38.128125106799274, 55.900294059886676], [37.97225657652578, 56.002003884477624], [37.78960887144765, 56.0727339704284], [37.48679820250235, 56.088092854813034], [37.18948069761949, 56.00700539306679], [37.13248912047109, 55.97775659354145], [37.102963363635126, 55.8925778335433], [37.06382456968985, 55.84933848005905], [37.05215159605696, 55.74838762296573], [37.10845652769759, 55.611434066090126], [37.254025375353706, 55.47984832475363], [37.512890731798954, 55.396307789211626], [37.72506419371305, 55.38810031561705], [37.97706309508018, 55.46697748510029], [38.12949839781449, 55.562433103596], [38.154818450915265, 55.59661386804817]];
        var shape4Arr = [[38.326861784306324, 55.83580901241035], [38.25199443220195, 55.9745809340038], [38.06110698103005, 56.07916696139043], [37.84138041853011, 56.162018028514886], [37.40810710310049, 56.18231985836565], [37.11902934431144, 56.098361388107904], [36.978267015209774, 56.03652099442704], [36.93981486677234, 55.942224785515585], [36.89449626325679, 55.889781034417425], [36.87527018903799, 55.76339287006742], [36.93638163923338, 55.59151125036801], [37.131388963452146, 55.412620668463184], [37.457545579663034, 55.309750927720096], [37.756923021069206, 55.2952572081522], [38.07827311872562, 55.39386599030408], [38.26778727888194, 55.51483248298963], [38.31467382654257, 55.57356335828239], [38.326861784306324, 55.83580901241035]];
        var shape5Arr = [[38.49453888548849, 55.85695461473322], [38.405274969472806, 56.01766739271728], [38.18211517943377, 56.15319165770431], [37.92256317748064, 56.254234244890235], [37.37187348021497, 56.27639719134447], [37.03473053587905, 56.18077524142414], [36.82187042845717, 56.08798478021836], [36.77586517943378, 55.97187277647002], [36.72779999388678, 55.92255386161791], [36.69896088255878, 55.76647694014862], [36.76213226927745, 55.56777115331361], [36.996965032949326, 55.346144550596776], [37.39109955443364, 55.21759270485107], [37.8236862243556, 55.20031613010738], [38.17936859740243, 55.30699621042347], [38.4128280700586, 55.45867491179158], [38.48423920287114, 55.55064756718023], [38.49453888548849, 55.85695461473322]];
        var shape6Arr = [[38.650437653105875, 55.526205728736606], [38.6641705632622, 55.86669684525849], [38.56735354666057, 56.06234295106938], [38.297501862090265, 56.22602613836568], [37.996064484160534, 56.34251457853505], [37.33551150564487, 56.3638639118166], [36.92489749197303, 56.25317494838028], [36.683884918730776, 56.14216365002891], [36.63547641043003, 56.01833223932198], [36.57573825125034, 55.95732589754765], [36.524583160918226, 55.748367160823534], [36.59324771169952, 55.53321611309313], [36.83975344900421, 55.28553768608719], [37.330018341582274, 55.120600731119616], [37.85461550955108, 55.10091964914254], [38.292695343535456, 55.23377429132777], [38.560487091582196, 55.41230633417811], [38.650437653105875, 55.526205728736606]];

        var big_coords = [shape6Arr, shape5Arr, shape4Arr, shape3Arr, shape2Arr, shape1Arr];

        var texts = [
            '<h4 style="margin-bottom:10px">Стоимость доставки: 799 р.</h4><span>Доставка меньше 50 км от МКАД</span>',
            '<h4 style="margin-bottom:10px">Стоимость доставки: 699 р.</h4><span>Доставка меньше 40 км от МКАД</span>',
            '<h4 style="margin-bottom:10px">Стоимость доставки: 599 р.</h4><span>Доставка меньше 30 км от МКАД</span>',
            '<h4 style="margin-bottom:10px">Стоимость доставки: 499 р.</h4><span>Доставка меньше 20 км от МКАД</span>',
            '<h4 style="margin-bottom:10px">Стоимость доставки: 399 р.</h4><span>Доставка меньше 10 км от МКАД</span>',
            '<h4 style="margin-bottom:10px">Стоимость доставки: 300 р.</h4><span>Доставка в пределах Москвы</span>'
        ];

        var shapes = [];
        big_coords.forEach(function (i, k) {
            var path = [];
            i.forEach(function (e) {
                path.push(new google.maps.LatLng(e[1], e[0]));
            });
            var polyline = new google.maps.Polygon({
                customParam: k,
                path: path,
                fillColor: "#ff4638",
                fillOpacity: 0.1,
                strokeColor: "#ff4638",
                strokeOpacity: 0,
                strokeWeight: 2
            });
            polyline.setMap(map);
            shapes.push(polyline);
            /*
            Если нужен клик по полигону*/
            google.maps.event.addListener(polyline, 'click', function (event) {
                infowindow.setContent(texts[polyline.customParam]);
                infowindow.setPosition(event.latLng);
                infowindow.open(map);
            });

        });

        map.setCenter(new google.maps.LatLng(55.75254185053081, 37.619689740722656), 2);


    }
});


function initMap() {

    var center = {lat: 55.75254185053081, lng: 37.619689740722656};
    var myLatLng = {lat: 55.741085, lng: 37.524228};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: center,
        disableDefaultUI: true,
        styles: [{"elementType": "geometry", "stylers": [{"color": "#212121"}]}, {
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
        }, {"elementType": "labels.text.fill", "stylers": [{"color": "#757575"}]}, {
            "elementType": "labels.text.stroke",
            "stylers": [{"color": "#212121"}]
        }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{"color": "#757575"}]
        }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#9e9e9e"}]
        }, {
            "featureType": "administrative.land_parcel",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#bdbdbd"}]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#757575"}]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{"color": "#181818"}]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#616161"}]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [{"color": "#1b1b1b"}]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#2c2c2c"}]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#8a8a8a"}]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{"color": "#373737"}]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{"color": "#3c3c3c"}]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [{"color": "#4e4e4e"}]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#616161"}]
        }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#757575"}]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}]
        }, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#3d3d3d"}]}]
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Москва, Кутузовский пр-т, 36, стр. 41',
        icon: '/catalog/view/theme/ugg/app/images/marker.png'
    });
}