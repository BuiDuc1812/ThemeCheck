var productJson = JSON.parse(document.querySelector("[data-product-json]").innerHTML);
function setRecentlyViewedPdp() {
    const pdpData = {
      productTitle : productJson.title,
      productImg : productJson.featured_image,
      productPrice : productJson.price,
      productUrl : productJson.url
   };
   console.log(pdpData)
    // Init Empty Array to push data
     const productArr = [];
    // Create a couple of variables 
     let jsonResp,
         jasonRespArr, 
         jsonRespArrStr; 
  // Set the number how many products you want to capture 
     const numberOfProduct = 4;
  // Now push the pdpData into Array so that we can use it 
     productArr.push(pdpData);
  // Get the product title from pdpData 
     const currPdpTitle = pdpData.productTitle;
  // Now Convert current page data into Strings which we already pushed in Array 
     const pdpDataString = JSON.stringify(productArr);
  // Set the variable for localStorage 
     const localData = localStorage.getItem('recently_viewed');
     // Second Block
// first we need to check data if data is not there then store right // away 
if (localData == null) {
    localStorage.setItem('recently_viewed', pdpDataString);
}
// If data is there then we need to check couple of other conditions 
else if ( localData == null ) {
// Create Variable for oldData or Previous page 
   const oldPdpData = localStorage.getItem('recently_viewedPDP');
// Count the amount of data stored in strings so that we can remove // old products from the stack 
   const countPdpData = (oldPdpData.match(/productTitle/g) || []).length;
// we also need to check if user is not visiting page again 
   const reVisitPdp =  oldPdpData.includes(currPdpTitle);
// Get old data, merged it with new data and store merged data
 if (countPdpData < numberOfProduct && reVisitPdp == false) {
      jsonResp = JSON.parse(oldPdpData);
      jsonRespArr = jsonResp.concat(productArr);
      jsonRespArrStr = JSON.stringify(jsonRespArr);
      localStorage.setItem('recently_viewedPDP', jsonRespArrStr);
 }
// If User visited more the 4 pages delete first page data 
else if (countPdpData >= numberOfProduct && reVisitPdp == false) {
      jsonResp = JSON.parse(oldPdpData);
      jsonResp.shift();
      jsonRespArr = jsonResp.concat(productArr);
      jsonRespArr =  JSON.stringify(jsonRespArr);
      localStorage.setItem('recently_viewedPDP', jsonRespArr);
 }
}
}
// Now we write all our function and it's time to execute it 
setRecentlyViewedPdp();
// Set Variable for Local Storage Data 
const localViewed = localStorage.recently_viewedPDP;
// console.log to verify the data 
console.log(localViewed);   