// Assignment_001
console.log('### Assignment 01 ###\n');
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! (-50 == +"-40")); // true

console.log(! (10 > -"-40")); // true
console.log(! (10 == -"-40")); // true
console.log(! (10 == -"-40")); // true
console.log(! (10 >= -"-40")); // true

console.log(! ("10" === 10)); // true
console.log(! (20 == false)); // true

// Assignment_002
console.log('### Assignment 02 ###\n');
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 != num2); // true
console.log(!(num1 == num2)); // true
console.log(!(num1 === num2)); // true
console.log(!(num1 > num2)); // true
console.log(!(num2 < num1)); // true


// Assignment_003
console.log('### Assignment 03 ###\n');

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
console.log(a != b > a > c); // true
console.log(!(a == b) && !(a > b) && !(a == c) && !(a < c)); // true