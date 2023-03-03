var parentNodeUl = document.querySelector('.merge-list');

function createLi(){
    var newLi = document.createElement('li');
    var liSale = document.querySelector('.li-sale')
    var first = parentNodeUl.getAttribute('first');
    var second = parentNodeUl.getAttribute('second');
    var third = parentNodeUl.getAttribute('third');
    var fouth = parentNodeUl.getAttribute('fouth');
    var arr = [first, second, third, fouth]
    arr.forEach(item=>{
        var newLi = document.createElement('li');
        newLi.setAttribute('item',item);
        newLi.setAttribute('class','new-cols')
        if (newLi.getAttribute('item') == '0'){
            newLi.style.display = 'none';
        }
        parentNodeUl.insertBefore(newLi,liSale);
    })
}

function addItem(){
    createLi();
    var newCols = document.querySelectorAll('.new-cols');
    var list = parentNodeUl.querySelectorAll('.merge');
    let myArray = Array.from(list);
    newCols.forEach((item) => {
        let i = 0;
        var quantityItem = item.getAttribute('item') ;
        for (const child in myArray) {
            if (Object.hasOwnProperty.call(myArray, child)) {
                const element = myArray[child];
                element.style.margin = '0 0 24px 0';
                item.appendChild(element);
                i++;
                if (i >= quantityItem){
                    break;
                }
            }
        }
        for (var x = 0; x < quantityItem; x++){
            myArray.shift();
        }
        if (item.hasChildNodes() == false){
            item.style.display = 'none';
        }
    })
}
addItem();