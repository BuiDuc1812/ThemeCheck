var flag = false;
var swiperRtb = '';

function enableSwiper() {
  if (window.innerWidth < 990) {
    if (!flag) {
        flag = true;
        swiperRtb = new Swiper(".swiper-rbt", {
            centeredSlides: true,
            loop: true,
            slidesPerView: 'auto',
            speed: 3000,
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


  
