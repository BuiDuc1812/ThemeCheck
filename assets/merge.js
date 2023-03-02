var merge = document.querySelector(".merge-list");
var newLi = document.createElement("li");
var first = merge.getAttribute("first");
var second = merge.getAttribute("second");
var third = merge.getAttribute("third");
var fouth = merge.getAttribute("fouth");

console.log(first,second,third,fouth)

// var list = ul.querySelectorAll(".merge");
// list.forEach((item, index)=>{
//     if(index == first ){
//         li.appendChild(item);
//     }
//     if(index == second ){
//         li.appendChild(item);
//         item.style.margin = "24px 0 0 0" ;
//     }
//     if(index == first - 1){
//         insertAfter(li,item);
//     }
// })
// function insertAfter(li, element) {
//     element.parentNode.insertBefore(li, element.nextSibling);
// }
