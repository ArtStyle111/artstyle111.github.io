$(function(){



    $('.filter-style').styler();

 

    $('.choice__item').on('click',function(){
        const tabName = $(this).attr('data-tab')
        const tab = $('.selection-size[data-tab="'+tabName+'"]')
        $('.selection-size').removeClass('tab-content-active')
        tab.addClass('tab-content-active')
        $('.choice__item').removeClass('choice__item--active')
        $(this).addClass('choice__item--active')
    })

    $('.menu-tab__item').on('click',function(){
        const tabMenuName = $(this).attr('data-tab-menu')
        const tabMenu = $('.menu-tab__select[data-tab-menu="'+tabMenuName+'"]')
        $('.menu-tab__select').removeClass('menu-tab-content-active')
        tabMenu.addClass('menu-tab-content-active')
        $('.menu-tab__item').removeClass('menu-tab__item--active')
        $(this).addClass('menu-tab__item--active')
    })


    $('.header-top__menu-mobile-btn').on('click',function(){
       $('.header-top__list').toggleClass('header-top__list--active')
    })

    $('.choice__link-mobile-btn').on('click',function(){
        $('.search__content-mobile').toggleClass('search__content-mobile--active')
     })

     $('.catalog__btn-mobile').on('click',function(){
        $('.catalog__filter').toggleClass('catalog--active')
     })
   
      


  

    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        type: "double",
        grid: true,
        min: 0,
        max: 193223,
       
    });

    $('.down').on('click',function() {
        let count = $('#buy-licenses__count');
        
        count.val() = parseInt(count.val())+1;
      });


   
      
      $('.quantity_inner .bt_minus').on('click',function() {
        let $input = $(this).parent().find('.quantity');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
    });
    // Прибавляем кол-во по клику
    $('.quantity_inner .bt_plus').on('click',function() {
        let $input = $(this).parent().find('.quantity');
        let count = parseInt($input.val()) + 1;
        count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
        $input.val(parseInt(count));
    }); 
    // Убираем все лишнее и невозможное при изменении поля
    $('.quantity_inner .quantity').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        if (this.value == "") {
            this.value = 1;
        }
        if (this.value > parseInt($(this).data('max-count'))) {
            this.value = parseInt($(this).data('max-count'));
        }    
    });  
        

    });


