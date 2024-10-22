module.exports = (product, productHtml) => {
  let temp = productHtml.replace(/{%PRODUCT_NAME%}/g, product.productName);
  temp = temp.replace(/{%IMAGE%}/g, product.image);
  temp = temp.replace(/{%QUANTITY%}/g, product.quantity);
  temp = temp.replace(/{%PRICE%}/g, product.price);
  temp = temp.replace(/{%DESCRIPTION%}/g, product.description);
  temp = temp.replace(/{%VITAMINS%}/g, product.nutrients);
  temp = temp.replace(/{%PRODUCT_ID%}/g, product.id);
  temp = temp.replace(/{%FROM%}/g, product.from);

  if (!product.organic) {
    temp = temp.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  }
  return temp;
};
