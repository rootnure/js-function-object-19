/*******
 ARRAY 
*******/

var numbers = [10, 20, 11, 34, 55, 23, 89, 22];

// get a portion of an array (startingIndex, endingIndex+1)
var partialNumbers = numbers.slice(1, 4); // Won't change the original array
// console.log(partialNumbers) // [20, 11, 34]

// cut and replace elements in an array (startingIndex, numberOfElementsToDelete, newElement, newElement, newElement, ...)
numbers.splice(2, 3, 77, 33, 88); // will update the original array
// console.log(numbers); // [10, 20, 77, 33, 88, 23, 89, 22]


/*********
  STRING 
*********/

var sentence = 'I am learning web development';

// check if includes in the string
var isPresent = sentence.includes('web'); // this is case sensitive
// console.log(isPresent) // true

// get a portion of a string (startingIndex, endingIndex+1) (almost like slice for array)
var partialSentence = sentence.substring(5, 25); // won't change the string
// console.log(partialSentence); //learning web develop

// get value from string by index
var charInSentence = sentence[5];
// console.log(sentence[5]); // l

// cannot set value by index 
// string is immutable
sentence[10] = 'c'; // Won't update the value
console.log(sentence); // I am learning web development

// parseInt() --> convert a string format number value / float value to an integer value
var num1 = parseInt('5');
console.log(num1); // 5
var num2 = parseInt(10.5);
console.log(num2); // 10

// parseFloat() --> convert a string format number value to a float value
var number = parseFloat('11.43');
console.log(number); // 11.43

// toFixed() --> rounds the string or float value to a specified number of decimals 