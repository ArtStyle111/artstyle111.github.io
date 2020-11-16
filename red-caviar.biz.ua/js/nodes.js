! function(e) {
  (function() {
    try {
      e(function() {
        try {
          return e(".section-helper .cookieWarning").each(function() {
            try {
              var t, r, n, a;
              if (t = e(this), n = "allowCookie", a = -(t.innerHeight() + 10), r = localStorage.getItem(n), !r) return t.css({
                position: "fixed",
                bottom: a,
                opacity: 1
              }), t.animate({
                bottom: 10
              }, 150), t.find("i, .moreInfo").on("click", function() {
                try {
                  return localStorage.setItem(n, !0), t.animate({
                    bottom: a,
                    opacity: 0
                  }, 150)
                } catch (e) {
                  error_handler(e, "libs_nodes 3", arguments.callee)
                }
              })
            } catch (l) {
              error_handler(l, "libs_nodes 2", arguments.callee)
            }
          })
        } catch (t) {
          error_handler(t, "libs_nodes 1", arguments.callee)
        }
      })
    } catch (t) {
      error_handler(t, "libs_nodes 0", arguments.callee)
    }
  }).call(this), e(function() {
      try {
        e(".section-slider").each(function() {
          function t(t, r) {
            try {
              s.each(function() {
                try {
                  var n = e(this).find(">.svgwrap");
                  n.eq(t).addClass("hidden"), n.eq(r).removeClass("hidden")
                } catch (a) {
                  error_handler(a, "libs_nodes 8", arguments.callee)
                }
              })
            } catch (n) {
              error_handler(n, "libs_nodes 7", arguments.callee)
            }
          }

          function r(t, r) {
            try {
              h.each(function() {
                try {
                  var n = e(this).find(">.textable");
                  n.eq(t).addClass("hidden"), n.eq(r).removeClass("hidden")
                } catch (a) {
                  error_handler(a, "libs_nodes 10", arguments.callee)
                }
              })
            } catch (n) {
              error_handler(n, "libs_nodes 9", arguments.callee)
            }
          }
          try {
            var n = e(this),
              a = function() {
                try {
                  return e(this).closest(".node")[0] === n[0]
                } catch (t) {
                  error_handler(t, "libs_nodes 2", arguments.callee)
                }
              },
              l = n.find(".swiper-container").filter(a),
              o = n.find("[plp-slider-next]").filter(a),
              i = n.find("[plp-slider-previous]").filter(a),
              c = n.find("[plp-slider-pagination]").filter(a),
              d = n.find("[plp-slider-index]").filter(a),
              s = n.find("[plp-slider-page_icon]").filter(a).filter(function() {
                try {
                  return e(this).find(">.svgwrap").length > 1
                } catch (t) {
                  error_handler(t, "libs_nodes 3", arguments.callee)
                }
              });
            s.find(">.svgwrap").addClass("hidden");
            var h = n.find("[plp-slider-page_label]").filter(a).filter(function() {
              try {
                return e(this).find(">.textable").length > 1
              } catch (t) {
                error_handler(t, "libs_nodes 4", arguments.callee)
              }
            });
            h.find(">.textable").addClass("hidden");
            var u = (n.find(".metahtml > .code").filter(a), new Swiper(l.get(0), {
              autoHeight: !1,
              autoplay: {
                delay: 1 * l.attr("data-pause")
              },
              effect: "true" === l.attr("data-animated") ? "slide" : "fade",
              fadeEffect: {
                crossFade: !0
              },
              touchEventsTarget: "wrapper",
              mousewheelEventsTarged: "wrapper",
              on: {
                slideChange: function() {
                  try {
                    c.each(function() {
                      try {
                        e(this).children().filter(".is-active").removeClass("is-active"), e(this).children().eq(u.activeIndex).addClass("is-active")
                      } catch (t) {
                        error_handler(t, "libs_nodes 6", arguments.callee)
                      }
                    }), t(u.oldActiveIndex, u.activeIndex), r(u.oldActiveIndex, u.activeIndex), d.text(u.activeIndex + 1), u.oldActiveIndex = u.activeIndex
                  } catch (n) {
                    error_handler(n, "libs_nodes 5", arguments.callee)
                  }
                }
              }
            }));
            u.oldActiveIndex = u.activeIndex, t(u.oldActiveIndex, u.activeIndex), r(u.oldActiveIndex, u.activeIndex), n.on("slidenext", function(e) {
              try {
                u.isEnd ? u.slideTo(0) : u.slideNext(), e.stopPropagation()
              } catch (t) {
                error_handler(t, "libs_nodes 11", arguments.callee)
              }
            }), o.on("click", function() {
              try {
                n.trigger("slidenext")
              } catch (e) {
                error_handler(e, "libs_nodes 12", arguments.callee)
              }
            }), n.on("slideprev", function(e) {
              try {
                u.isBeginning ? u.slideTo(u.slides.length - 1) : u.slidePrev(), e.stopPropagation()
              } catch (t) {
                error_handler(t, "libs_nodes 13", arguments.callee)
              }
            }), i.on("click", function() {
              try {
                n.trigger("slideprev")
              } catch (e) {
                error_handler(e, "libs_nodes 14", arguments.callee)
              }
            }), c.children().on("click", function() {
              try {
                u.slideTo(e(this).index())
              } catch (t) {
                error_handler(t, "libs_nodes 15", arguments.callee)
              }
            }), plp.lazy.add(n, function() {
              try {
                u.update()
              } catch (e) {
                error_handler(e, "libs_nodes 16", arguments.callee)
              }
            }), n.find(".lazy").on("lazyload", function() {
              try {
                u.update()
              } catch (e) {
                error_handler(e, "libs_nodes 17", arguments.callee)
              }
            }), u.params.autoHeight && ! function p() {
              try {
                if (setTimeout(p, 40), u.animating || !u.slides.length) return;
                var e = u.wrapperEl.clientHeight,
                  t = u.slides[u.activeIndex].clientHeight;
                e !== t && u.update()
              } catch (r) {
                error_handler(r, "libs_nodes 18", arguments.callee)
              }
            }()
          } catch (f) {
            error_handler(f, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }),
    function() {
      try {
        e(function() {
          try {
            return e(".widget-cart-image").each(function() {
              try {
                var t;
                if (t = e(this).find(".colorbox"), !t.length) return;
                return t.colorbox({
                  maxWidth: "80%",
                  maxHeight: "80%"
                })
              } catch (r) {
                error_handler(r, "libs_nodes 2", arguments.callee)
              }
            })
          } catch (t) {
            error_handler(t, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }.call(this), e(function() {
      function t() {
        try {
          return "ontouchstart" in window || navigator.maxTouchPoints
        } catch (e) {
          error_handler(e, "libs_nodes 1", arguments.callee)
        }
      }
      try {
        e(".widget-before-after").each(function() {
          try {
            var r = e(this),
              n = r.find(".root");
            n.on("click", function(e) {
              try {
                e.preventDefault()
              } catch (t) {
                error_handler(t, "libs_nodes 3", arguments.callee)
              }
            });
            var a = n.find("> img"),
              l = n.find("> .handler");
            a.on("load", _.after(a.length, function() {
              try {
                n.css("height", n.height());
                var r = n.find("> .layer-before"),
                  o = r.find("> .wrap"),
                  i = a.eq(0),
                  c = i.width(),
                  d = i.height();
                i.removeAttr("style").appendTo(o);
                var s = n.find("> .layer-after"),
                  h = s.find("> .wrap"),
                  u = a.eq(1),
                  f = u.width(),
                  p = u.height();
                u.removeAttr("style").appendTo(h), o.add(h).css({
                  width: Math.max(c, f),
                  height: Math.max(d, p),
                  "max-width": "none"
                });
                var _ = n.width(),
                  m = n.offset().left,
                  g = o.offset().left,
                  y = o.width(),
                  b = 0,
                  v = function(e) {
                    try {
                      var t = e.pageX - m - b;
                      t < 0 && (t = 0), t > _ && (t = _), r.css("width", t), s.css("width", _ - t), o.css("right", -(_ / 2 - t)), h.css("left", _ / 2 - t), l.css("left", t);
                      var n = l.offset().left + 2;
                      n < g && l.css("left", t + g - n), n > g + y && l.css("left", t - (n - (g + y)))
                    } catch (a) {
                      error_handler(a, "libs_nodes 5", arguments.callee)
                    }
                  };
                t() ? n.on("move", v) : "hover" === n.data("trigger") ? (n.on("mousemove", v), n.on("mousedown", function(e) {
                  try {
                    e.preventDefault()
                  } catch (t) {
                    error_handler(t, "libs_nodes 6", arguments.callee)
                  }
                })) : "drag" === n.data("trigger") && n.on("mousedown", function(t) {
                  try {
                    b = e(t.target).closest(l).length ? t.pageX - l.offset().left : 0, e(document).on("mousemove.beforeafter", v), e(document).one("mouseup", function() {
                      try {
                        e(document).off("mousemove.beforeafter")
                      } catch (t) {
                        error_handler(t, "libs_nodes 8", arguments.callee)
                      }
                    }), t.preventDefault()
                  } catch (r) {
                    error_handler(r, "libs_nodes 7", arguments.callee)
                  }
                })
              } catch (w) {
                error_handler(w, "libs_nodes 4", arguments.callee)
              }
            }))
          } catch (o) {
            error_handler(o, "libs_nodes 2", arguments.callee)
          }
        })
      } catch (r) {
        error_handler(r, "libs_nodes 0", arguments.callee)
      }
    }),
    function() {
      try {
        e(function() {
          try {
            var t, r, n, a;
            if (r = e(".widget-comments-fb"), !r.length) return;
            if (t = r.find(".fb"), t.length) return n = "true" === t.attr("data-joint"), a = "http://" + location.host.replace(/^www\./, ""), n || (a += "/" + location.pathname), t.attr("data-href", a), t.attr("data-width", t.width()), e("head").append('<meta property="fb:app_id" content="' + t.data("apiid") + '"/>'), e('<div id="fb-root"></div>').appendTo("body"),
              function(e, t, r) {
                try {
                  var n, a = e.getElementsByTagName(t)[0];
                  if (e.getElementById(r)) return;
                  n = e.createElement(t), n.id = r, n.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8", a.parentNode.insertBefore(n, a)
                } catch (l) {
                  error_handler(l, "libs_nodes 2", arguments.callee)
                }
              }(document, "script", "facebook-jssdk")
          } catch (l) {
            error_handler(l, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }.call(this), e(function() {
      try {
        e(".widget-button").each(function() {
          try {
            var t = e(this),
              r = function() {
                try {
                  return e(this).closest(".widget-button")[0] === t[0]
                } catch (r) {
                  error_handler(r, "libs_nodes 2", arguments.callee)
                }
              },
              n = t.find("button").filter(r);
            n.is('[data-action="slideprev"]') && n.click(function() {
              try {
                t.closest(".widget-slider, .widget-tabs, .widget-form2, .section-slider").trigger("slideprev")
              } catch (e) {
                error_handler(e, "libs_nodes 3", arguments.callee)
              }
            }), n.is('[data-action="slidenext"]') && n.click(function() {
              try {
                t.closest(".widget-slider, .widget-tabs, .widget-form2, .section-slider").trigger("slidenext")
              } catch (e) {
                error_handler(e, "libs_nodes 4", arguments.callee)
              }
            })
          } catch (a) {
            error_handler(a, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }),
    function() {}.call(this), e(function() {}), e(function() {}),
    function() {}.call(this), e(function() {
      try {
        e(".widget-form2").each(function() {
          try {
            var t = e(this),
              r = function() {
                try {
                  return e(this).closest(".widget-form2")[0] === t[0]
                } catch (r) {
                  error_handler(r, "libs_nodes 2", arguments.callee)
                }
              },
              n = t.find(".swiper-container").filter(r);
            if (!n.length) return;
            var a = new Swiper(n.get(0), {
              autoHeight: "false" === n.attr("data-fixheight"),
              autoplay: !1,
              allowTouchMove: !1,
              effect: "true" === n.attr("data-animated") ? "slide" : "fade",
              fadeEffect: {
                crossFade: !0
              },
              touchEventsTarget: "wrapper",
              mousewheelEventsTarged: "wrapper",
              preventClicks: !1,
              on: {
                slideChangeTransitionStart: function() {
                  try {
                    t.trigger("change")
                  } catch (e) {
                    error_handler(e, "libs_nodes 3", arguments.callee)
                  }
                }
              }
            });
            t.closest(".modal").length && t.closest(".modal").on("shown.bs.modal", function() {
              try {
                a.update(), t.trigger("change")
              } catch (e) {
                error_handler(e, "libs_nodes 4", arguments.callee)
              }
            }), t.on("slidenext", function(e) {
              try {
                t.trigger("validate", [function() {
                  try {
                    a.isEnd || a.slideNext()
                  } catch (e) {
                    error_handler(e, "libs_nodes 6", arguments.callee)
                  }
                }]), e.stopPropagation()
              } catch (r) {
                error_handler(r, "libs_nodes 5", arguments.callee)
              }
            }), t.on("slideprev", function(e) {
              try {
                a.isBeginning || a.slidePrev(), e.stopPropagation()
              } catch (t) {
                error_handler(t, "libs_nodes 7", arguments.callee)
              }
            }), plp.lazy.add(t, function() {
              try {
                a.update()
              } catch (e) {
                error_handler(e, "libs_nodes 8", arguments.callee)
              }
            }), t.find(".lazy").on("lazyload", function() {
              try {
                a.update()
              } catch (e) {
                error_handler(e, "libs_nodes 9", arguments.callee)
              }
            }), a.params.autoHeight && ! function o() {
              try {
                if (setTimeout(o, 40), a.animating || !a.slides.length) return;
                var e = a.wrapperEl.clientHeight,
                  t = a.slides[a.activeIndex].clientHeight;
                e !== t && a.update()
              } catch (r) {
                error_handler(r, "libs_nodes 10", arguments.callee)
              }
            }()
          } catch (l) {
            error_handler(l, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }), e(function() {
      try {
        e(".widget-form-quiz").each(function() {
          try {
            var t = e(this),
              r = function() {
                try {
                  return e(this).closest(".widget-form-quiz")[0] === t[0]
                } catch (r) {
                  error_handler(r, "libs_nodes 2", arguments.callee)
                }
              },
              n = t.find(".swiper-container").filter(r),
              a = new Swiper(n.get(0), {
                autoHeight: "false" === n.attr("data-fixheight"),
                autoplay: !1,
                allowTouchMove: !1,
                effect: "true" === n.attr("data-animated") ? "slide" : "fade",
                fadeEffect: {
                  crossFade: !0
                },
                touchEventsTarget: "wrapper",
                mousewheelEventsTarged: "wrapper",
                preventClicks: !1,
                on: {
                  slideChangeTransitionStart: function() {
                    try {
                      t.trigger("change")
                    } catch (e) {
                      error_handler(e, "libs_nodes 3", arguments.callee)
                    }
                  }
                }
              });
            t.on("slidenext", function(e) {
              try {
                t.trigger("validate", [function() {
                  try {
                    a.isEnd || a.slideNext()
                  } catch (e) {
                    error_handler(e, "libs_nodes 5", arguments.callee)
                  }
                }]), e.stopPropagation()
              } catch (r) {
                error_handler(r, "libs_nodes 4", arguments.callee)
              }
            }), t.on("slideprev", function(e) {
              try {
                a.isBeginning || a.slidePrev(), e.stopPropagation()
              } catch (t) {
                error_handler(t, "libs_nodes 6", arguments.callee)
              }
            }), plp.lazy.add(t, function() {
              try {
                a.update()
              } catch (e) {
                error_handler(e, "libs_nodes 7", arguments.callee)
              }
            }), t.find(".lazy").on("lazyload", function() {
              try {
                a.update()
              } catch (e) {
                error_handler(e, "libs_nodes 8", arguments.callee)
              }
            }), a.params.autoHeight && ! function o() {
              try {
                if (a.animating || !a.slides.length) return;
                var e = a.wrapperEl.clientHeight,
                  t = a.slides[a.activeIndex].clientHeight;
                e !== t && a.update(), setTimeout(o, 40)
              } catch (r) {
                error_handler(r, "libs_nodes 9", arguments.callee)
              }
            }()
          } catch (l) {
            error_handler(l, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }), e(function() {
      try {
        return e(".widget-gallery").each(function() {
          try {
            var t = e(this).find(".fancybox");
            if (!t.length) return;
            var r = _.uniqueId("group");
            if (t.attr("data-group", r), t.length) {
              var r = t.attr("data-group"),
                n = [],
                a = e('.fancybox[data-group="' + r + '"]');
              a.each(function() {
                try {
                  n.push({
                    src: e(this).attr("href")
                  })
                } catch (t) {
                  error_handler(t, "libs_nodes 2", arguments.callee)
                }
              }), t.on("click", function(r) {
                try {
                  var l = a.index(e(this).closest(t));
                  e.fancybox.open(n, {
                    loop: !0,
                    lang: "en",
                    i18n: {
                      en: {
                        CLOSE: "",
                        NEXT: "",
                        PREV: "",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "",
                        PLAY_STOP: "",
                        FULL_SCREEN: "",
                        THUMBS: "",
                        DOWNLOAD: "",
                        SHARE: "",
                        ZOOM: ""
                      }
                    },
                    buttons: ["zoom", "close"]
                  }, l), r.preventDefault()
                } catch (o) {
                  error_handler(o, "libs_nodes 3", arguments.callee)
                }
              })
            }
          } catch (l) {
            error_handler(l, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }), e(function() {
      try {
        e(".widget-hamburger").each(function() {
          try {
            var t = e(this),
              r = function() {
                try {
                  return e(this).closest(".widget-hamburger")[0] === t[0]
                } catch (r) {
                  error_handler(r, "libs_nodes 2", arguments.callee)
                }
              },
              n = t.find("[plp-hamburger-toggle]").filter(r),
              a = t.find("[plp-hamburger-menu]").filter(r);
            a.hasClass("is-collapsed") && plp.lazy.add(t, function(e) {
              try {
                a.show(), plp.lazy.force(a), a.hide()
              } catch (t) {
                error_handler(t, "libs_nodes 3", arguments.callee)
              }
            }), n.on("click", function() {
              try {
                if (a.is(":animated")) return;
                n.toggleClass("is-collapsed"), a.toggleClass("is-collapsed"), n.toggleClass("is-expanded"), a.toggleClass("is-expanded"), a.slideToggle()
              } catch (e) {
                error_handler(e, "libs_nodes 4", arguments.callee)
              }
            })
          } catch (l) {
            error_handler(l, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }), e(function() {
      try {
        e(".widget-hover").each(function() {
          try {
            var t = e(this),
              r = t.find("[plp-hover]").filter(function() {
                try {
                  return e(this).closest(".widget-hover")[0] === t[0]
                } catch (r) {
                  error_handler(r, "libs_nodes 2", arguments.callee)
                }
              });
            r.on("mouseenter", function() {
              try {
                r.addClass("hover"), r.addClass("animated"), setTimeout(function() {
                  try {
                    r.removeClass("animated")
                  } catch (e) {
                    error_handler(e, "libs_nodes 4", arguments.callee)
                  }
                }, r.data("duration"))
              } catch (e) {
                error_handler(e, "libs_nodes 3", arguments.callee)
              }
            }), r.on("mouseleave", function() {
              try {
                r.removeClass("hover"), r.addClass("animated"), setTimeout(function() {
                  try {
                    r.removeClass("animated")
                  } catch (e) {
                    error_handler(e, "libs_nodes 6", arguments.callee)
                  }
                }, r.data("duration"))
              } catch (e) {
                error_handler(e, "libs_nodes 5", arguments.callee)
              }
            })
          } catch (n) {
            error_handler(n, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }), e(function() {
      try {
        e(".widget-image").each(function() {
          try {
            e(this).find(".stack-image-content").each(function() {
              try {
                var t, r;
                return t = e(this), r = t.attr("stack_hover_effect"), r && (r = JSON.parse(r), stackEffects.getInstance(r.effectType, t.get(0), {
                  effectType: r.effectType,
                  disableScale: r.disableScale,
                  style: r.style
                })), t.removeAttr("stack_hover_effect")
              } catch (n) {
                error_handler(n, "libs_nodes 2", arguments.callee)
              }
            });
            var t = e(this).find(".fancybox");
            if (t.length) {
              var r = t.attr("data-group"),
                n = [],
                a = 0;
              if (r) {
                var l = e('.fancybox[data-group="' + r + '"]');
                l.each(function() {
                  try {
                    n.push({
                      src: e(this).attr("href")
                    }), e(this).attr("href") === t.attr("href") && (a = l.index(t))
                  } catch (r) {
                    error_handler(r, "libs_nodes 3", arguments.callee)
                  }
                })
              } else n.push({
                src: t.attr("href")
              });
              t.on("click", function(t) {
                try {
                  e.fancybox.open(n, {
                    loop: !0,
                    lang: "en",
                    i18n: {
                      en: {
                        CLOSE: "",
                        NEXT: "",
                        PREV: "",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "",
                        PLAY_STOP: "",
                        FULL_SCREEN: "",
                        THUMBS: "",
                        DOWNLOAD: "",
                        SHARE: "",
                        ZOOM: ""
                      }
                    },
                    buttons: ["zoom", "close"]
                  }, a), t.preventDefault()
                } catch (r) {
                  error_handler(r, "libs_nodes 4", arguments.callee)
                }
              })
            }
          } catch (o) {
            error_handler(o, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }), e(function() {
      try {
        e(".widget-increasingdigits").each(function() {
          try {
            var t = new RegExp("([0-9]+)", "g"),
              r = "<span class='digits-wrapper'>$1</span>",
              n = e(this).find(".digits"),
              a = 1e3 * parseFloat(n.attr("data-animation-duration")) || 0;
            n.find("*").andSelf().each(function() {
              try {
                var n = 3;
                e(this).contents().filter(function() {
                  try {
                    return this.nodeType === n
                  } catch (e) {
                    error_handler(e, "libs_nodes 3", arguments.callee)
                  }
                }).each(function() {
                  try {
                    var n = e(this).parent(),
                      a = this.textContent.replace(t, r);
                    e(this).replaceWith(a), n.find(".digits-wrapper").each(function() {
                      try {
                        e(this).data("data-number", e(this).text()).text("0")
                      } catch (t) {
                        error_handler(t, "libs_nodes 5", arguments.callee)
                      }
                    })
                  } catch (l) {
                    error_handler(l, "libs_nodes 4", arguments.callee)
                  }
                })
              } catch (a) {
                error_handler(a, "libs_nodes 2", arguments.callee)
              }
            }), plp.lazy.add(e(this), function(t) {
              try {
                t.find(".digits-wrapper").each(function() {
                  try {
                    e(this).animateNumber({
                      number: e(this).data("data-number")
                    }, a)
                  } catch (t) {
                    error_handler(t, "libs_nodes 7", arguments.callee)
                  }
                })
              } catch (r) {
                error_handler(r, "libs_nodes 6", arguments.callee)
              }
            }, 0)
          } catch (l) {
            error_handler(l, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }), e(function() {
      try {
        e(".widget-slide-share").each(function() {
          try {
            var t = e(this).find(".slide"),
              r = t.attr("data-iframe-string");
            if (r) {
              var n = r.match(/.*?src="(.*?)"/);
              if (n) {
                var a = n[1];
                a && t.append('<iframe class="slide-share" src=' + a + " allowfullscreen></iframe>")
              }
            }
          } catch (l) {
            error_handler(l, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }), e(function() {
      try {
        e(".widget-slider").each(function() {
          function t(t, r) {
            try {
              s.each(function() {
                try {
                  var n = e(this).find(">.svgwrap");
                  n.eq(t).addClass("hidden"), n.eq(r).removeClass("hidden")
                } catch (a) {
                  error_handler(a, "libs_nodes 7", arguments.callee)
                }
              })
            } catch (n) {
              error_handler(n, "libs_nodes 6", arguments.callee)
            }
          }

          function r(t, r) {
            try {
              h.each(function() {
                try {
                  var n = e(this).find(">.textable");
                  n.eq(t).addClass("hidden"), n.eq(r).removeClass("hidden")
                } catch (a) {
                  error_handler(a, "libs_nodes 9", arguments.callee)
                }
              })
            } catch (n) {
              error_handler(n, "libs_nodes 8", arguments.callee)
            }
          }
          try {
            var n = e(this),
              a = function() {
                try {
                  return e(this).closest(".widget-slider")[0] === n[0]
                } catch (t) {
                  error_handler(t, "libs_nodes 2", arguments.callee)
                }
              },
              l = n.find(".swiper-container").filter(a),
              o = n.find("[plp-slider-next]").filter(a),
              i = n.find("[plp-slider-previous]").filter(a),
              c = n.find("[plp-slider-page]").filter(a),
              d = n.find("[plp-slider-index]").filter(a),
              s = n.find("[plp-slider-page_icon]").filter(a).filter(function() {
                try {
                  return e(this).find(">.svgwrap").length > 1
                } catch (t) {
                  error_handler(t, "libs_nodes 3", arguments.callee)
                }
              });
            s.find(">.svgwrap").addClass("hidden");
            var h = n.find("[plp-slider-page_label]").filter(a).filter(function() {
              try {
                return e(this).find(">.textable").length > 1
              } catch (t) {
                error_handler(t, "libs_nodes 4", arguments.callee)
              }
            });
            h.find(">.textable").addClass("hidden");
            var u = new Swiper(l.get(0), {
              autoHeight: "false" === l.attr("data-fixheight"),
              autoplay: {
                delay: 1 * l.attr("data-pause")
              },
              effect: "true" === l.attr("data-animated") ? "slide" : "fade",
              fadeEffect: {
                crossFade: !0
              },
              touchEventsTarget: "wrapper",
              mousewheelEventsTarged: "wrapper",
              on: {
                slideChange: function() {
                  try {
                    c.filter(".is-active").removeClass("is-active"), c.eq(u.activeIndex).addClass("is-active"), t(u.oldActiveIndex, u.activeIndex), r(u.oldActiveIndex, u.activeIndex), d.text(u.activeIndex + 1), u.oldActiveIndex = u.activeIndex
                  } catch (e) {
                    error_handler(e, "libs_nodes 5", arguments.callee)
                  }
                }
              }
            });
            u.oldActiveIndex = u.activeIndex, t(u.oldActiveIndex, u.activeIndex), r(u.oldActiveIndex, u.activeIndex), n.on("slidenext", function(e) {
              try {
                u.isEnd ? u.slideTo(0) : u.slideNext(), e.stopPropagation()
              } catch (t) {
                error_handler(t, "libs_nodes 10", arguments.callee)
              }
            }), o.on("click", function() {
              try {
                n.trigger("slidenext")
              } catch (e) {
                error_handler(e, "libs_nodes 11", arguments.callee)
              }
            }), n.on("slideprev", function(e) {
              try {
                u.isBeginning ? u.slideTo(u.slides.length - 1) : u.slidePrev(), e.stopPropagation()
              } catch (t) {
                error_handler(t, "libs_nodes 12", arguments.callee)
              }
            }), i.on("click", function() {
              try {
                n.trigger("slideprev")
              } catch (e) {
                error_handler(e, "libs_nodes 13", arguments.callee)
              }
            }), c.on("click", function() {
              try {
                u.slideTo(e(this).index())
              } catch (t) {
                error_handler(t, "libs_nodes 14", arguments.callee)
              }
            }), plp.lazy.add(n, function() {
              try {
                u.update()
              } catch (e) {
                error_handler(e, "libs_nodes 15", arguments.callee)
              }
            }), n.find(".lazy").on("lazyload", function() {
              try {
                u.update()
              } catch (e) {
                error_handler(e, "libs_nodes 16", arguments.callee)
              }
            }), u.params.autoHeight && ! function p() {
              try {
                if (setTimeout(p, 40), u.animating || !u.slides.length) return;
                var e = u.wrapperEl.clientHeight,
                  t = u.slides[u.activeIndex].clientHeight;
                e !== t && u.update()
              } catch (r) {
                error_handler(r, "libs_nodes 17", arguments.callee)
              }
            }()
          } catch (f) {
            error_handler(f, "libs_nodes 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_nodes 0", arguments.callee)
      }
    }),
    function(e, t, r, n) {}(jQuery, window, document), e(function() {}), e(function() {})
}($);