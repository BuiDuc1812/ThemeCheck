var countPaginateViewed = document.querySelector('.recently-viewed')
var unnitPerView = countPaginateViewed.getAttribute('paginate')

const localViewed = localStorage.recentlyViewedProduct;
function getRecentlyViewedProducts() {
  const productData = JSON.parse(localStorage.getItem('recentlyViewedProduct'));
  const recentlyViewedHtml = [];
  productData.map(item => {
    recentlyViewedHtml.unshift(`
        <div class="swiper-slide viewed-item">
            <div class="viewed-img">
                <img loading="lazy" src="${item.productImg}" alt="">
                <span class="tag-product">${item.productTag}</span>
            </div>
            <div class="viewed-info">
                <p>${item.productTitle}</p> 
                <span class="product-price">${item.productPrice}</span>
            </div>
        </div>
    `);
  });
  const newProductData = `${recentlyViewedHtml.join("")}`;
  const fullContent = document.getElementsByClassName("product-viewed");
  fullContent[0].innerHTML = newProductData;
}
document.addEventListener("DOMContentLoaded", function (event) {
    getRecentlyViewedProducts();
});