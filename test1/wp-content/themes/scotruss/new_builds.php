<?php
/**
* The template for displaying archive pages
*
* Template Name: new_builds
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/
*
* @package ScotRuss
*/
get_header();
?>
<section class="slider-all">
  <div class="main__slider">
    <div class="main__slider-item">
      <img src="<?php bloginfo('template_directory')?>/assets/image/strach/strech__img__2.png" alt="Первый слайд" />
      <div class="slideText">Professional construction  services
      </div>
      <br />
      <p class="slideText__desc">
      </p>
    </div>
    <div class="main__slider-item">
      <img src="<?php bloginfo('template_directory')?>/assets/image/strach/strach__img__1.png" alt="Второй слайд" />
      <div class="slideText">Professional construction  services
      </div>
      <br />
      <p class="slideText__desc">
      </p>
    </div>
    <div class="main__slider-item">
      <img src="<?php bloginfo('template_directory')?>/assets/image/kitchen/kitchen__img__1.png" alt="Третий слайд" />
      <div class="slideText">Professional construction  services
      </div>
      <br />
      <p class="slideText__desc">
      </p>
    </div>
    <div class="conteiner">
      <div class="slider-dots">
        <span class="slider-dots_item" onclick="currentSlide(1)">
        </span>
        <span class="slider-dots_item" onclick="currentSlide(2)">
        </span>
        <span class="slider-dots_item" onclick="currentSlide(3)">
        </span>
      </div>
    </div>
  </div>
</section>
<section class="new__build">
  <div class="conteiner">
    <h1 class="title title__page">
      <?php the_field('new_builds-title')?>
      <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
    </h1>
    <div class="offers_1 gardenroom__offers_1">
      <div class=" offres_1__desc__second bathroom__offers left animated">
        <h2 class="title title__offers title__bathroom">
          <?php the_field('first_block-title')?>
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line  building__line" />
        <p class="title__desc title__desc__offers bathroom__desc">
          <span class="bold">
            <?php the_field('first_block-desc')?>
            <br>
          </span>
          <br />
          <?php the_field('first_block-desc-2')?>
        </p>
        <br>
      </div>
      <img class="blog__like right animated" src="<?php the_field('first_block-img')?>" alt="" />
    </div>
    <p class="title__desc title__desc__offers bathroom__desc gardenroom__text">
      <?php the_field('first_block-desc-3')?>
      <br />
      <br />
      <?php the_field('first_block-desc-4')?>
      <br />
      <br />
      <?php the_field('first_block-desc-5')?>
      <br />
      <br />
      <?php the_field('first_block-desc-6')?>
    </p>
    <div class="offers_1">
      <img class="self left animated" src="<?php the_field('second_block_img')?>" alt="" />
      <div class="offres_1__desc right animated">
        <h2 class="title title__offers">
          <?php the_field('second_block-title')?>
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line " />
        <p class="title__desc title__desc__offers home__improvement__text blog__desc">
          <?php the_field('second_block-desc')?>
        </p>
        <a class="btn btn__offers" href="#">Our Portfolio
        </a>
      </div>
    </div>
  </div>
</section>
<section class="contact__form" id="contact">
  <div class="conteiner">
    <div class="form__decor bounce animated">
      <legend class="title title__form">Contact Us
      </legend>
      <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line work__line" style = "padding-bottom:20px;" />
      <?php echo do_shortcode('[contact-form-7 id="5" title="Контактная форма 1"]')?>
    </div>
  </div>
</section>
<?php
get_footer();
