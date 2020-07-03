<?php
/**
* The template for displaying archive pages
*
* Template Name: bathroom-installation
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
</section>
<section class="bathroom">
  <div class="conteiner">
    <h1 class="title title__page">
      <?php the_field('bathroom_installation_main-title')?>
      <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
    </h1>
    <div class="offers_1">
      <div class=" offres_1__desc__second bathroom__offers left animated">
        <h2 class="title title__offers title__bathroom">
          <?php the_field('first_block-title')?>
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line" />
        <p class="title__desc title__desc__offers bathroom__desc">
          <span class="bold">
            <?php the_field('first_block_desc_bold')?>
          </span>
          <br>
          <?php the_field('first_block_desc')?>
        </p>
      </div>
      <img class="self right animated" src="<?php the_field('first_block_img')?>" alt="" />
    </div>
  </div>
</section>
<section class="bathroom__reason">
  <div class="conteiner">
    <div class="bathroom__reason__content down animated">
      <h4>
        <span class="bold bathroom__text">
          <?php the_field('second_block_title')?>
        </span>
      </h4>
      <br />
      <ul>
        <li>
          <p class="bathroom__text">
            <?php the_field('second_block_list_1')?>
          </p>
        </li>
        <br />
        <li>
          <p class="bathroom__text">
            <?php the_field('second_block_list_2')?>
          </p>
        </li>
        <br />
        <li>
          <p class="bathroom__text">
            <?php the_field('second_block_list_3')?>
          </p>
        </li>
        <br />
        <li>
          <p class="bathroom__text">
            <?php the_field('second_block_list_4')?>
          </p>
        </li>
      </ul>
      <img class="self bathroom__img" src="<?php the_field('second_block_img')?>" alt="" />
    </div>
  </div>
</section>
<section class="bathroom__respect">
  <div class="conteiner">
    <h2 class="title__offers title__bathroom left animated">
      <?php the_field('third_block_title')?>
    </h2>
    <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line left animated" />
    <p class="bounce animated">
      <?php the_field('third_block_desc')?>
    </p>
    <br />
    <ul class="right animated">
      <li>
        <p class="bathroom__text">
          <?php the_field('third_block_list_1')?>
        </p>
      </li>
      <br />
      <li>
        <p class="bathroom__text">
          <?php the_field('third_block_list_2')?>
        </p>
      </li>
      <br />
      <li>
        <p class="bathroom__text">
          <?php the_field('third_block_list_3')?>
        </p>
      </li>
      <br />
      <li>
        <p class="bathroom__text">
          <?php the_field('third_block_list_4')?>
        </p>
      </li>
      <br />
      <li>
        <p class="bathroom__text">
          <?php the_field('third_block_list_5')?>
        </p>
      </li>
    </ul>
    <p class="left animated">
      <?php the_field('third_block_desc_2')?>
    </p>
    <br />
    <p class="right animated">
      <?php the_field('third_block_desc_3')?>
    </p>
    <div class="bathroom__collage up animated">
      <img class=" self__bathroom" src="<?php the_field('third_block_img_1')?>" alt="" />
      <img class=" self__bathroom" src="<?php the_field('third_block_img_2')?>" alt="" />
      <img class=" self__bathroom" src="<?php the_field('third_block_img_3')?>" alt="" />
    </div>
    <p>
      <span class="bold down animated">
        <?php the_field('fourth_block_title')?>
      </span>
    </p>
    <br />
    <p class="up animated">
      <?php the_field('fourth_block_desc')?>
    </p>
    <div class="bathroom__spec">
      <div class="bathroom__spec__content left animated">
        <p>
          <span class="bold">
            <?php the_field('fourth_block_list_1_title')?>
          </span>
        </p>
        <br />
        <ul>
          <li>
            <p>Replacement of floor and wall boards
            </p>
          </li>
          <br />
          <li>
            <p>Laying new floor tiles
            </p>
          </li>
          <br />
          <li>
            <p>Applying new wall tiles
            </p>
          </li>
          <br />
          <li>
            <p>Plastering and dry-lining walls
            </p>
          </li>
          <br />
          <li>
            <p>Repairs for damaged floors and walls
            </p>
          </li>
          <br />
          <li>
            <p>Plumbing and Electrical work
            </p>
          </li>
          <br />
          <li>
            <p>Painting and decorating
            </p>
          </li>
        </ul>
      </div>
      <div class="bathroom__spec__content right animated">
        <p>
          <span class="bold">
            <?php the_field('fourth_block_list_2_title')?>
          </span>
        </p>
        <br />
        <ul>
          <li>
            <p>Basins
            </p>
          </li>
          <br />
          <li>
            <p>Toilet bowls
            </p>
          </li>
          <br />
          <li>
            <p>Bathtubs
            </p>
          </li>
          <br />
          <li>
            <p>Shower tray
            </p>
          </li>
          <br />
          <li>
            <p>Shower
            </p>
          </li>
          <br />
          <li>
            <p>Lights and spotlights
            </p>
          </li>
          <br />
          <li>
            <p>Extractor fans
            </p>
          </li>
          <br />
          <li>
            <p>Bathroom furniture and accessories
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="conteiner">
    <div class="offers_1">
      <img class="left animated self" src="<?php bloginfo('template_directory')?>/assets/image/main_page/bathroom__bl.png" alt="" />
      <div class="offres_1__desc right animated">
        <h2 class="title title__offers">
          <?php the_field('fifth_block_title')?>
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line" />
        <ul class="bathroom__text">
          <li>
            <p>
              <?php the_field('fifth_block_desc_list_1')?>
            </p>
          </li>
          <br />
          <li>
            <p>
              <?php the_field('fifth_block_desc_list_2')?>
            </p>
          </li>
          <br />
          <li>
            <p>
              <?php the_field('fifth_block_desc_list_3')?>
            </p>
          </li>
          <br />
          <li>
            <p>
              <?php the_field('fifth_block_desc_list_4')?>
            </p>
          </li>
        </ul>
        <a class="btn btn__offers" href="#"> Our Portfolio
        </a>
      </div>
    </div>
  </div>
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
