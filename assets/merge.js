var ul = document.querySelector(".merge-list");
var li = document.createElement("li");
var first = ul.getAttribute("first");
var second = ul.getAttribute("second");
var list = ul.querySelectorAll(".merge");
list.forEach((item, index)=>{
    if(index == first ){
        li.appendChild(item);
    }
    if(index == second ){
        li.appendChild(item);
        item.style.margin = "24px 0 0 0" ;
    }
    if(index == first - 1){
        insertAfter(li,item);
    }
})
function insertAfter(li, element) {
    element.parentNode.insertBefore(li, element.nextSibling);
}
