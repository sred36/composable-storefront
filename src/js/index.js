const products = [
  {
    img: "./images/1.png",
    title: "Twon headd",
    price: "AED: 300",
    sizes: "Available Sizes: S M",
    desc: "Calendula Herbal Extract Alcohol-Free Toner",
  },
  {
    img: "./images/6.png",
    title: "Bangalore tshirt",
    price: "AED: 400",
    sizes: "Available Sizes: L XL",
    desc: "-Moisten a sterile cotton pad with facial toner, and apply to skin in areas where needed, avoiding the eye area",
  },
  {
    img: "./images/2.png",
    title: "Candian tshirt",
    price: "AED: 500",
    sizes: "Available Sizes: S M XL XXL",
    desc: "Contains no alcohol or harsh synthetic drying agent",
  },
  {
    img: "./images/4.png",
    title: "Leather Hoodie",
    price: "AED: 600",
    sizes: "Available Sizes: L XL",
    desc: "The calendula petals in our unique formula are still inserted by hand in the Kiehl’s apothecary tradition",
  },
];

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

$(document).ready(() => {
  initializeCache();
  initializeEvents();
});
