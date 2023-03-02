var nameUl = document.querySelector(".merge-list");
var newLi = document.createElement("li");
var first = nameUl.getAttribute("first");
var second = nameUl.getAttribute("second");
var third = nameUl.getAttribute("third");
var fouth = nameUl.getAttribute("fouth");
var arr = [first, second, third, fouth]
arr.forEach(item=>{
    var newLi = document.createElement("li");
    newLi.setAttribute("item",item);
    newLi.setAttribute("class","new-cols")
    if(newLi.getAttribute("item")=="0"){
        newLi.style.display = "none";
    }
    nameUl.appendChild(newLi)
})
var list = nameUl.querySelectorAll(".merge");
var newCols = document.querySelectorAll(".new-cols")
console.log(newCols)
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
