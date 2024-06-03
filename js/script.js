$(document).ready(function () {
  function isMobile() {
    return window.matchMedia("(max-width: 578px)").matches;
  }

  $(".footer__top__title").on("click", function () {
    if (isMobile()) {
      $(this)
        .closest(".footer__top__links")
        .find(".footer__top__link")
        .toggleClass("show");
      $(this).find("img").toggleClass("rotate");
      $(this).toggleClass("active");
    }
  });

  $(".accordion-list-item .item-heading").on("click", function (e) {
    e.preventDefault();
    if ($(this).find(".icon").hasClass("rotate")) {
      $(this).find(".icon").removeClass("rotate");
    } else {
      $(this)
        .closest(".accordion-list-item")
        .find(".icon")
        .removeClass("rotate");
      $(this).find(".icon").addClass("rotate");
    }

    if ($(this).find(".text").hasClass("blue")) {
      $(this).find(".text").removeClass("blue");
    } else {
      $(this).closest(".accordion-list-item").find(".text").removeClass("blue");
      $(this).find(".text").addClass("blue");
    }
    $(this).closest(".accordion-list-item").removeClass("opened");

    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .removeClass("active");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .addClass("active");
    $(this).closest(".accordion-list-item").addClass("opened");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body:not(.active)")
      .slideUp();
    $(this).closest(".accordion-list-item:not(.opened)").removeClass("active");
    $(this).closest(".accordion-list-item").find(".item-body").slideToggle();
    $(this).closest(".accordion-list-item").toggleClass("active");
  });

  $(".mobile__menu").on("click", function () {
    $(".header__mobile").addClass("open");
    $("body, html").addClass("overflow");
  });

  $(".close-menu").on("click", function () {
    $(".header__mobile").removeClass("open");
    $("body, html").removeClass("overflow");
  });

  $(".equipment__slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".equipment__info__top .slider-navigation .slick-prev"),
    nextArrow: $(".equipment__info__top .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          speed: 800,
          cssEase: "ease-in-out",
        },
      },
    ],
  });




  let center5 = [55.707076, 37.385825];
  let center6 = [55.847076, 37.485825];
  let center7 = [55.687076, 36.885825];

  function init() {
    let map = new ymaps.Map("map", {
      center: center5,
      zoom: 9,
      controls: [],
    });

    let placemark2 = new ymaps.Placemark(
      center5,
      {
        balloonContent: `
        
        <div class="balloon-wrap2">
    </div>
        
        `,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageOffset: [0, 0],
        iconImageSize: [100, 34],
        hideIconOnBalloonOpen: false,
      }
    );

    let placemark3 = new ymaps.Placemark(
      center6,
      {
        balloonContent: `

        <div class="balloon-wrap2">
    </div>

            `,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageOffset: [0, 0],
        iconImageSize: [100, 34],
        hideIconOnBalloonOpen: false,
      }
    );

    let placemark4 = new ymaps.Placemark(
      center7,
      {
        balloonContent: `

        <div class="balloon-wrap2">
    </div>

            `,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageOffset: [0, 0],
        iconImageSize: [100, 34],
        hideIconOnBalloonOpen: false,
      }
    );

    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
    map.geoObjects.add(placemark4);
    map.behaviors.disable("scrollZoom");

    // placemark.balloon.open();
  }
  ymaps.ready(init);
});
