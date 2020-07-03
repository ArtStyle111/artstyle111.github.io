<?php
/**
* The template for displaying the footer
*
* Contains the closing of the #content div and all content after.
*
* @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
*
* @package ScotRuss
*/
?>
<footer class="footer">
  <div class="conteiner footer__conteiner">
    <img class="footer__img" src="<?php bloginfo('template_directory')?>/assets/image/main_page/footer_logo.png" alt="" />
    <div class="footer__content">
      <div class="footer__navigation">
        <h4 class="footer__title">Navigation:
        </h4>
        <ul class="nav">
          <li class="footer__link">
            <a href="#" class="footer__link">Home
            </a>
          </li>
          <li class="footer__link">
            <a href="#" class="footer__link">House extensions
            </a>
          </li>
          <li class="footer__link">
            <a href="#" class="footer__link">New builds
            </a>
          </li>
          <li class="footer__link">
            <a href="#" class="footer__link">Building services
            </a>
          </li>
          <li class="footer__link">
            <a href="#" class="footer__link">Gallery
            </a>
          </li>
          <li class="footer__link">
            <a href="#" class="footer__link">Contact
            </a>
          </li>
          <li class="footer__link">
            <a href="#" class="footer__link">Blog
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__contact">
        <h4 class="footer__title">Contact Us
        </h4>
        <ul class="nav">
          <li class="footer__link">
            <a class="footer__link" href="tel:0141 266 0012">0141 266 0012
            </a>
            <br />
          </li>
          <li class="footer__link">
            <a class="footer__link" href="tel:0794 947 2212">0794 947 2212
            </a>
            <br />
          </li>
          <li class="footer__link">
            <a class="footer__link" href="mailto:eduard@scotruss.co.uk">eduard@scotruss.co.uk
            </a>
          </li>
        </ul>
        <h4 class="footer__title footer__title__social">Our social network:
        </h4>
        <div class="footer__icon">
          <a href="https://www.facebook.com/ScotRuss-Builders-720036615004180/?modal=admin_todo_tour">
            <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/scotruss_builders/">
            <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Instagram.png" alt="" />
          </a>
          <a href="https://www.yell.com/biz/scotruss-builders-glasgow-6805789/">
            <img src="<?php bloginfo('template_directory')?>/assets/image/main_page/Yell.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <p class="copyright">© 2004 Glasgow, Scotland
  </p>
</footer>
<script src="<?php bloginfo('template_directory')?>/assets/lightbox2-2.11.1/dist/js/lightbox-plus-jquery.min.js">
</script>
<script src="<?php bloginfo('template_directory')?>/assets/js/jquery.js">
</script>
<script src="<?php bloginfo('template_directory')?>/assets/js/slick.min.js">
</script>
<script src="<?php bloginfo('template_directory')?>/assets/js/script.js">
</script>
<script src="<?php bloginfo('template_directory')?>/assets/js/main-slider.js">
</script>
<?php wp_footer(); ?>
</body>
</html>
