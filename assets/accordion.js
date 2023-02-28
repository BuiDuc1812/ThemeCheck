
var accordion = document.querySelectorAll(".accordion");
accordion.forEach((item, index)=>{
  var header = item.querySelector(".accordion-header");
  header.addEventListener('click',()=>{
    item.classList.toggle("open");
    let description = item.querySelector(".accordion-description");
    if(item.classList.contains("open")){
      description.style.height = `${description.scrollHeight}px`;
    }
    else{
      description.style.height = "0";
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
    }
  })
}