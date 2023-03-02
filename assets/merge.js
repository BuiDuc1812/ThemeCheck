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
let myArray = Array.from(list)
let t = 0;
newCols.forEach((item)=>{
    let i = 0;
    var quantityItem = item.getAttribute("item") 
    console.log(quantityItem)
    for (const child in myArray) {
        if (Object.hasOwnProperty.call(myArray, child)) {
            const element = myArray[child];
            item.appendChild(element);
            i++; 
            if(i >= quantityItem){
                break;
            } 
        }
    }
    for(var x = 0; x < quantityItem; x++){
        myArray.shift();
    } 
    console.log(myArray)
})


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
