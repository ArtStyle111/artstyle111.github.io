<?php
/**
 * The template for displaying archive pages
 *
 * Template Name: gallery
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
<section class="gallery">
            <div class="conteiner">
                <h2 class="title title__work">
                    <?php the_field('gallery_title')?>
                </h2>
                <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line work__line" />
                <div class="gallery__content">
                <?php if( have_rows('gallery_store') ): while ( have_rows('gallery_store') ) : the_row();?>

                    <a class="example-image-link" href="<?php the_sub_field('gallery_store_img');?>" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                    <img class="example-image" src="<?php the_sub_field('gallery_store_img');?>" alt="" />
                    </a>
                <?php endwhile; endif;?>
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
<?php get_footer(); ?>
