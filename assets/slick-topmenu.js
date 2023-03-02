var parent = document.querySelector(".topmenu");
var child = parent.querySelectorAll(".resp");

function slide(){
  
  if(window.innerWidth<=990){
    var swiper = new Swiper(".swiper-topmenu", {
        autoplay: {
        delay: 2000,
      },
    });
  }
  else{
    console.log(window.innerWidth)
  }
}
window.addEventListener('resize', slide);
slide();