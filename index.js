var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var itemObject = {[itemName]: itemPrice};
  cart.push(itemObject);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

var cartStatement = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
   }
   else {
     for (let i = 0; i < cart.length; i++) {
       var myItems = Object.keys(cart[i]);
       var itemsPrices = cart[i][myItems];
       var itemsAndPrices = ' ' + myItems + ' at $' + itemsPrices;
       cartStatement.push(itemsAndPrices);
     }
     if (cartStatement.length === 1) {
       console.log('In your cart, you have' + cartStatement + '.');
     }
     else if (cartStatement.length == 2) {
       itemsAndPrices = cartStatement.join(' and');
       console.log(`In your cart, you have${itemsAndPrices}.`);
     }
     else {
       cartStatement[cartStatement.length - 1] = ' and'.concat(
         cartStatement[cartStatement.length - 1]);
       var cartStatementUpdated = cartStatement.join(',');
       console.log('In your cart, you have' + cartStatementUpdated + '.');
     }
  }

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
