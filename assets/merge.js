var parentNodeUl = document.querySelectorAll('.merge-list');
parentNodeUl.forEach(item=>{
    addItem(item);
})
function createLi(params){
    var newLi = document.createElement('li');
    var liSale = params.querySelector('.li-sale')
    var first = params.getAttribute('first');
    var second = params.getAttribute('second');
    var third = params.getAttribute('third');
    var fouth = params.getAttribute('fouth');
    var arr = [first, second, third, fouth]
    arr.forEach(item=>{
        console.log(item)
        var newLi = document.createElement('li');
        newLi.setAttribute('item',item);
        newLi.setAttribute('class','new-cols')
        if (newLi.getAttribute('item') == '0'){
            newLi.style.display = 'none';
        }
        params.insertBefore(newLi, liSale);
    })
}
function addItem(params){
    createLi(params);
    var newCols = params.querySelectorAll('.new-cols');
    var list = params.querySelectorAll('.merge');
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