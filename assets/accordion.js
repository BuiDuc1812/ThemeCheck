
var accordion = document.querySelectorAll(".accordion");
accordion.forEach((item, index)=>{
  var header = item.querySelector(".accordion-header");
  header.addEventListener('click',()=>{
    item.classList.toggle("open");
    let description = item.querySelector(".accordion-description");
    if(item.classList.contains("open")){
      item.querySelector(".down").classList.add('turn-off')
      item.querySelector(".up").classList.remove('turn-off')
      description.style.height = `${description.scrollHeight}px`;
    }
    else{
      description.style.height = "0";
      item.querySelector(".down").classList.remove('turn-off')
      item.querySelector(".up").classList.add('turn-off')
    }
    removeOpen(index);
  })
})
function removeOpen(i){
  accordion.forEach((item, ind)=>{
    if(i != ind){
      item.classList.remove("open");
      let des = item.querySelector(".accordion-description");
      des.style.height="0";
      item.querySelector(".down").classList.remove('turn-off')
      item.querySelector(".up").classList.add('turn-off')
    }
  })
}
var swiper = new Swiper(".swiper-drawer", {
  autoplay: {
    delay: 2000,
  },
});