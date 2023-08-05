const shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
};

// use /* DOT NOTATION */ to get the property value when you know the specific property name
const penCount = shoppingCart.pen;
// alternative system
// use /* BRACKET NOTATION */ to get the property value when you know the specific property name
const penCount2 = shoppingCart['pen'];

const keyName = 'books';
const value = shoppingCart[keyName];
// console.log(value); // 1

console.log(shoppingCart);

/* set property values */
shoppingCart.mouse = 15;         // dot notation
shoppingCart['keyboard'] = 10;   // bracket notation for specific know property
const key = 'sunglass';
shoppingCart[key] = 7;           // using variable in bracket notation
console.log(shoppingCart);