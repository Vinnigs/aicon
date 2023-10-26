const swiper = new Swiper(".mySwiper", {
    effect: "slide",
    slidesPerView: 2,
    speed: 3000,
    loop: true,
    loopedSlides: 9,
    spaceBetween: 32,
    autoplay: {
        "delay": 1000,
        "disableOnInteraction": false,

    },

    breakpoints: {
        // when window width is >= 320px
        580: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        740: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
        900: {
          slidesPerView: 5,
          spaceBetween: 32,
        }
    }

});

const portifolioSwiper = new Swiper(".portifolioSwiper", {
    effect: "slide",
    slidesPerView: 1,
    spaceBetween: 32,
    slideActiveClass: 'swiper-slide-active',
    centeredSlides: true,
    initialSlide: 0,
    slideToClickedSlide: true,
    // speed: 3000,
    loop: true,
    // loopedSlides: 1,
    // spaceBetween: 32,
    // autoplay: {
    //     "delay": 1000,
    //     "disableOnInteraction": false,

    // },

    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
    },

    breakpoints: {
        // when window width is >= 320px
        850: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1250: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        // 900: {
        //   slidesPerView: 5,
        //   spaceBetween: 32,
        // }
    }

});

const depoimentosSwiper = new Swiper(".depoimentosSwiper", {
  effect: "slide",
  slidesPerView: 1,
  speed: 3500,
  loop: true,
  loopedSlides: 2,
  spaceBetween: 32,
  autoplay: {
      "delay": 15000,
      "disableOnInteraction": false,

  },

  breakpoints: {
  //     // when window width is >= 320px
      1024: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
  //     740: {
  //       slidesPerView: 4,
  //       spaceBetween: 32,
  //     },
  //     900: {
  //       slidesPerView: 5,
  //       spaceBetween: 32,
  //     }
  }

});

