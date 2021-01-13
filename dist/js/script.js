"use strict";

window.addEventListener("DOMContentLoaded", function () {
  "use strict"; //Tabs

  var tabs = function tabs(headerSelector, tabSelector, contentSeclector, activeClass) {
    var display = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "flex";
    var header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSeclector);

    function hideTabContent() {
      content.forEach(function (item) {
        item.style.display = "none";
      });
      tab.forEach(function (item) {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      content[i].style.display = display;
      tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();
    header.addEventListener("click", function (e) {
      var target = e.target;
      console.log(e.target);

      if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
        tab.forEach(function (item, i) {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  };

  tabs(".team-wrapper", ".team-box", ".team-info", "active");

  var scrolling = function scrolling(upSelector) {
    var upElem = document.querySelector(upSelector); //Scrolling

    var links = document.querySelectorAll('[href^="#"]'),
        speed = 0.2;
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        event.preventDefault();
        var widthTop = document.documentElement.scrollTop,
            hash = this.hash,
            toBlock = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);

        function step(time) {
          if (start === null) {
            start = time;
          }

          var progress = time - start,
              r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
          document.documentElement.scrollTo(0, r);

          if (r != widthTop + toBlock) {
            requestAnimationFrame(step);
          } else {
            location.hash = hash;
          }
        }
      });
    });
  };

  scrolling(); //sticky-header

  var prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-81px";
    }

    prevScrollpos = currentScrollPos;
  }); //burger

  var navToggle = function navToggle() {
    var toggles = document.querySelector(".burger"),
        menu = document.querySelector(".menu__list"),
        links = document.querySelectorAll(".menu__list li");
    toggles.addEventListener("click", function () {
      toggles.classList.toggle("active");
      menu.classList.toggle("active");
      links.forEach(function (i) {
        i.classList.toggle("fade");
      });
    });
  };

  navToggle();

  var videoCicle = function videoCicle() {
    var skybtn = document.querySelector(".icon");
    var video = document.querySelector(".skyrim");
    var close = document.querySelector(".skyrim__close");
    var frame = document.querySelector(".skyrimFrame");
    skybtn.addEventListener("click", function () {
      video.style.display = "block";
      document.body.style.overflow = "hidden";
    });
    close.addEventListener("click", function () {
      video.style.display = "none";
      document.body.style.overflow = "";
      frame.src = "";
      return frame.src = "https://www.youtube.com/embed/eVVXNDv8rY0";
    });
  };

  videoCicle();
});
$(function () {
  $(".testimonials-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4500,
    cssEase: "ease-out"
  });
});