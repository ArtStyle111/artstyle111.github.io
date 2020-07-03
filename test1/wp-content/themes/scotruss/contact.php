<?php
/**
 * The template for displaying archive pages
 *
 * Template Name: contact
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
<section class="contact">
            <div class="conteiner">
                <h1 class="title title__page">
                    <?php the_field('contact_main_title'); ?>
                    <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line building__line" />
                </h1>
                <div class="contact__display">
                    <div class="form__decor contact__page bounce animated">
                        <form action="" method="POST">
                        <legend class="title title__form">Contact Us
                        </legend>
                        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line work__line" style = "padding-bottom:20px;" />
                        <?php echo do_shortcode('[contact-form-7 id="5" title="Контактная форма 1"]'); ?>
                        </form>
                    </div>
                    <div class="offers_1 contact__offer">
                        <div class="offres_1__desc__second bathroom__offers left animated">
                            <h2 class="title title__offers title__bathroom">
                                <?php the_field('contact_title'); ?>
                            </h2>
                            <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/Line.png" alt="line" class="line" />
                            <p class="title__desc title__desc__offers">
                                <?php the_field('contact_desc'); ?>
                            </p>
                            <div class="contact__icon">
                                <div class="contact__icon__tel">
                                    <img class="blog__like" src="<?php bloginfo('template_directory'); ?>/assets/image/contact/tel__icon.png" alt="" />
                                    <div class="contact__numbers">
                                        <p>
                                            <a class="contact__phone" href="tel:0141 266 0012">0141 266 0012</a>
                                        </p>
                                        <p>
                                            <a class="contact__phone" href="tel:0794 947 2212">0794 947 2212</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="contact__icon__tel">
                                    <img class="blog__like" src="<?php bloginfo('template_directory'); ?>/assets/image/contact/mail__icon.png" alt="" />
                                    <div class="contact__numbers">
                                        <p>
                                            eduard@scotruss.co.uk
                                        </p>
                                    </div>
                                </div>
                                <div class="contact__icon__tel">
                                    <img class="blog__like" src="<?php bloginfo('template_directory'); ?>/assets/image/contact/location__icon.png" alt="" />
                                    <div class="contact__numbers">
                                        <p>
                                            Moffat Place, East Kilbride Glasgow, Scotland G75 8RX
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <iframe
                    class="contact__map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2972734508717!2d-4.233874684069436!3d55.7533379805535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846ecc3a23c25%3A0x2e794982012997b!2sScotRuss%20Builders!5e0!3m2!1sen!2sua!4v1593166806045!5m2!1sen!2sua"
                    width="1140"
                    height="410"
                    frameborder="0"
                    style="border: 0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                ></iframe>
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
                            <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/slider__img.png" alt="" />
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
                                        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/slider__star.png" alt="" />
                                    </div>
                                    <img style="align-self: flex-end;" src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/slider__dec.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper__slider">
                        <div class="slider__image">
                            <img class="slider__man" src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/slider__man.png" alt="" />
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
                                        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/slider__star.png" alt="" />
                                    </div>
                                    <img style="align-self: flex-end;" src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/slider__dec.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper__slider">
                        <div class="slider__image">
                            <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/A10-Logo-c-small.png" alt="" />
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
                                        <img src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/slider__star.png" alt="" />
                                    </div>
                                    <img style="align-self: flex-end;" src="<?php bloginfo('template_directory'); ?>/assets/image/main_page/slider__dec.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<?php get_footer(); ?>
