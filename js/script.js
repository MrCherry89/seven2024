$(document).ready(function () {
  function isMobile() {
    return window.matchMedia("(max-width: 578px)").matches;
  }

  $(".footer__title").on("click", function () {
    if (isMobile()) {
      $(this)
        .closest(".footer__items")
        .find(".footer__link")
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
    $(".header-mobile").addClass("open");
    $("body, html").addClass("overflow");
  });

  $(".close-menu").on("click", function () {
    $(".header-mobile").removeClass("open");
    $("body, html").removeClass("overflow");
  });

  $(".tags__item").on("click", function () {
    $(this).toggleClass("tags__item_active");
  });

  $(".review-info__slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    cssEase: "ease-in-out",
    prevArrow: $(".review-info .slider-navigation .slick-prev"),
    nextArrow: $(".review-info .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  });

  $(".additional-info__slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 800,
    cssEase: "ease-in-out",
    prevArrow: $(".additional-info .slider-navigation .slick-prev"),
    nextArrow: $(".additional-info .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".equipment-info__slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".equipment-info__top .slider-navigation .slick-prev"),
    nextArrow: $(".equipment-info__top .slider-navigation .slick-next"),
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
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".news-info__slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    cssEase: "ease-in-out",
    prevArrow: $(".news-info .slider-navigation .slick-prev"),
    nextArrow: $(".news-info .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".promotions__slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    cssEase: "ease-in-out",
    prevArrow: $(".promotions .slider-navigation .slick-prev"),
    nextArrow: $(".promotions .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".tariffs-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    cssEase: "ease-in-out",
    prevArrow: $(".tariffs .slider-navigation .slick-prev"),
    nextArrow: $(".tariffs .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1251,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".banner-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    cssEase: "ease-in-out",
    prevArrow: $(".banner__left .slider-navigation .slick-prev"),
    nextArrow: $(".banner__left .slider-navigation .slick-next"),
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
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
