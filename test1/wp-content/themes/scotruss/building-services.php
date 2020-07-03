<?php
/**
 * The template for displaying archive pages
 *
 * Template Name: building__services
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
<section class="building__services">
  <div class="conteiner">
    <h2 class="title title__work">
      <?php the_field('building_services-title'); ?>
    </h2>
    <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line" />
    <div class="building__services__content">
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('house_building_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('house_building_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('house_extension_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('house_extension_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('garden_rooms_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('garden_rooms_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('loft_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('loft_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('bathroom_installation_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('bathroom_installation_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('commercial_work_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('commercial_work_title'); ?>
          <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('home_improvement_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('home_improvement_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('architectural_services_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('architectural_services_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('joinery_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('joinery_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('property_restoration_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('property_restoration_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('kitchen_installation_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('kitchen_installation_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('wet_room_installation_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('wet_room_installation_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('shop_fitting_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('shop_fitting_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('stretch_ceilings_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('stretch_ceilings_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('plumbing_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('plumbing_title'); ?>
          <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('electrical_work_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('electrical_work_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('tiling_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('tiling_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('painting_decorating_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('painting_decorating_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
      <div class="building__services__content__card">
        <img class="self self__buildimg__services" src="<?php the_field('flooring_img'); ?>" alt="" />
        <p class="building__services__content__card__desc bold">
          <?php the_field('flooring_title'); ?>
        </p>
        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
      </div>
    </div>
  </div>
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
<?php get_footer();
