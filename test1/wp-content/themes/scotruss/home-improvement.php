<?php
/**
* The template for displaying archive pages
*
* Template Name: home-improvement
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
<section class="kitchen">
  <div class="conteiner">
    <h1 class="title title__page">
      <?php the_field('home_improvement_main-title')?>
      <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
    </h1>
    <div class="offers_1 gardenroom__offers_1">
      <div class=" offres_1__desc__second bathroom__offers left animated">
        <h2 class="title title__offers title__bathroom title__home__improvement">
          <?php the_field('first_block-title')?>​​
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line" />
        <p class="title__desc title__desc__offers bathroom__desc">
          <span class="bold">
            <?php the_field('first_block_desc_bold')?>
          </span>
          <br />
          <?php the_field('first_block_desc')?>
        </p>
      </div>
      <img class="blog__like right animated" src="<?php the_field('first_block_img')?>" alt="" />
    </div>
    <p class="title__desc title__desc__offers bathroom__desc gardenroom__text">
      <?php the_field('first_block_desc_2')?>
      <br>
      <br>
      <?php the_field('first_block_desc_3')?>
    </p>
    <img class="bathroom__img" src="<?php the_field('first_block_img_2')?>" alt="" />
    <div class="offers_1 gardenroom__offers_1">
      <div class=" offres_1__desc__second left animated">
        <h2 class="title title__offers title__bathroom">
          <?php the_field('second_block_title')?>
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line" />
        <p class="title__desc title__desc__offers bathroom__desc">
          <?php the_field('second_block_desc')?>
        </p>
        <ul class="bathroom__text">
          <li>
            <p>
              <?php the_field('second_block_list_1')?>
            </p>
          </li>
          <br />
          <li>
            <p>
              <?php the_field('second_block_list_2')?>
            </p>
          </li>
          <br />
          <li>
            <p>
              <?php the_field('second_block_list_3')?>
            </p>
          </li>
          <br />
          <li>
            <p>
              <?php the_field('second_block_list_4')?>
            </p>
          </li>
          <br />
          <li>
            <p>
              <?php the_field('second_block_list_5')?>
            </p>
          </li>
          <br />
          <li>
            <p>
              <?php the_field('second_block_list_6')?>
            </p>
          </li>
          <br />
          <li>
            <p>
              <?php the_field('second_block_list_7')?>
            </p>
          </li>
        </ul>
        <div class="bathroom__collage stretch__collage up animated">
          <img class="self__bathroom" src="<?php the_field('second__block_img_1')?>" alt="" />
          <img class="self__bathroom" src="<?php the_field('second__block_img_2')?>" alt="" />
          <img class="self__bathroom" src="<?php the_field('second_block_img_3')?>" alt="" />
        </div>
        <p class="title__desc title__desc__offers bathroom__desc">                     
          <span class="bold">
            <?php the_field('third_block_title')?>
          </span>
        </p>
        <div class="home__improvement_1">
          <div class="home__improvement__ul">
            <ul class="bathroom__text">
              <li>
                <p>
                  <?php the_field('third_block_list_1')?>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <?php the_field('third_block_list_2')?>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <?php the_field('third_block_list_3')?>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <?php the_field('third_block_list_4')?>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <?php the_field('third_block_list_5')?>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <?php the_field('third_block_list_6')?>
                </p>
              </li>
            </ul>
          </div>
          <div class="home__improvement__ul">
            <ul class="bathroom__text">
              <li>
                <p>
                  <?php the_field('third_block_list_7')?>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <?php the_field('third_block_list_8')?>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <?php the_field('third_block_list_9')?>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <?php the_field('third_block_list_10')?>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <?php the_field('third_block_list_11')?>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <?php the_field('third_block_list_12')?>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="offers_1 home__improvement__up">
      <img class=" self left animated" src="<?php the_field('fourth_block_img')?>" alt="" />
      <div class="offres_1__desc right animated">
        <h2 class="title title__offers">
          <?php the_field('fourth_block_title')?>
        </h2>
        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line" />
        <p class="title__desc title__desc__offers">
          <?php the_field('fourth_block_desc')?>
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
      <legend class="title title__form">Contact Us
      </legend>
      <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line work__line" style = "padding-bottom:20px;" />
      <?php echo do_shortcode('[contact-form-7 id="5" title="Контактная форма 1"]')?>
    </div>
  </div>
</section>
<?php
get_footer();
