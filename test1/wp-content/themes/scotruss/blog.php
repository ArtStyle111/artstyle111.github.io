<?php
/**
* The template for displaying archive pages
*
* Template Name: blog
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/
*
* @package ScotRuss
*/
get_header(); ?>
<section class="slider-all">
  <div class="main__slider">
    <div class="main__slider-item">
      <img src="<?php bloginfo('template_directory'); ?>/assets/image/strach/strech__img__2.png" alt="Первый слайд" />
      <div class="slideText">Professional construction  services
      </div>
      <br />
      <p class="slideText__desc">
      </p>
    </div>
    <div class="main__slider-item">
      <img src="<?php bloginfo('template_directory'); ?>/assets/image/strach/strach__img__1.png" alt="Второй слайд" />
      <div class="slideText">Professional construction  services
      </div>
      <br />
      <p class="slideText__desc">
      </p>
    </div>
    <div class="main__slider-item">
      <img src="<?php bloginfo('template_directory'); ?>/assets/image/kitchen/kitchen__img__1.png" alt="Третий слайд" />
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
<section class="blog__content">
  <div class="conteiner">
    <h1 class="title title__page">
      <?php the_field('contact_main_title'); ?>
      <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
    </h1>
    <?php if (have_rows('contact_post')): while (have_rows('contact_post')): the_row(); ?>
    <div class="offers_1">
      <img class="self left animated" src="<?php the_sub_field('contact_post_img'); ?>" alt="" />
      <div class="offres_1__desc right animated">
        <h2 class="title title__offers">
          <?php the_sub_field('contact_post_title'); ?>
        </h2>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line" />
        <div class="blog__date">
          <p class="blog__date__desc">
            <?php the_sub_field('contact_post_date'); ?>
          </p>
          <img class="blog__like" src="<?php bloginfo('template_directory'); ?>/assets/image/blog/Like.png" alt="" />
        </div>
        <p class="title__desc title__desc__offers home__improvement__text blog__desc">
          <?php the_sub_field('contact_post_desc'); ?>
        </p>
        <a class="btn btn__offers" href="#">Read More
        </a>
      </div>
      
    </div>
    <?php
                endwhile;
                endif; ?>
    </section>
  <section class="contact__form" id="contact">
    <div class="conteiner">
      <div class="form__decor bounce animated">
        <legend class="title title__form">Contact Us
        </legend>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line" style = "padding-bottom:20px;" />
        <?php echo do_shortcode('[contact-form-7 id="5" title="Контактная форма 1"]'); ?>
      </div>
    </div>
  </section>
  <?php get_footer(); ?>
