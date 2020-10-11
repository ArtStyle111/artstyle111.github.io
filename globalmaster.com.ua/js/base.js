$(document)
		.ready(
				function() {
					$('.header .city-info .select').on(
							"click",
							function(e) {
								$('.header .city-info .select .city').css(
										'visibility', 'visible');
							});

					$('input.phone').mask('8 (999) 999-99-99');

					$('.actions a.order, .order .button a').on("click",
							function(e) {
								e.preventDefault();
								$.nmManual('/order/');
							});

					$('.intro .image')
							.append(
									'<a href="/"><img src="/images/sticker.png"></a>');
					$('.intro .image img').css('margin', '-25px 0 0 170px');

					$('.nyroModal').nyroModal();
                    
                    $('.price td').has('.newprice').addClass('action');

					$('td')
							.hover(
									function() {

										if ($(this).parent().find('a').attr(
												'href')) {
											$(this).parent().addClass('hover');
											$('.goto').remove();
											$(this)
													.parent()
													.find('a')
													.append(
															'<span class="goto">&rsaquo;</span>');
										}
									}, function() {
										$('.goto').remove();
										$(this).parent().removeClass('hover');
									});
					$("table.price tr").on(
							"click",
							function() {
								if ($(this).find('a').attr('href'))
									document.location.href = $(this).find('a')
											.attr('href');
							});

					$('.brands .logos').zInfinityCarousel({
						item_width : 119,
						viewport_items : 5
					});
					
					$('.button').click(function(){
						event.preventDefault();
						$('#forma_zhlb').show();
						$('.wzhlb').remove();
					});
				});
