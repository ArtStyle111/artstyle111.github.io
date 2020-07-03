<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ScotRuss
 */

get_header();
?>

<section class="main__offer" style="background: url( <?php the_field ('bg_heading') ?>) no-repeat center/cover;";>
            <div class="conteiner">
                <div class="main__offer__content animated fadeInDown">
                    <h1 class="title">
                        <?php the_field ('main_')?>
                    </h1>
                    <p class="title__desc">
					<?php the_field ('heading__desc')?>
                    </p>
                    <a class="btn btn__border" href="#"><?php the_field ('btn_contact-main')?></a>
                </div>
            </div>
        </section>
		<section class="offers" id="main__offer">
            <div class="conteiner">
                <div class="offers_1">
                    <img class=" self left animated" src="<?php the_field ('offers_1_img')?>" alt="" />
                    <div class="offres_1__desc right animated">
                        <h2 class="title title__offers">
							<?php the_field ('offers_1_title')?>
                        </h2>
                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line" />
                        <p class="title__desc title__desc__offers">
						<?php the_field ('offers_1_desc')?>
                        </p>
                        <a class="btn btn__offers" href="#"> Our Portfolio</a>
                    </div>
                </div>
                <div class="offers_1">
                    <div class=" offres_1__desc__second left animated">
                        <h2 class="title title__offers">
						<?php the_field ('offers_2_title')?>
                        </h2>
                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line" />
                        <p class="title__desc title__desc__offers">
						<?php the_field ('offers_2_desc')?>
                        </p>
                        <a class="btn btn__offers btn__offers__second" href="#contact">Contact Us</a>
                    </div>
                    <img class="self right animated" src="<?php the_field ('offers_2_img')?>" alt="" />
                </div>
                <div class="offers_1">
                    <img class="self left animated" src="<?php the_field ('offers_3_img')?>" alt="" />
                    <div class="offres_1__desc right animated">
                        <h2 class="title title__offers">
						<?php the_field ('offers_3_title')?>
                        </h2>
                        <img class="" src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line" />
                        <p class="title__desc title__desc__offers">
							<?php the_field ('offers_3_desc')?>
                        </p>
                        <a class="btn btn__offers" href="https://www.yell.com/biz/scotruss-builders-glasgow-6805789/ ">Reviews</a>
                    </div>
                </div>
            </div>
		</section>
		<section class="services" id="services">
            <div class="conteiner">
                <h2 class="title title__services down animated">
                    <?php the_field ('our_services_title')?>
                </h2>
                <div class="services__offers">
                    <div class="services__offers__item down animated">
                        <img class="services__offers__item__desc__img" src="<?php the_field ('house_extensions-img')?>" alt="" />
                        <p class="services__offers__item__desc">
						<?php the_field ('house_extensions-title')?>
                        </p>
                    </div>
                    <div class="services__offers__item up animated">
                        <img class="services__offers__item__desc__img" src="<?php the_field ('home_improvement-img')?>" alt="" />
                        <p class="services__offers__item__desc">
						<?php the_field ('home_improvement-title')?>
                        </p>
                    </div>
                    <div class="services__offers__item down animated">
                        <img class="services__offers__item__desc__img" src="<?php the_field ('our_services-kitchen_installation-img')?>" alt="" />
                        <p class="services__offers__item__desc">
						<?php the_field ('our_services-kitchen_installation-title')?>
                        </p>
                    </div>
                    <div class="services__offers__item up animated">
                        <img class="services__offers__item__desc__img" src="<?php the_field ('our_services-bathroom_installation-img')?>" alt="" />
                        <p class="services__offers__item__desc">
						<?php the_field ('our_services-bathroom_installation-title')?>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="work" id="work">
            <div class="conteiner">
                <h3 class="title title__work down animated">
                    <?php the_field('we_do-title')?>
                </h3>
                <img class="line work__line" src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" />
                <div class="work__items">
                    <figure class="imghvr-flip-horiz down animated" style="background: #5badad;">
                        <img src="<?php the_field('garden_rooms-img')?>" />
                        <p class="work__item__title hide">
                            <?php the_field('garden_rooms-title')?>
                        </p>
                        <figcaption style="background: #ff5400;">
                            <p class="work__item__title">
							<?php the_field('garden_rooms-title')?>
                            </p>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    <figure class="imghvr-flip-horiz up animated" style="background: #5badad;">
                        <img src="<?php the_field('bathroom_installation-img')?>" />
                        <p class="work__item__title">
							<?php the_field('bathroom_installation-title')?>
                        </p>
                        <figcaption style="background: #ff5400;">
                            <p class="work__item__title">
							<?php the_field('bathroom_installation-title')?>
                            </p>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    <figure class="imghvr-flip-horiz down animated" style="background: #5badad;">
                        <img src="<?php the_field('house_extension-img')?>" />
                        <p class="work__item__title">
						<?php the_field('house_extension-title')?>
                        </p>
                        <figcaption style="background: #ff5400;">
                            <p class="work__item__title">
							<?php the_field('house_extension-title')?>
                            </p>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    <figure class="imghvr-flip-horiz up animated" style="background: #5badad;">
                        <img src="<?php the_field('kitchen_installation-img')?>" />
                        <p class="work__item__title">
						<?php the_field('kitchen_installation-title')?>
                        </p>
                        <figcaption style="background: #ff5400;">
                            <p class="work__item__title">
							<?php the_field('kitchen_installation-title')?>
                            </p>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    <figure class="imghvr-flip-horiz down animated" style="background: #5badad;">
                        <img src="<?php the_field('commercial_work-img')?>" />
                        <p class="work__item__title">
						<?php the_field('commercial_work-title')?>
                        </p>
                        <figcaption style="background: #ff5400;">
                            <p class="work__item__title">
							<?php the_field('commercial_work-title')?>
                            </p>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    <figure class="imghvr-flip-horiz up animated" style="background: #5badad;">
                        <img class="self" src="<?php the_field('stretch_ceilings-img')?>" />
                        <p class="work__item__title">
						<?php the_field('stretch_ceilings-title')?>
                        </p>
                        <figcaption style="background: #ff5400;">
                            <p class="work__item__title">
							<?php the_field('stretch_ceilings-title')?>
                            </p>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
                <div class="offers_1">
                    <div class="offres_1__desc__second left animated">
                        <h2 class="title title__offers">
						<?php the_field('4_block-first-offer-title')?>
                        </h2>
                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line" />
                        <p class="title__desc title__desc__offers">
							<?php the_field('4_block-first-offer-desc')?>
                            <br />
                            <br />
                            <span class="bold"><?php the_field('4_block-first-offer-desc-phone')?></span>
                        </p>
                        <a class="btn btn__offers btn__offers__second" href="#contact">Contact Us</a>
                    </div>
                    <img class="blog__like right animated" src="<?php the_field('4_block-first-offer-img')?>" alt="" />
                </div>
                <div class="offers_1">
                    <img class="blog__like right animated" src="<?php the_field('4_block-second-offer-img')?>" alt="" />
                    <div class="offres_1__desc left animated">
                        <h2 class="title title__offers">
						<?php the_field('4_block-second-offer-title')?>
                        </h2>
                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line" />
                        <p class="title__desc title__desc__offers">
						<?php the_field('4_block-second-offer-desc')?>
                        </p>
                        <a class="btn btn__offers" href="#">Our Portfolio</a>
                    </div>
                </div>
                <div class="offers_1">
                    <div class=" offres_1__desc__second left animated">
                        <h2 class="title title__offers">
						<?php the_field('4_block-third-offer-title')?>
                        </h2>
                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line" />
                        <p class="title__desc title__desc__offers">
						<?php the_field('4_block-third-offer-desc')?>
                        </p>
                        <a class="btn btn__offers btn__offers__second" href="https://www.yell.com/biz/scotruss-builders-glasgow-6805789/ ">Reviews</a>
                    </div>
                    <img class="blog__like right animated" src="<?php the_field('4_block-third-offer-img')?>" alt="" />
                </div>
            </div>
        </section>
        <section class="testimonials">
            <div class="conteiner">
                <h2 class="title title__testimonials down animated">
                    What our clients think?
                </h2>
                <div class="slider up animated">
                    <div class="wrapper__slider">
                        <div class="slider__image">
                            <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/slider__img.png" alt="" />
                        </div>
                        <div class="slider__content">
                            <h4 class="title__slider">Excellent and Service and Price</h4>
                            <div class="slider__content__desc">
                                <p class="slider__coment">
                                    I have used ScotRuss Builders a number of times from renovating flats to small repairs and maintenance and handyman services and can honestly say that they have always given a quick and professional
                                    approach to all jobs at a very competitive price. All of ScotRuss workmen have been friendly and always left the place neat and tidy and took away any rubbish that was left. I can highly recommend
                                    ScotRuss Builders for all your Building jobs whatever your needs are large or small.
                                </p>
                                <div class="slider__content__bottom">
                                    <div class="slider__content__bottom__left">
                                        <p class="slider__content__name">Linda M.</p>
                                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/slider__star.png" alt="" />
                                    </div>
                                    <img style="align-self: flex-end;" src="<?php bloginfo('template_directory')?>/assets/image/main_page/slider__dec.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper__slider">
                        <div class="slider__image">
                            <img class="slider__man" src="<?php bloginfo('template_directory')?>/assets/image/main_page/slider__man.png" alt="" />
                        </div>
                        <div class="slider__content">
                            <h4 class="title__slider">Highly recommended builders</h4>
                            <div class="slider__content__desc">
                                <p class="slider__coment">
                                    We used Scottruss Builders to renovate our 3 bedroom bungalow. This included reconfiguring rooms, New bathroom and ensuite, New electrics, kitchen/ diner and New garage roof and decoration. They
                                    encountered several difficulties along the way but always came up with practical solutions. Eduard is a builder who loves his job and insists on the perfect finish. Alistair was really easy to deal with
                                    on the money side. They engaged with us fully along the way. They did a fantastic job and we are delighted with the result. Couldn't recommend them highly enough.
                                </p>
                                <div class="slider__content__bottom">
                                    <div class="slider__content__bottom__left">
                                        <p class="slider__content__name">Lawrence T.</p>
                                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/slider__star.png" alt="" />
                                    </div>
                                    <img style="align-self: flex-end;" src="<?php bloginfo('template_directory')?>/assets/image/main_page/slider__dec.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper__slider">
                        <div class="slider__image">
                            <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/A10-Logo-c-small.png" alt="" />
                        </div>
                        <div class="slider__content">
                            <h4 class="title__slider">Great building contractors for residential and commercial projects</h4>
                            <div class="slider__content__desc">
                                <p class="slider__coment">
                                    We have used ScotRuss on various projects including residential and commercial projects of various sizes. We cannot fault their professionalism, quality and service. There level of communication between
                                    client, subcontractors and design team is great which ensures a smooth project. We continue to use and recommended them to our clients and to others.
                                </p>
                                <div class="slider__content__bottom">
                                    <div class="slider__content__bottom__left">
                                        <p class="slider__content__name">A10 Architects Ltd</p>
                                        <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/slider__star.png" alt="" />
                                    </div>
                                    <img style="align-self: flex-end;" src="<?php bloginfo('template_directory')?>/assets/image/main_page/slider__dec.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact__form" id="contact">
            <div class="conteiner">
				
                <div class="form__decor bounce animated">
				<legend class="title title__form">Contact Us</legend>
				<img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Line.png" alt="line" class="line work__line" style = "padding-bottom:20px;" />
					<?php echo do_shortcode('[contact-form-7 id="5" title="Контактная форма 1"]')?>
                </div>
            </div>
        </section>
<?php

get_footer();
