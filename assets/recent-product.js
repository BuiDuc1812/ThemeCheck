function getRecentlyViewedProducts() {
  var countPaginateViewed = document.querySelector('.recently-viewed');
  var buttonArrowNext = countPaginateViewed.querySelector('.style-swiper-next');
  var buttonArrowPrev = countPaginateViewed.querySelector('.style-swiper-prev');
  var buttonArrowPrev = countPaginateViewed.querySelector('.swiper-pagination');
  var unnitPerView = countPaginateViewed.getAttribute('paginate');
  const localViewed = localStorage.recentlyViewedProduct;
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
                <b>${item.productTitle}</b> 
                <p>${item.productVendor}</p> 
                <span class="product-price">${item.productPrice}</span>
            </div>
        </div>
    `);
  });

  const newProductData = `${recentlyViewedHtml.join("")}`;
  const fullContent = document.getElementsByClassName('product-viewed');
  fullContent[0].innerHTML = newProductData;
  if(productData.length == 0){
    countPaginateViewed.style.display="none";
  }
  else if(productData.length <= 4){
    buttonArrowNext.style.display="none";
    buttonArrowPrev.style.display="none";
    unnitPerView.style.display="none";
  }
  else if(productData.length > 4){
    var swiperProduct = new Swiper('.swiper-recently-viewed', {
        slidesPerView:4,
        spaceBetween: 16,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        }
    });
  }
}
document.addEventListener('DOMContentLoaded', function (event) {
    getRecentlyViewedProducts();
});

