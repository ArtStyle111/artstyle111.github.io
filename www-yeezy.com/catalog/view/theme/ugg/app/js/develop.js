$(document).ready(function() {
	/* Search */
	$('#search-submit').on('click', function() {
		if (!$(this).hasClass('activated')) return;
		url = $('base').attr('href') + 'index.php?route=product/search';

		var value = $('#search-input').val();

		if (value) {
			url += '&search=' + encodeURIComponent(value);
		}

		location = url;
	});

	$('#search-input').on('keydown', function(e) {
		if (e.keyCode == 13) {
			$('#search-submit').trigger('click');
		}
	});

	$(document).on('click',".size-button",function(){
		$(".selected-size").removeClass('selected-size');
		$(this).addClass('selected-size');
	})

	$(document).on('click','#oneclick-order', function(){
		//$("#oneclick-order").prop('disabled',true);
		$("#oneclick-order").addClass('attaching');
		$(".error").removeClass('error');
		var option = $("#fast-purchase").find('button.selected-size');
		if (option){
			$("#fast-purchase").find('.grid-option').val(option.attr('data-product-option-value-id'))
		}
		var button = $(this);
		$.ajax({
			url: 'index.php?route=product/product/oneclick',
			type: 'post',
			data: $("#fast-purchase input"),
			dataType: 'json',
			success: function(json) {
				if (json != 1){
					for (i in json) {
						var element = $('#one-' + i.replace('_', '-'));
						element.parent().parent().addClass('error');
					}
					//$("#oneclick-order").prop('disabled',false);
					$("#oneclick-order").removeClass('attaching');
				}
				else{
					var product_id = button.parent().find('.product-info .product-id').val();
					var name = button.parent().find('.product-info .product-name').val();
					var price = button.parent().find('.product-info .product-price').val();
	                var brand = button.parent().find('.product-info .product-brand').val();
	                var category = button.parent().find('.product-info .product-category').val();
	                var variant = button.parent().find('.product-info .product-variant').val();

	                dataLayer.push({
						"event": "AddToCart",
						"ecommerce": {
							"add": {
								"products": [{
									"id": product_id,
									"name" : name,   
									"price": price,      
									"brand": brand,   
									"category": category,
									"variant" : variant,
									"quantity": 1 
								}]
							}
						}
					});
					//ym(53253928, 'reachGoal', 'buy_one_click');
					gtag('event', 'send', { 'event_category': 'checkout_success'}); 
					ym(64797927, 'reachGoal', 'buy_one_click'); 
					setTimeout("document.location = '/index.php?route=checkout/success';", 2000);
				}
				//$('.favourite .count').html(json['total']);
				//document.location = '/index.php?route=checkout/success';
			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
	        }
		});
	})

	$("#hide_not_in_stock").change(function(){
		if ($("#hide_not_in_stock").prop('checked') == true){
			$(".hiddden").hide();
		}
		else{
			$(".hiddden").show();
		}
	})

	$('#button-coupon').on('click', function() { 
		$('#button-coupon').parent().removeClass('valid');

		$.ajax({
			url: 'index.php?route=total/coupon/coupon',
			type: 'post',
			data: 'coupon=' + encodeURIComponent($('input[name=\'coupon\']').val()),
			dataType: 'json',
			success: function(json) {
				if (json['error']) {
					$('#button-coupon').parent().addClass('not-valid');
					$(".coupon-field .error-msg").text(json['error']);
				}
				else{
					$('#button-coupon').parent().addClass('valid');
					$(".coupon-field .error-msg").text('Введенный промокод применен');

					//$(".cart-table").load('index.php?route=checkout/cart .cart-table > *');
					$(".cart-totals").load('index.php?route=checkout/cart .cart-totals > *');
				}
				
				/*if (json['redirect']) {
					location = json['redirect'];
				}*/
			}
		});
	});

	$(".qua").change(function(){
		var quantity = $(this).val();

		cart.update($(this).attr('id'), quantity);
	})

	
})

