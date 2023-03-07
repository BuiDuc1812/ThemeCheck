var flag = false;
var swiperRtb = '';

function enableSwiper() {
  if (window.innerWidth < 990) {
    if (!flag) {
        flag = true;
        swiperRtb = new Swiper(".swiper-rbt", {
            centeredSlides: true,
            loop: true,
            slidesPerView: 1,
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


function styleRTB(){
  var rtb = document.querySelector('.rbt');
  var rtbElement = rtb.querySelectorAll('.custom-slide');
  var totalWidth ;
  rtbElement.forEach(item => {
    totalWidth = item.offsetWidth
  });
  if(totalWidth > window.innerWidth){
     var test = new Swiper(".swiper-rbt", {
          centeredSlides: true,
          loop: true,
          slidesPerView: 3,
          
          speed: 3000,
          autoplay: {
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
          }
      });
   }
}
styleRTB()
