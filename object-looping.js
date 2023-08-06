const shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    SSD: 3
};
// console.log(shoppingCart);

// get all the values as array of values
const values = Object.values(shoppingCart);
// console.log(values); // [ 3, 1, 5, 1, 25, 3 ]

// get all the property name as array of strings
const keys = Object.keys(shoppingCart);
// console.log(keys); //[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'SSD' ]

// loop through an object using array of properties
for(let i = 0; i < keys.length; i++) {
    const property = keys[i];
    const value = shoppingCart[property];
    // console.log(property, value);
}

// loop through an object using for in loop
for(const property in shoppingCart){
    const value = shoppingCart[property];
    console.log(property, value);
}