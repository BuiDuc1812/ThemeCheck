var flag = false;
var swiperRtb = '';

function enableSwiper() {
  if (window.innerWidth < 990) {
    if (!flag) {
        flag = true;
        swiperRtb = new Swiper(".swiper-rbt", {
            loop: true,
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


  
