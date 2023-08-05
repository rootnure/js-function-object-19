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

/* Get all the property names from an object in array format */
const properties = Object.keys(shoppingCart);
// console.log(properties); // [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]

/* Get all the values from an object in array format */
const values = Object.values(shoppingCart);
// console.log(values); // [ 3, 1, 5, 1, 25 ]

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