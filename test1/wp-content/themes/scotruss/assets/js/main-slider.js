/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);
autoSlider();

let sliderIndex = 0;
showSlides(slideIndex);
autoSlider();

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
    let slides = document.getElementsByClassName("main__slider-item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// /* Авто прокрутка слайдера */
function autoSlider() {
    let slides = document.getElementsByClassName("main__slider-item");
    let dots = document.getElementsByClassName("slider-dots_item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(autoSlider, 4000); // Измените значения авто прокрутки в миллисекундах (ms), пример 6000 это 6 секунд
}
