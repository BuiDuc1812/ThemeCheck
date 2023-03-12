var booLean = false;
var swiperRecent = '';
var countPaginateViewed = document.querySelector('.recently-viewed');
if(countPaginateViewed){
  document.addEventListener('DOMContentLoaded', getRecentlyViewedProducts);
}

function enableSwiperRecent() {
  if (window.innerWidth < 990) {
    if (!booLean) {
      booLean = true;
      swiperRecent = new Swiper(".swiper-recently-viewed", {
        breakpoints: {
          750: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 8
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        }
      });
    }
  } else if (booLean) {
    swiperRecent.destroy();
    booLean = false;
  }
}

function getRecentlyViewedProducts() {
  var viewedProduct = countPaginateViewed.querySelector('.product-viewed');
  var unitPerView = countPaginateViewed.getAttribute('paginate');
  const recentlyViewedHtml = [];
  const productData = JSON.parse(localStorage.getItem('recentlyViewedProduct'));
  if (productData == null) {
    countPaginateViewed.style.display = 'none';
  } else if (productData != null) {
    productData.map(item => {
    recentlyViewedHtml.unshift(`
        <div class="swiper-slide viewed-item">
            <a href="${item.productUrl}" class="viewed-img">
                <img loading="lazy" src="${item.productImg}" alt="${item.productImageAltText}">
                <span class="tag-product">${item.productTag}</span>
                ${ item.productPriceCompare ? 
                  `<span class="tag-price">Save 25%</span>
                  <span class="tag-sale">10% off everyday</span>`:
                  `<span class="tag-sale-off">20% off sandals</span>`}  
            </a>
            <div class="viewed-info">
                <a href="${item.productUrl}">${item.productTitle}</a> 
                <p>${item.productVendor}</p> 
                <div>
                  ${ item.productPriceCompare ? 
                    `<span class="product-price">${item.productPrice}</span>
                    <span class="product-price-compare">RRP ${item.productPriceCompare}</span>`:
                    `<span class="product-price">${item.productPrice}</span>`}  
                </div>
            </div>
        </div>
      `);
    });
  }
  const newProductData = `${recentlyViewedHtml.join('')}`;
  const fullContent = document.getElementsByClassName('product-viewed');
  fullContent[0].innerHTML = newProductData;
  if (productData.length <= 4) {
    window.addEventListener('resize', enableSwiperRecent);
  } else {
    viewedProduct.style.gap='0';
    var swiperProduct = new Swiper('.swiper-recently-viewed', {
      breakpoints: {
        990: {
          slidesPerView: unitPerView,
          spaceBetween: 16
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 8
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      }
    });
  }
}

