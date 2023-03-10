function getRecentlyViewedProducts() {
  var countPaginateViewed = document.querySelector('.recently-viewed');
  var buttonArrowNext = countPaginateViewed.querySelector('.style-swiper-next');
  var buttonArrowPrev = countPaginateViewed.querySelector('.style-swiper-prev');
  var buttonPaginate = countPaginateViewed.querySelector('.swiper-pagination');
  var viewedProduct = countPaginateViewed.querySelector('.product-viewed');
  var headingViewed = countPaginateViewed.querySelector('.button-arrow');
  var unitPerView = countPaginateViewed.getAttribute('paginate');
  const recentlyViewedHtml = [];
  const localViewed = localStorage.recentlyViewedProduct;
  const productData = JSON.parse(localStorage.getItem('recentlyViewedProduct'));

  if(productData == null){
    countPaginateViewed.style.display="none";
  }
  else if(productData != null){
    productData.map(item => {
    recentlyViewedHtml.unshift(`
        <div class="swiper-slide viewed-item">
            <div class="viewed-img">
                <img loading="lazy" src="${item.productImg}" alt="">
                <span class="tag-product">${item.productTag}</span>
            </div>
            <div class="viewed-info">
                <a href="${item.productUrl}">${item.productTitle}</a> 
                <p>${item.productVendor}</p> 
                <div>
                  <span class="product-price">${item.productPrice}</span>
                  <span class="product-price-compare">${item.productPriceCompare}</span>
                </div>
            </div>
        </div>
      `);
    });
  }
  const newProductData = `${recentlyViewedHtml.join("")}`;
  const fullContent = document.getElementsByClassName('product-viewed');
  fullContent[0].innerHTML = newProductData;
  if(productData.length <= 4){
    buttonArrowNext.style.display='none';
    buttonArrowPrev.style.display='none';
    buttonPaginate.style.display='none';
    viewedProduct.style.display='grid';
    headingViewed.style.display='block';
  }
  else {
    viewedProduct.style.gap='0';
    var swiperProduct = new Swiper('.swiper-recently-viewed', {
      breakpoints: {
        750: {
          slidesPerView: unitPerView,
          spaceBetween: 16
        },

        320: {
          slidesPerView: 2,
          spaceBetween: 8
        }
      },
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

