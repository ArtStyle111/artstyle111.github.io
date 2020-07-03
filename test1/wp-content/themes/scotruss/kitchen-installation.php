<?php
/**
 * The template for displaying archive pages
 *
 * Template Name: kitchen-installation
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
<section class="kitchen">
            <div class="conteiner">
                <h1 class="title title__page">
                    <?php the_field('kitchen_installation_title')?>
                    <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
                </h1>
                <div class="offers_1 gardenroom__offers_1">
                    <div class=" offres_1__desc__second bathroom__offers left animated">
                        <h2 class="title title__offers title__bathroom">
                            <?php the_field('first_block_title')?>
                        </h2>
                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line" />
                        <p class="title__desc title__desc__offers bathroom__desc">
                            <span class="bold"><?php the_field('first_block_title_2')?></span><br />
                            <br>
                            <?php the_field('first_block_desc')?>
                        </p>
                    </div>
                    <img class="blog__like right animated" src="<?php the_field('first_block_img')?>" alt="" />
                </div>
                <p class="title__desc title__desc__offers bathroom__desc gardenroom__text">
                    <span class="bold"><?php the_field('first_block_title_3')?></span>
                    <br />
                    <?php the_field('first_block_desc_2')?>
                </p>
                <img class="bathroom__img" src="<?php the_field('first_block_img_2')?>" alt="" />
                <div class="offers_1 gardenroom__offers_1">
                    <img class="blog__like right animated" src="<?php the_field('second_block_img')?>" alt="" />
                    <div class="offres_1__desc offres_1__desc__second bathroom__offers left animated">
                        <h2 class="title title__offers title__bathroom">
                            <?php the_field('second_block-title')?>
                        </h2>
                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line" />
                        <p class="title__desc title__desc__offers bathroom__desc">
                            <?php the_field('second_block-ul1')?>
                            <br />
                        </p>
                    </div>
                </div>
                <p class="title__desc title__desc__offers bathroom__desc">
                <?php the_field('second_block-ul2')?>
                    <br />
                    <br />
                    <?php the_field('second_block-ul3')?>
                    <br />
                    <br />
                    <?php the_field('second_block-ul4')?>
                    <br />
                    <br />
                    <?php the_field('second_block-ul5')?>
                </p>
                <div class="offers_1 gardenroom__offers_1">
                    <div class=" offres_1__desc__second bathroom__offers left animated">
                        <h2 class="title title__offers title__bathroom">
                            ​<?php the_field('third_block-title')?>
                        </h2>
                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line" />
                        <ul class="bathroom__text">
                            <li>
                                <p><?php the_field('third_block_ul_1')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_2')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_3')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_4')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_5')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_6')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_7')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_8')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_9')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_10')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_11')?></p>
                            </li>
                            <br />
                            <li>
                                <p><?php the_field('third_block_ul_12')?></p>
                            </li>
                        </ul>
                    </div>
                    <img class="blog__like right animated" src="<?php the_field('third_block_img')?>" alt="" />
                </div>
                <img src="<?php the_field('third_block_img_bottom')?>" alt="" class="bathroom__img" />
                <div class="offers_1 gardenroom__offers_1">
                    <div class=" offres_1__desc__second left animated">
                        <h2 class="title title__offers title__bathroom">
                            ​<?php the_field('fourth_block_title')?>
                        </h2>
                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line bathroom__line" />
                        <p class="title__desc title__desc__offers bathroom__desc">
                            <?php the_field('fourth_block_desc')?>
                        </p>
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
<?php get_footer();
