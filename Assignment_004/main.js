// Assignment_001
console.log('### Assignment 01 ###\n')

console.log(1_000_00); // 100000
console.log(5e4 + 5e4); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(1_000_00.00); // 100000
console.log(Number('100000')); // 100000
console.log(+('100000')); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.ceil(99999.5)); // 100000
console.log(Math.floor(100000.5)); // 100000

// Assignment_002
console.log('### Assignment 02 ###\n')

console.log(-(Number.MIN_SAFE_INTEGER));

// Assignment_003
console.log('### Assignment 03 ###\n')

console.log(Number.MAX_SAFE_INTEGER / -Number.MIN_SAFE_INTEGER + 15);

// Assignment_004
console.log('### Assignment 04 ###\n')

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Math.trunc(parseFloat(myVar))); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57

// Assignment_005
console.log('### Assignment 05 ###\n')

let num = 10;

console.log(Number.isInteger(num) + true); // 2

// Assignment_006
console.log('### Assignment 06 ###\n')

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(+(parseFloat(flt).toFixed(0))); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.ceil(--flt)); // 10

// Assignment_007
console.log('### Assignment 07 ###\n')

console.log(Math.floor(Math.random() * 5))