/*! zInfinityCarousel v0.1 zyat.pro pmnv.ru */

$.fn.zInfinityCarousel = function(options) {

	var options = $.extend({
		viewport_items : 7,
		item_width : 90
	}, options);

	var selector = $(this);

	if (selector.length > 0) {

		if (selector.find('ul li').length > options.viewport_items) {

			items = selector.find('ul');

			items_count = selector.find('ul li').length - 1;
			items.css('left', '-' + options.item_width + 'px');
			selector.find('ul li').each(function(step) {
				if (step == items_count) {
					$(this).clone().prependTo(items);
				} else {
					$(this).clone().appendTo(items);
				}
			});
			selector.parent().find('.controls .left').click(function(event) {
				event.preventDefault();
				items.animate({
					left : '+=' + options.item_width + 'px'
				}, 300, function() {
					if (items.css('left') == '0px') {
						items.css('left', '-' + options.item_width * (items_count + 1) + 'px');
					}
				});
			});
			selector.parent().find('.controls .right').click(function(event) {
				event.preventDefault();
				items.animate({
					left : '-=' + options.item_width + 'px'
				}, 300, function() {
					if (items.css('left') == '-' + options.item_width * (items_count + 1) + 'px') {
						items.css('left', '0px');
					}
				});
			});
		}
	}

};
