var countPaginateViewed = document.querySelector('.recently-viewed')
var unnitPerView = countPaginateViewed.getAttribute('paginate')

const localViewed = localStorage.recentlyViewedProduct;
function getRecentlyViewedProducts() {
  const productData = JSON.parse(localStorage.getItem('recentlyViewedProduct'));
  const recentlyViewedHtml = [];
  productData.map(item => {
    recentlyViewedHtml.unshift(`
    <div class="swiper swiper-recently-viewed">
        <div class="swiper-wrapper">
            <div class="swiper-slide viewed-item">
                <div class="viewed-img">
                    <img loading="lazy" src="${item.productImg}" alt="">
                </div>
                <div class="viewed-info">

                </div>
            </div>
        </div>
    </div>
    `);
  });
  const newProductData = `${recentlyViewedHtml.join("")}`;
  const fullContent = document.getElementsByClassName("recently-viewed");
  fullContent[0].innerHTML = newProductData;
}
document.addEventListener("DOMContentLoaded", function (event) {
    getRecentlyViewedProducts();
});