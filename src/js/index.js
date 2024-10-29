let products = [];

const cache = {};

import "../scss/global.scss"; // Import your SCSS fi

// Example usage

const initializeCache = () => {
  cache.document = $(document);
  cache.color = $(".product__colors-section li");
  cache.swatchImage = cache.color.find("img");
  cache.productDetails = $(".product__details");
  cache.productImage = $(".product__image img");
  cache.productTitle = cache.productDetails.find(".product__title");
  cache.productPrice = cache.productDetails.find(".price");
  cache.productAvailableSize = cache.productDetails.find(
    ".product__availability"
  );
  cache.productDesc = cache.productDetails.find(
    ".product__description--content"
  );
};

const initializeEvents = () => {
  cache.swatchImage.on("click", (e) => {
    e.preventDefault();
    const source = $(e.target).data("source");
    cache.swatchImage.removeClass("selected");
    $(e.target).addClass("selected");
    if (source) {
      appendProductDetails(source);
    }
  });
};

const appendProductDetails = (source) => {
  const product = products.find((item) => item.img === source);
  if (product) appendDataToDom(product);
};

/* Appending the dynamic data to the DOM */
const appendDataToDom = (product) => {
  cache.productImage.attr("src", product.img);
  cache.productTitle.text(product.title);
  cache.productPrice.text(product.price);
  cache.productAvailableSize.text(product.sizes);
  cache.productDesc.text(product.desc);
};

const fetchProductData = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/sred36/composable-storefront/master/products.json"
    );

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json(); // Declare products with const or let
    products = data.products;
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};

$(document).ready(() => {
  // Usage example
  fetchProductData();
  initializeCache();
  initializeEvents();
});
