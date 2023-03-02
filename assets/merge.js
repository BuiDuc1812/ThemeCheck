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
var newCols = document.querySelectorAll(".new-cols")
var list = nameUl.querySelectorAll(".merge");
let t = 0;
newCols.forEach((item, index)=>{
    let i = 0;
    if(index == t){
        var quantityItem = item.getAttribute("item") 
    }
    for (const child in list) {
        if (Object.hasOwnProperty.call(list, child)) {
            const element = list[child];
            item.appendChild(element);
            i++;
            console.log(element)
            console.log(item)
            // get first element
            // item.appendChild(element);
            // delete this
            if(i>=quantityItem){
                break;
            }
        }
    }
    t++;
})





// console.log(newCols)

// nameUl.children.forEach(item=>{
//     console.log(item)
// })
// console.log(nameUl.children)

// console.log(nameUl)



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
