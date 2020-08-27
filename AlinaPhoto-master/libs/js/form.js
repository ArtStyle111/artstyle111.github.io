$(document).ready(function() {

	const feedback = $(".feedback");
	const inputName = $(".feedback__input_name");
	const inputEmail = $(".feedback__input_email");
	const feedbackWarning = $(".feedback__warning");
	const inputPhone = $(".feedback__input_phone");
	const feedbackButton = $(".feedback__button");
	inputPhone.mask('+7 (999) 999-99-99');

	$(".feedback__form").submit(function(event) { 
		event.preventDefault();
		const form = $(this);
		
		if (!inputName.val() || (!inputPhone.val() && !inputEmail.val())) {
			feedbackWarning.css("color", "red")
			feedbackButton.css("border-color", "#f12121");
			feedbackButton.css("color", "#f12121");
			feedbackWarning.addClass("animate__animated animate__shakeX"); 

			if (!inputName.val()) {
				feedbackWarning.text("Необходимо оставить имя");
				setTimeout(() => {
					feedbackWarning.css("color", "")
					feedbackButton.css("border-color", "");
					feedbackButton.css("color", "");
					feedbackWarning.removeClass("animate__animated animate__shakeX");
					feedbackWarning.text("Все данные конфиденциальны");
				}, 3000)
			} else if (!inputPhone.val() && !inputEmail.val()) {
				feedbackWarning.text("Необходимо оставить хотя бы одни контактные данные");
				setTimeout(() => {
					feedbackWarning.css("color", "")
					feedbackButton.css("border-color", "");
					feedbackButton.css("color", "");
					feedbackWarning.removeClass("animate__animated animate__shakeX");
					feedbackWarning.text("Все данные конфиденциальны");
				}, 3500)
			}
		} else {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: form.serialize()
			}).done(function() {
				feedback.addClass("feedback_active");
				setTimeout(function() {
					form.trigger("reset");
					feedback.removeClass("feedback_active");
				}, 4000);
			});
		}
	});

});