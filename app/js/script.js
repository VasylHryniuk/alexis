window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  //Tabs
  const tabs = (
    headerSelector,
    tabSelector,
    contentSeclector,
    activeClass,
    display = "flex"
  ) => {
    const header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSeclector);

    function hideTabContent() {
      content.forEach((item) => {
        item.style.display = "none";
      });

      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      content[i].style.display = display;
      tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener("click", (e) => {
      const target = e.target;
      console.log(e.target);
      if (
        target &&
        (target.classList.contains(tabSelector.replace(/\./, "")) ||
          target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
      ) {
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  };

  tabs(".team-wrapper", ".team-box", ".team-info", "active");

  const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    //Scrolling

    let links = document.querySelectorAll('[href^="#"]'),
      speed = 0.2;

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        event.preventDefault();

        let widthTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;

        requestAnimationFrame(step);

        function step(time) {
          if (start === null) {
            start = time;
          }

          let progress = time - start,
            r =
              toBlock < 0
                ? Math.max(widthTop - progress / speed, widthTop + toBlock)
                : Math.min(widthTop + progress / speed, widthTop + toBlock);

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

  scrolling();

  //sticky-header
  let prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-81px";
    }
    prevScrollpos = currentScrollPos;
  });

  //burger

  const navToggle = () => {
    const toggles = document.querySelector(".burger"),
      menu = document.querySelector(".menu__list"),
      links = document.querySelectorAll(".menu__list li");
    toggles.addEventListener("click", () => {
      toggles.classList.toggle("active");
      menu.classList.toggle("active");
      links.forEach((i) => {
        i.classList.toggle("fade");
      });
    });
  };
  navToggle();

  const videoCicle = () => {
    const skybtn = document.querySelector(".icon");
    const video = document.querySelector(".skyrim");
    const close = document.querySelector(".skyrim__close");
    const frame = document.querySelector(".skyrimFrame");

    skybtn.addEventListener("click", () => {
      video.style.display = "block";
      document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", () => {
      video.style.display = "none";
      document.body.style.overflow = "";
      frame.src = "";
      return (frame.src = "https://www.youtube.com/embed/eVVXNDv8rY0");
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
      cssEase: "ease-out",
    });
  });
