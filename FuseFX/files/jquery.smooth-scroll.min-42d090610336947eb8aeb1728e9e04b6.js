/*!
 * jQuery Smooth Scroll - v2.1.1 - 2017-01-01
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){var b="2.1.1",c={},d={exclude:[],excludeWithin:[],offset:0,direction:"top",delegateSelector:null,scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},e=function(b){var c=[],d=!1,e=b.dir&&"left"===b.dir?"scrollLeft":"scrollTop";return this.each(function(){var b=a(this);if(this!==document&&this!==window)return!document.scrollingElement||this!==document.documentElement&&this!==document.body?void(b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))):(c.push(document.scrollingElement),!1)}),c.length||this.each(function(){this===document.documentElement&&"smooth"===a(this).css("scrollBehavior")&&(c=[this]),c.length||"BODY"!==this.nodeName||(c=[this])}),"first"===b.el&&c.length>1&&(c=[c[0]]),c},f=/^([\-\+]=)(\d+)/;a.fn.extend({scrollable:function(a){var b=e.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=e.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(b,c){if(b=b||{},"options"===b)return c?this.each(function(){var b=a(this),d=a.extend(b.data("ssOpts")||{},c);a(this).data("ssOpts",d)}):this.first().data("ssOpts");var d=a.extend({},a.fn.smoothScroll.defaults,b),e=function(b){var c=function(a){return a.replace(/(:|\.|\/)/g,"\\$1")},e=this,f=a(this),g=a.extend({},d,f.data("ssOpts")||{}),h=d.exclude,i=g.excludeWithin,j=0,k=0,l=!0,m={},n=a.smoothScroll.filterPath(location.pathname),o=a.smoothScroll.filterPath(e.pathname),p=location.hostname===e.hostname||!e.hostname,q=g.scrollTarget||o===n,r=c(e.hash);if(r&&!a(r).length&&(l=!1),g.scrollTarget||p&&q&&r){for(;l&&j<h.length;)f.is(c(h[j++]))&&(l=!1);for(;l&&k<i.length;)f.closest(i[k++]).length&&(l=!1)}else l=!1;l&&(g.preventDefault&&b.preventDefault(),a.extend(m,g,{scrollTarget:g.scrollTarget||r,link:e}),a.smoothScroll(m))};return null!==b.delegateSelector?this.off("click.smoothscroll",b.delegateSelector).on("click.smoothscroll",b.delegateSelector,e):this.off("click.smoothscroll").on("click.smoothscroll",e),this}});var g=function(a){var b={relative:""},c="string"==typeof a&&f.exec(a);return"number"==typeof a?b.px=a:c&&(b.relative=c[1],b.px=parseFloat(c[2])||0),b};a.smoothScroll=function(b,d){if("options"===b&&"object"==typeof d)return a.extend(c,d);var e,f,h,i,j=g(b),k={},l=0,m="offset",n="scrollTop",o={},p={};console.log(j),j.px?e=a.extend({link:null},a.fn.smoothScroll.defaults,c):(e=a.extend({link:null},a.fn.smoothScroll.defaults,b||{},c),e.scrollElement&&(m="position","static"===e.scrollElement.css("position")&&e.scrollElement.css("position","relative")),d&&(j=g(d))),n="left"===e.direction?"scrollLeft":n,e.scrollElement?(f=e.scrollElement,j.px||/^(?:HTML|BODY)$/.test(f[0].nodeName)||(l=f[n]())):f=a("html, body").firstScrollable(e.direction),e.beforeScroll.call(f,e),k=j.px?j:{relative:"",px:a(e.scrollTarget)[m]()&&a(e.scrollTarget)[m]()[e.direction]||0},o[n]=k.relative+(k.px+l+e.offset),h=e.speed,"auto"===h&&(i=Math.abs(o[n]-f[n]()),h=i/e.autoCoefficient),p={duration:h,easing:e.easing,complete:function(){e.afterScroll.call(e.link,e)}},e.step&&(p.step=e.step),f.length?f.stop().animate(o,p):e.afterScroll.call(e.link,e)},a.smoothScroll.version=b,a.smoothScroll.filterPath=function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=d});