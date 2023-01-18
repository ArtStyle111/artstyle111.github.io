# AUDIOMEE
## BEST PRACTICES AND GUIDELINES

This documentation is based on the development and workflow for Wordpress Themes, but it can be adapted to any other frontend workflow.

The theme for the design implementation, can be based in any WordPress theme starter-kit or created from scratch.

You can use any option of your choice, and with which you feel more comfortable in the development, the purpose of this information is to stipulate only basic principles that must be followed in our developments workflow in order to standardize our projects

The documentation will only address specific issues, assuming that the developer already has other knowledge base


## Contents

- [Full Feature List](#full-feature-list)
- [Audiomee Project structure](#audiomee-project-structure)
- [Prerequisites](#prerequisites)
	- [Available CLI commands](#available-cli-commands)
  - [WordPress](#wordpress)
  - [CSS](#css)
    - [Architecture](#architecture)
    - [Grid System](#grid-system)
    - [Unit Dimensions](#unit-dimensions)
    - [Links](#links)
  - [JavaScript](#javascript)
  - [Mobile First Design](#mobile-first-design)
- [Development Guidelines](#development-guidelines)
- [Standard Theme Development Process](#standard-theme-development-process)
	- [Setup](#setup)
	- [Development](#development)
	- [Production](#production)
  - [Deployment](#deployment)
  - [Oneliner Cheatsheet](#oneliner-cheatsheet)
- [Special Recommendations](#special-recommendations)
	

## Full Feature List

- [x] gulp build process
	- [x] Dev Mode
		- [x] Auto browser refresh/injection on save (even for php files!) powered by BrowserSync
		- [x] JavaScript ES6+ support via Babel
		- [x] JavaScript linting via eslint
		- [x] SCSS/SASS compilation and sourcemaps powered by libsass
		- [x] SCSS linting via scss-lint (waiting for first stable release of scss-lint)
		- [x] CSS prefixing via autoprefixer
		- [x] Minified CSS 
		- [x] Uglify, dedupe JS
		- [x] Theme image optimization
	- [x] Build process easily extendable	

## Audiomee Project structure

Before installing the starter-kit should adapt the WP structure to look like this. Deliberately kept local and remote configuration as identical as possible.

```bash
PROJECT_ROOT/
├─ staging/ # The staging root
│  ├─ .quarantine # Hosting folder 
│  ├─ .tmb # Hosting folder access
│  ├─ access # .htpasswd folder 
│  ├─ wp-admin/ # This is the staging wp-admin folder 
│  ├─ wp-content/ # This is the staging wp-content folder 
│  │  ├─ plugins/ # Folder сontains all plugin's
│  │  ├─ uploads/ # Folder сontains all image's
│  │  ├─ themes/ # Folder сontains theme's
│  │  │  ├─ audiomee/ # Folder сontains your theme
│  │  │  │  ├─ assets/ # Folder сontains all style,fonts,javascript file's 
│  │  │  │  │  ├─ css/ # Style folder
│  │  │  │  │  │  ├─ fonts/ # Font folder
│  │  │  │  │  │  ├─ font.css/ # Includes fotns file 
│  │  │  │  │  │  ├─ header.css/ # Style for header
│  │  │  │  │  │  ├─ main-style.css/ # Style for all flexible content(ACF block's)
│  │  │  │  │  │  ├─ normalize.css/ # File witch reset browser style
│  │  │  │  │  ├─ js/ # Folder сontains javascript file's
│  │  │  │  │  │  ├─ main-js.js/ # Main js file
│  │  │  │  ├─ inc/ # Directory primary to place collections of functions 
│  │  │  │  ├─ languages/ # Folder сontains all lang support
│  │  │  │  ├─ partials/ # Folder сontains your template's
│  │  │  │  │  ├─ loop # Folder сontains all your ACF template's theme
│  │  │  │  │  │  ├─ elements/ # Folder сontains all ACF (flexsible content) template's
│  │  │  │  │  │  │  ├─ elements-3-advantage.php # Custom template
│  │  │  │  │  │  │  ├─ elements-advantage-repeat.php # Custom template
│  │  │  │  │  │  │  ├─ elements-banner-repeat.php # Custom template
│  │  │  │  │  │  │  ├─ elements-banner.php # Custom template
│  │  │  │  │  │  │  ├─ elements-block-with-color-cards.php # Custom template
│  │  │  │  │  │  │  ├─ elements-block-with-popup.php # Custom template
│  │  │  │  │  │  │  ├─ elements-blocks-promo.php # Custom template
│  │  │  │  │  │  │  ├─ elements-faq.php # Custom template
│  │  │  │  │  │  │  ├─ elements-flex-block-in-a-row.php # Custom template
│  │  │  │  │  │  │  ├─ elements-formtext-new.php # Custom template
│  │  │  │  │  │  │  ├─ elements-formtext.php # Custom template
│  │  │  │  │  │  │  ├─ elements-full-blocks-promo.php # Custom template
│  │  │  │  │  │  │  ├─ elements-hero-with-breadcrumb.php # Custom template
│  │  │  │  │  │  │  ├─ elements-imagetext-flex-table.php # Custom template
│  │  │  │  │  │  │  ├─ elements-imagetext-flex.php # Custom template
│  │  │  │  │  │  │  ├─ elements-job.php # Custom template
│  │  │  │  │  │  │  ├─ elements-konzept.php # Custom template
│  │  │  │  │  │  │  ├─ elements-logotext.php # Custom template
│  │  │  │  │  │  │  ├─ elements-single-models.php # Custom template
│  │  │  │  │  │  │  ├─ elements-slider-item.php # Custom template
│  │  │  │  │  │  │  ├─ elements-slider.php # Custom template
│  │  │  │  │  │  │  ├─ elements-testimonials-copy.php # Custom template
│  │  │  │  │  │  │  ├─ elements-text-banner.php # Custom template
│  │  │  │  │  │  ├─ loop-builder.php # Folder сontains your template's
│  │  │  │  │  ├─ site # Folder сontains all navigation file's 
│  │  │  │  │  │  ├─ site-dropdown-banner.php # File witch show promo block in dropdown
│  │  │  │  │  │  ├─ site-faq-simple.php # File сontains simple FAQ section
│  │  │  │  │  │  ├─ site-faq.php # File сontains comparison table
│  │  │  │  │  │  ├─ site-footer-content.php # File сontains footer content
│  │  │  │  │  │  ├─ site-footer-testimonials.php # File сontains testimonials
│  │  │  │  │  │  ├─ site-header.php # File сontains header content
│  │  │  │  │  │  ├─ site-nav.php # File сontains navigation 
│  │  │  │  ├─ template-parts/ # Folder contains post template-parts
│  │  │  │  ├─ gutenberg-page.php # File сontains Gutenberg block + ACF (Flexible Content) 
│  │  │  │  ├─ page.php # File сontains main template your page's
│  │  │  │  ├─ header.php # Default wordpress file of header
│  │  │  │  ├─ footer.php # Default wordpress file of footer
│  ├─ wp-includes/ # This is the staging wp-includes folder 
│  ├─ .htaccess # This is the default staging file's 
│  ├─ .htaccess.bk # This is the default staging file's
│  ├─ default.php # This is the default staging file's
│  ├─ index.php # This is the default staging file's
│  ├─ license.txt # This is the default staging file's
│  ├─ wp-activate.php # This is the default staging file's
│  ├─ wp-blog-header.php # This is the default staging file's
│  ├─ wp-comments-post.php # This is the default staging file's
│  ├─ wp-config-sample.php # This is the default staging file's
│  ├─ wp-config.php  # This is the default staging file's
#...
├─ wp-admin/ # The web root
├─ wp-content/ # The web root
├─ wp-includes/ # The web root
├─ .htaccess # The web root
├─ .htaccess.bk # The web root
├─ default.php # The web root
├─ index.php # The web root
├─ license.txt # The web root
├─ wp-activate.php # The web root
├─ wp-blog-header.php # The web root
├─ wp-comments-post.php # The web root
├─ wp-config-sample.php # The web root
├─ wp-config.php # The web root
```

## Prerequisites

- [underscores.me](https://underscores.me/) WordPress theme starter-kit
- Have [node and npm](https://nodejs.org/) installed on your system
- Have [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) globally installed
- Have [Composer](https://getcomposer.org/) installed

- *You can use [`nvm`](https://github.com/creationix/nvm) to manage the node versions installed on your computer*
- *You can use [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates) to update the node modules in your theme (Note that updating may break things, so be careful)* 

### Available CLI commands

`_s` comes packed with CLI commands tailored for WordPress theme development :

- `composer lint:wpcs` : checks all PHP files against [PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/).
- `composer lint:php` : checks all PHP files for syntax errors.
- `composer make-pot` : generates a .pot file in the `languages/` directory.
- `npm run compile:css` : compiles SASS files to css.
- `npm run compile:rtl` : generates an RTL stylesheet.
- `npm run watch` : watches all SASS files and recompiles them to css when they change.
- `npm run lint:scss` : checks all SASS files against [CSS Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/css/).
- `npm run lint:js` : checks all JavaScript files against [JavaScript Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/).
- `npm run bundle` : generates a .zip archive for distribution, excluding development and system files.

Those CLI command's will not work once we implement our theme structure on next step.

### WordPress

1. Read [the WordPress theme development guidelines](http://codex.wordpress.org/Theme_Development)
1. Understand [the WordPress template hierarchy](http://codex.wordpress.org/images/9/96/wp-template-hierarchy.jpg)
1. Understand [the WordPress Loop](http://codex.wordpress.org/The_Loop)
1. Understand [how WordPress helps with Data Validation/Sanitization](http://codex.wordpress.org/Data_Validation)
1. Read up on the following WordPress core APIs:
	- [the Plugin API](http://codex.wordpress.org/Plugin_API)
	- [the Shortcode API](http://codex.wordpress.org/Shortcode_API)
1. Understand when you should use a Custom Functionality Plugin instead of implementing functionality within a theme
 	- [Creating a custom functions plugin for end users](http://justintadlock.com/archives/2011/02/02/creating-a-custom-functions-plugin-for-end-users)
 	- [How to Create a Custom Functionality Plugin (And Why You Need One)](https://www.nutsandboltsmedia.com/how-to-create-a-custom-functionality-plugin-and-why-you-need-one/)
	
### CSS

There comes a point when writing CSS can be really difficult to keep up with due to the length of the stylesheet or the lack of CSS variables or functions.

A tool called a CSS preprocessor, offers a solution to some of the strains in dealing with CSS as it scales.
    
### Architecture
- Keep files hierarchy, separate css code by piece/components

```bash
sass/
|
|-- utilities/
|       - _variables.scss
|       - _mixins.scss
|       - _extends.scss
|
|- reset/
|       - _reset.scss
|       - _typography.scss
|
|- components/
|       - _example0.scss
|       - _example1.scss
|       - _example2.scss
|
|- layout/
|       - _example0_layout.scss
|       - _example1_layout.scss
|       - _example2_layout.scss
|
|- pages/
|       - _home.scss
|       - _settings.scss
|       - _another_page.scss
|
|- third-party-css/
|       – _bootstrap.scss
|
- main.scss
```

- Using variables
```bash
$main-color: #000000;
$main-bg: #FAFAFA;
body {
  background: $main-bg;
  color: $main-color;
}
```
- Avoid inline style
- Avoid using images as background on mobile device, instead use color gradiend/solid


### Grid System 

 - Use powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

### Unit Dimensions 

- There are two general kinds of units used for length and size in CSS: absolute and relative.
- Instead of define fixed widths for elements much less using absolute units, its recommended use relative or viewports units  like %, em, rem or vw vh

### Links

- [Sass Basics](https://sass-lang.com/guide)
- [Bootstrap](https://getbootstrap.com/)


### JavaScript
## Mobile First Design
As the term suggests, mobile-first design is an approach in which web designers and developers start product design or development for mobile devices first.

```bash
@media screen and (min-width: 400px)  {...}
@media screen and (min-width: 600px)  {...}
@media screen and (min-width: 1000px) {...}
@media screen and (min-width: 1400px) {...}
```

## Standard Theme Development Process
## Dev Environment

### Setup

1. Install WordPress and clear it of unnecessary default themes & plugins
1. Install starter-kit Theme
1. Clone/Download the contents of this repository into a directory in your WordPress `wp-content/themes` directory (eg: "my-theme") _this will be your "dev theme"_
1. Open the terminal and navigate to the dev theme, *eg:* `cd wp-content/themes/<my-theme>`
1. Run `npm install` to install all dev dependencies
1. Update to structure according to following example:
1. Start Developing!

```bash
MY-THEME/
├─ _src/ # Custom source folder
│  ├─ fonts/ # original files
│  ├─ images/ # original files
│  ├─ js/ # original files
│     ├─ page-specific/ 
│     ├─ vendor/ 
│  ├─ sass/ # original folder
├─ assets/ # custom folder
├─ inc/ # default folder
├─ js/ # default folder
├─ languages/ # default folder
├─ template-parts/ # Custom templates parts
│  ├─ partials/ # Custom template partials
├─ templates/ # New custom pages templates
├─ vendor/ # includes the Composer dependencies
├─ gulpfile.js # automate processes
├─ package-lock.json
├─ package.json # npm package file
├─ .gitignore
```



### Development
After the installation you can run gulp's command

> npm install

> gulp watch

after these commands, if everything goes normal it should open a new window in your primary browser.
### Production
It uses gulp task manager. You can all front-end related source files in "_src" directory. - if you want to check what happens in the command you can investigate gulpfile.js.

There are some gulp command for compiling tasks;

> gulp watch : `watches all files and recompiles them when they change`

> gulp & gulp build : `recompiles all files`

> gulp zip : `generates a .zip archive for distribution, excluding development and system files`
> gulp & gulp build : `recompiles all files`

- Assets directory contains only built files. Don't change anything in the assets directory.
- If you want to use gulp watch you should update localhost URL in gulpfile.js - it should be around line 161th.
### Deployment

Use the `main` branch as development branch, and merge to `staging` and `live` to respectively deploy to staging and live environments. If possible don't diverge staging from the main branch (i.e. make a commit to `main` and making another to `staging`). Try to keep the main branch always ahead of the other branches.


### Oneliner Cheatsheet




## Special Recommendations



### Help?

If you need help send me a [message](mailto:nuno@audiomee.com).

Last Update 11/01/2023
