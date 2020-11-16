$(document).ready(function() { 
	$(document).on( "submit", 'form', function() { //alert();
			var data = $(this).serialize(); 		
			//console.log(data);
			$.ajax({
			   type: 'POST', 
			   url: 'order.php', 
			   dataType: 'json', 
				data: data, 
				success: function(data){ console.log(data);
					
					if (data['call'] == 1) {
						gtag('event', 'generate_lead', {
							'event_category' : 'Обратный звонок',
							'event_label' : 'Обратный звонок'
						});
						
						setTimeout( function(){				
								document.location.href = data['success_url'];		
						}, 500);
					}	
				
					if (data['order'] == 1) {
						

						gtag('event', 'Покупка', {
							'event_category' : 'Покупка',
							'event_label' : data['product_name']
						});
						
						gtag('event', 'purchase', {
							"transaction_id": data['transaction_id'],
							"affiliation": data['affiliation'],
							"value": data['value'],
							"currency": "UAH",
							"tax": 0,
							"shipping": 0,
							"items": [
								{
									"id": data['meta'],
									"name": data['product_name'],
									"list_name": "Landing page",
									"brand": "Икорный",
									"category": data['category'],
									"variant": data['variant'],
									"quantity": 1,
									"price": data['price']
								}
							]
						});
							
							setTimeout( function(){				
								document.location.href = data['success_url'];		
							}, 500);	
						 
					}		       		

			 },				 
			 error: function(xhr, ajaxOptions, thrownError) {
				console.log(thrownError);
				console.log(xhr.statusText);
				console.log(xhr.responseText);
			}	                  
		});

			return false; 
	});	
});