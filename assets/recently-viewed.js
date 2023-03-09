var productJson = JSON.parse(
    document.querySelector("[data-product-json]").innerHTML
);
  console.dir(productJson);
  console.log("-----------------------------------");
var storedProducts = JSON.parse(localStorage.getItem("storedProducts"));

function addProductEntry() {

    if (storedProducts === null) storedProducts = [];
    var currentProductID = productJson.id;
    var currentProductHandle = productJson.handle;
    var product = {
      handle: currentProductHandle,
      id: currentProductID
    };
    if (JSON.parse(localStorage.getItem("product")) != currentProductHandle) {
      localStorage.setItem("product", JSON.stringify(product));
    }
    var productExists = false
    for (var i = storedProducts.length; i--;) {
      var curProduct = storedProducts[i];
      if (curProduct.handle === product.handle) {
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      storedProducts.push(product);
    }
    if (localStorage.getItem(storedProducts)) {
      localStorage.getItem("storedProducts", JSON.stringify(storedProducts));
    } else {
      localStorage.setItem("storedProducts", JSON.stringify(storedProducts));
    }
  }


  var savedProductsArr = JSON.parse(localStorage.getItem("storedProducts"));
  var savedProductsArrReverse = savedProductsArr.reverse();
  var index = 0;
  if (savedProductsArr === null) {
    var elem = document.querySelector('#shopify-section-recently-viewed');
    elem.parentNode.removeChild(elem);
  } else {
    savedProductsArrReverse.some(function (product, index) {
      getStoredProducts(product);
      index++;
      return index === 4;
    });
  }
  var source = document.getElementById("RecentProductItemScript").innerHTML;

  function getStoredProducts(product) {
    var productAjaxURL = "/products/" + product.handle + ".js";
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: productAjaxURL,
      success: function (data) {
        console.dir(data);
        var template = Handlebars.compile(source);
        var soldOut = false;
        var onSale = false;
        if (data.available === false) {
          var soldOut = true;
        };
        if (data.compare_at_price > data.price) {
          var onSale = true;
        };
        var context = {
          title: data.title,
          url: data.url,
          image: slate.Image.getSizedImageUrl(data.featured_image, '450x450'),
          compare_price: slate.Currency.formatMoney(data.compare_at_price, theme.moneyFormat),
          price: slate.Currency.formatMoney(data.price, theme.moneyFormat),
          firstSKU: data.variants[0].sku,
          productAvailable: data.available,
          soldOut: soldOut,
          onSale: onSale
        };
        var html = template(context);
        $(html).appendTo("#recentlyViewedGrid");
        productStars();
      },
      error: function (data, error) {
        console.dir(data);
      }
    });
  }
  addProductEntry();