var wishlist = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=account/wishlist/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {

				$('.favourite .count').html(json['total']);
			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
	        }
		});
	},
	'add2': function(product_id, el) { 
		if (el.hasClass('favourite-active')){
			el.attr('title','Добавить в избранное');
			el.removeClass('favourite-active');
			document.activeElement = null;

			$.ajax({
				url: 'index.php?route=account/wishlist/removeone',
				type: 'post',
				data: {product_id: product_id},
				dataType: 'json',
				success: function(json) {
					$('.favourite .count').html(json);
				},
		        error: function(xhr, ajaxOptions, thrownError) {
		            
		        }
			});
		}
		else{
			el.addClass('favourite-active');
			el.attr('title','В избранном');
			$.ajax({
				url: 'index.php?route=account/wishlist/add',
				type: 'post',
				data: 'product_id=' + product_id,
				dataType: 'json',
				success: function(json) {

					$('.favourite .count').html(json['total']);
				},
		        error: function(xhr, ajaxOptions, thrownError) {
		            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
		        }
			});
		}
		
		
	},
	'removeone': function(product_id){
		$.ajax({
			url: 'index.php?route=account/wishlist/removeone',
			type: 'post',
			data: {product_id: product_id},
			dataType: 'json',
			success: function(json) {
				$('.favourite .count').html(json);
			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            
	        }
		});
	},
	'removew': function(product_id, el){
		$.ajax({
			url: 'index.php?route=account/wishlist/removeone',
			type: 'post',
			data: {product_id: product_id},
			dataType: 'json',
			success: function(json) {
				$('.favourite .count').html(json);
				el.parent().parent().parent().parent().fadeOut(500, function(){
					$(this).remove();

					if ($(".product-in-wishlist").length == 0) {
						setTimeout(function(){
							$('#showifempty').show();
							$('body').addClass('footer-to-bottom');
							$(".product-pagination").remove();
							$(".hide_not_in_stock").remove();
							$(".clear-page").remove();
						}, 400);
					}
				});

				
			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            
	        }
		});
	},
	'remove': function() {
		$.ajax({
			url: 'index.php?route=account/wishlist/remove',
			type: 'post',
			dataType: 'json',
			success: function(json) {
				$(".hide_not_in_stock").remove();
				$(".clear-page").remove();
			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            
	        }
		});
	},
	'add3': function(product_id) {
		
		if ($(".a2f .loved").length == 0){
			$.ajax({
				url: 'index.php?route=account/wishlist/add',
				type: 'post',
				data: 'product_id=' + product_id,
				dataType: 'json',
				success: function(json) {
					$('.favourite .count').html(json['total']);
				},
		        error: function(xhr, ajaxOptions, thrownError) {
		            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
		        }
			});
		}
		else{
			$.ajax({
				url: 'index.php?route=account/wishlist/removeone',
				type: 'post',
				data: {product_id: product_id},
				dataType: 'json',
				success: function(json) {
					$(".a2f a").removeClass('loved');
					$('.favourite .count').html(json);
				},
		        error: function(xhr, ajaxOptions, thrownError) {
		            
		        }
			});
		}
	}
}

var cart = {
	'add': function(product_id, quantity, button) {
		var opt = [];
		var option = button.parent().parent().parent().find('button.selected-size');
		if (option){
			button.parent().parent().parent().find('.grid-option').val(option.attr('data-product-option-value-id'))
		}
		$.ajax({
			url: 'index.php?route=checkout/cart/add',
			type: 'post',
			//data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			data: button.parent().parent().parent().find('input'),
			dataType: 'json',
			success: function(json) {
				$('.minicart p').html(json['total']);
				$(".add-cart-result").load('index.php?route=checkout/cart/popup&product_id='+product_id+'&quantity='+quantity, function(){
					$("#showcart").trigger('click');
				});

				var name = button.parent().find('.product-info .product-name').val();
				var price = button.parent().find('.product-info .product-price').val();
                var brand = button.parent().find('.product-info .product-brand').val();
                var category = button.parent().find('.product-info .product-category').val();
                var variant = button.parent().find('.product-info .product-variant').val();
               
                dataLayer.push({
					"event": "AddToCart",
					"ecommerce": {
						"add": {
							"products": [{
								"id": product_id,
								"name" : name,   
								"price": price,      
								"brand": brand,   
								"category": category,
								"variant" : variant,
								"quantity": quantity 
							}]
						}
					}
				});


				gtag('event', 'click', { 'event_category': 'add_to_cart'}); 
				ym(64797927,'reachGoal','add_to_cart'); 
								
			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
	        }
		});
	},
	'update': function(key, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/edit',
			type: 'post',
			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			success: function(json) {
				//$(".cart-table").load('index.php?route=checkout/cart .cart-table > *');
				$(".cart-totals").load('index.php?route=checkout/cart .cart-totals > *');
			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
	        }
		});
	},
	'updateOption': function(cart_id, product_option_id, product_option_value_id){
		$.ajax({
			url: 'index.php?route=checkout/cart/editOption',
			type: 'post',
			data: 'key=' + cart_id + '&product_option_id=' + product_option_id+ '&product_option_value_id=' + product_option_value_id,
			dataType: 'json',
			success: function(json) {
				
			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
	        }
		});
	},
	'remove': function(key, button=false) {
		if (button){
			var name = button.parent().find('.product-info .product-name').val();
			var price = button.parent().find('.product-info .product-price').val();
            var brand = button.parent().find('.product-info .product-brand').val();
            var category = button.parent().find('.product-info .product-category').val();
            var variant = button.parent().find('.product-info .product-variant').val();
           	console.log(key);
           	console.log(price);
           	console.log(brand);
           	console.log(category);
           	console.log(button.parent().parent().find('.qua').val() );
            dataLayer.push({
				"event": "Remove",
				"ecommerce": {
					"remove": {
						"products": [{
							"id": key,
							"name" : name,   
							"price": price,      
							"brand": brand,   
							"category": category,
							"variant" : variant,
							"quantity": button.parent().parent().find('.qua').val() 
						}]
					}
				}
			});
        }
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			success: function(json) {
				$('.minicart .count').html(json['total']);

				if (json['total'] == 0){
					$(".cart-page > .container").load('index.php?route=checkout/cart .cart-page > .container > *')
				}


			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
	        }
		});
	}
}

var fast = {
	get: function(product_id){
		$("#preview").load('index.php?route=product/product/fast&product_id='+product_id, function(){
			$("#showfast").trigger('click');
		});
	}
}

var oneclick = {
	show: function(product_id){
		$("#fast-purchase").load('index.php?route=product/product/oneclickform&product_id='+product_id, function(){
			$("#showoneclick").trigger('click');
			$('.phone-field').inputmask({"mask": "+7 (999) 999-99-99"});
		});
	}
}