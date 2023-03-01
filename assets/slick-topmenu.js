// $(document).ready(function() {
//     $('.slider-header').slick({
//       autoplay:true,
//       autoplaySpeed:2000
//     });
//   });
//   if($(window).width()<=990){
//      $(document).ready(function() {
//         $('.container').slick({
//           autoplay:true,
//           autoplaySpeed:2000
//         });
//     });
//   }

window.addEventListener("resize",(event)=>{
  if(window.width() <= 990){
    var topMenu = document.querySelector(".container")
    console.log(topMenu);
  }  
})
onresize = (event) => {};