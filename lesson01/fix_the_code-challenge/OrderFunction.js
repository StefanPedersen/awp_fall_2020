// This function intentionally has two bugs in it!
// TODO: fix them!
const orderTotal = (order) => {
  const totalNormalItems = order.items
    .filter((x) => !x.shipping)
    .reduce((prev, cur) => prev + cur.quantity * cur.price, 1);
  const shippingItem = order.items.find((x) => !!x.shipping);
  const shipping = totalNormalItems > 1000 ? 40 : shippingItem.price;
  return totalNormalItems + shipping;
};

module.exports = {
  orderTotal
};

// Some documentation that you might want to read:
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
