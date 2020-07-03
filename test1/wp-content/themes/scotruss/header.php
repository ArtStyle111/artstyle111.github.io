<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ScotRuss
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="stylesheet" href="<?php bloginfo('template_directory')?>/assets/css/normalize.css" />
        <link rel="stylesheet" href="<?php bloginfo('template_directory')?>/assets/css/fonts.css" />
        <link rel="stylesheet" href="<?php bloginfo('template_directory')?>/assets/css/style.css" />
        <link rel="stylesheet" href="<?php bloginfo('template_directory')?>/assets/css/imagehover.min.css" />
        <link rel="stylesheet" href="<?php bloginfo('template_directory')?>/assets/css/animate.css" />
        <script src="<?php bloginfo('template_directory')?>/assets/js/lightbox2-2.11.1/dist/js/lightbox.js"></script>
        <link rel="stylesheet" href="<?php bloginfo('template_directory')?>/assets/lightbox2-2.11.1/dist/css/lightbox.min.css">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
