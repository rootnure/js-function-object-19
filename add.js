function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result1 = add(60, 58);
const result2 = add(56, 60);
const finalResult = add(result1, result2);
console.log(finalResult);