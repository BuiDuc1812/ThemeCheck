var ul = document.querySelector(".list-girl")
var li = document.createElement("li")
ul.appendChild(li)
var first = ul.getAttribute("first")
var second = ul.getAttribute("second")
var list = ul.querySelectorAll(".merge")
list.forEach((item, index)=>{
    if(index == first ){
        li.appendChild(item)
    }
    if(index == second ){
        li.appendChild(item)
    }
})
li.setAttribute("merge","true")