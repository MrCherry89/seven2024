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
});
