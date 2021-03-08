"use strict";

var dataNT1 = {
  hello: "Great, you're on the way to become a great coder!"
};

function logs(data) {
  console.log(data);
}

;
$(function () {
  // console.log(`Great, you're on the way to become a great coder!`);
  logs(dataNT1.hello);
});
var banner = new Swiper('.hero-banner', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var slide = new Swiper('.slide-thingtodo', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true
});
$('.slide-discovery').owlCarousel({
  loop: true,
  margin: 48,
  nav: true,
  navText: ["", "<a class='arrow'>Next</a>"],
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1440: {
      items: 3
    }
  }
});

function setNavigation() {
  // var path = window.location.pathname;
  // path = path.replace(/\/$/, "");
  // path = decodeURIComponent(path);
  // path = "." + path;
  // console.log(path);

  var current_page_URL = location.href;
  $(".nav a").each(function() {
      if ($(this).attr("href") !== "#") {
        var target_URL = $(this).prop("href");
        if (target_URL == current_page_URL) {
          $(this).closest('a').addClass('active-nav');
        }
      }
  });

  // $(".nav a").each(function () {
  //   var href = $(this).attr('href');
  //   if (path.substring(0, href.length) === href) $(this).closest('a').addClass('active-nav');
  // });
}

setNavigation();