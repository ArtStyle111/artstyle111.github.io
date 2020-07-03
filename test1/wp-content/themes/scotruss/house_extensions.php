<?php
/**
* The template for displaying archive pages
*
* Template Name: house_extensions
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
<section class="house">
  <div class="conteiner">
    <h1 class="title title__page">
      House Extensions
      <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
    </h1>
    <div class="offers_1 gardenroom__offers_1">
      <div class=" offres_1__desc__second left animated">
        <h2 class="title title__offers title__house">
          <?php the_field('first_block-first-title')?>
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line" />
        <h2 class="title title__offers">
          <?php the_field('first_block-second-title')?>
        </h2>
        <p class="title__desc title__desc__offers">
          <?php the_field('first_block-desc-1')?>
        </p>
      </div>
      <img class="right animated self" src="<?php the_field('first_block-img')?>" alt="" />
    </div>
    <p class="title__desc title__desc__offers bathroom__desc">
      <?php the_field('first_block-desc-2')?>
      <br />
      <br />
      <b>
        <?php the_field('first_block-desc3-title')?>
      </b>
      <br>
      <?php the_field('first_block-desc3-desc')?>
      <br />
      <br>
      <b>
        <?php the_field('first_block-desc4-title')?>
      </b>
      <br>
      <?php the_field('first_block-desc4-desc')?>
      <br />
    </p>
    <img src="<?php the_field('first_block-bottom-img')?>" alt="" class="bathroom__img">
    <div class="bathroom__respect">
      <div class="conteiner">
        <h2 class="title__offers title__bathroom left animated">
          <?php the_field('second_block-title')?>
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line left animated" />
        <p class="bounce animated">
          <?php the_field('second_block-desc')?>
        </p>
        <br />
        <ul class="right animated">
          <li>
            <p class="bathroom__text">
              <?php the_field('second_block-ul1')?>
            </p>
          </li>
          <br />
          <li>
            <p class="bathroom__text">
              <?php the_field('second_block-ul2')?>
            </p>
          </li>
          <br />
          <li>
            <p class="bathroom__text">
              <?php the_field('second_block-ul3')?>
            </p>
          </li>
          <br />
          <li>
            <p class="bathroom__text">
              <?php the_field('second_block-ul4')?>
            </p>
          </li>
          <br />
          <li>
            <p class="bathroom__text">
              <?php the_field('second_block-ul5')?>
            </p>
          </li>
          <br>
          <li>
            <p class="bathroom__text">
              <?php the_field('second_block-ul6')?>
            </p>
          </li>
          <br>
          <li>
            <p class="bathroom__text">
              <?php the_field('second_block-ul7')?>
            </p>
          </li>
          <br>
          <li>
            <p class="bathroom__text">
              <?php the_field('second_block-ul8')?>
            </p>
          </li>
        </ul>
        <h2 class="title__offers title__bathroom left animated">
          <?php the_field('third_block-title')?>
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line left animated" />
        <p class="title__desc title__desc__offers bathroom__desc">
          <?php the_field('third_block-desc')?>
        </p>
        <ul class="right animated">
          <li>
            <p class="bathroom__text">
              <?php the_field('third_block-ul1')?>
            </p>
          </li>
          <br />
          <li>
            <p class="bathroom__text">
              <?php the_field('third_block-ul2')?>
            </p>
          </li>
          <br />
          <li>
            <p class="bathroom__text">
              <?php the_field('third_block-ul3')?>
            </p>
          </li>
          <br />
          <li>
            <p class="bathroom__text">
              <?php the_field('third_block-ul4')?>
            </p>
          </li>
          <br />
          <li>
            <p class="bathroom__text">
              <?php the_field('third_block-ul5')?>
            </p>
          </li>
          <br>
          <li>
            <p class="bathroom__text">
              <?php the_field('third_block-ul6')?>
            </p>
          </li>
          <br>
          <li>
            <p class="bathroom__text">
              <?php the_field('third_block-ul7')?>
            </p>
          </li>
          <br>
          <li>
            <p class="bathroom__text">
              <?php the_field('third_block-ul8')?>
            </p>
          </li>
        </ul>
        <img src="<?php the_field('third_block-img-bottom')?>" alt="" class="bathroom__img">
        <h2 class="title__offers title__bathroom left animated">
          <?php the_field('fourth_block-title')?>
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line left animated" />
        <p class="bounce animated">
          <?php the_field('fourth_block-desc')?>
          <br>
          <br>
          <?php the_field('fourth_block-desc-2')?>
        </p>
        <br />
        <div class="type__desc">
          <div class="type__desc-title">
            <b>
              <?php the_field('fourth_block-type1-title')?>
            </b>
          </div>
          <div class="type__desc-subtitle">
            <?php the_field('fourth_block-type1-desc')?>
          </div>
          <div class="type__desc-title">
            <b>
              <?php the_field('fourth_block-type2-title')?>
            </b>
          </div>
          <div class="type__desc-subtitle">
            <?php the_field('fourth_block-type2-desc')?>
          </div>
          <div class="type__desc-title">
            <b>
              <?php the_field('fourth_block-type3-title')?>
            </b>
          </div>
          <div class="type__desc-subtitle">
            <?php the_field('fourth_block-type3-desc')?>
          </div>
          <div class="type__desc-title">
            <b>
              <?php the_field('fourth_block-type4-title')?>
            </b>
          </div>
          <div class="type__desc-subtitle">
            <?php the_field('fourth_block-type4-desc')?>
          </div>
          <div class="type__desc-title">
            <b>
              <?php the_field('fourth_block-type5-title')?>
            </b>
          </div>
          <div class="type__desc-subtitle">
            <?php the_field('fourth_block-type5-desc')?>
          </div>
          <div class="type__desc-title">
            <b>
              <?php the_field('fourth_block-type6-title')?>
            </b>
          </div>
          <div class="type__desc-subtitle">
            <?php the_field('fourth_block-type6-desc')?>
          </div>
          <div class="type__desc-title">
            <b>
              <?php the_field('fourth_block-type7-title')?>
            </b>
          </div>
          <div class="type__desc-subtitle">
            <?php the_field('fourth_block-type7-desc')?>
          </div>
        </div>
        </section>
      <section class="offers">
        <div class="conteiner">
          <div class="offers_1">
            <img class="left animated" src="<?php the_field('fifth_block-img')?>" alt="" style="align-self: baseline;" />
            <div class="offres_1__desc right animated">
              <h2 class="title title__offers">
                <?php the_field('fifth_block-title')?>
              </h2>
              <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line" />
              <p class="title__desc title__desc__offers">
                <?php the_field('fifth_block-desc')?>
              </p>
              <a class="btn btn__offers" href="#"> Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="contact__form" id="contact">
        <div class="conteiner">
          <div class="form__decor bounce animated">
            <legend class="title title__form">Contact us
            </legend>
            <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line work__line" style = "padding-bottom:20px;" />
            <?php echo do_shortcode('[contact-form-7 id="5" title="Контактная форма 1"]')?>
          </div>
        </div>
      </section>
      <?php
get_footer();
