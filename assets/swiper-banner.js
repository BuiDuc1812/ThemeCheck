var flag = false;
var swiperRtb = '';

function enableSwiper() {
  if (window.innerWidth < 990) {
    if (!flag) {
        flag = true;
        swiperRtb = new Swiper(".swiper-rbt", {
            loop: true,
            spaceBetween: 80,
            slidesPerView: 'auto',
            speed: 3000,
            loopPreventsSlide: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }
        });
    }
  } else if (flag) {
    swiperRtb.destroy();
    flag = false;
  }
}
enableSwiper();
window.addEventListener('resize', enableSwiper)

function bannerSwiper(){
    var swiper = new Swiper(".swiper-banner", {
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 6000,
    }
  });
}
bannerSwiper();