
// onresize = (item)=>{
//   if(screen.width <= 990 ){
//     var swiper = new Swiper(".swiper-topmenu", {
//       autoplay: {
//         delay: 2000,
//       },
//     });
//   }
//   else{
//     var parent = document.querySelector(".topmenu");
//     var element = parent.querySelectorAll(".swiper-slide");
//     element.forEach(item=>{
//       item.classList.remove("swiper-slide");
//     })
//     parent.querySelector(".swiper-wrapper").classList.remove("swiper-wrapper");
//     parent.querySelector(".swiper").classList.remove("swiper");
//   }
// }

// console.log(screen.width)
var width = screen.width
function resizeWindow(){
  if(width < 990){
    var swiper = new Swiper(".swiper-topmenu", {
        autoplay: {
        delay: 2000,
      },
    });
  }
}
window.onresize = resizeWindow ;
