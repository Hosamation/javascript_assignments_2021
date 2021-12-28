// Assignment_001
let numOne = 9;
// Condition Output => "009"
let numTwo = 20;
// Condition Output => "020"
let numThree = 110;
// Condition Output => "110"
// لو حصل تعديل في قيمة المتغيرات إزاي نحصل على نفس النتيجة
// if (numOne < 10 || numTwo < 10 || numThree < 10) {
//   numOne = `00${numOne}`
//   numTwo = `00${numTwo}`
//   numThree = `00${numThree}`;
// } else if (numOne > 10 && numOne > 100 || numTwo > 10 && numTwo < 100 || numThree > 10 && numThree > 100) {
//   numOne = `0${numOne}`
//   numTwo = `0${numTwo}`
//   numThree = `0${numThree}`;
// } 

// If Ternary Operator
// numOne < 10 ? console.log(true) : console.log(false);



// console.log(numOne);
// console.log(numTwo);
// console.log(numThree);

// Assignment_002
// let num1 = 9;
// let str = "9";
// let num2 = "20";
// if (num1 == str) {
//   console.log("{num1} Is The Same Value As {str}");
// } else {
//   console.log("{num1} Is Not The Same Value As {str}")
// }

// if (num1 == str && typeof num1 !== typeof str) {
//   console.log("{num1} Is The Same Value As {str} But Not The Same Type")
// } else {
//   console.log('Not')
// }

// if (num1 === num2) {
//   console.log('not')
// } else {
//   console.log("{num1} Is Not The Same Value Or The Same Type As {num2}")
// }



// let num1 = 10;
// let num2 = 30;
// let num3 = "30";
// if (num3 > num1 && typeof num3 !== typeof num2) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// if (num3 > num1 && (num3 == num2 && typeof num3 !== typeof num2)) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// if (num3 !== num1 && typeof num3 !== num2) {
//   console.log(true)
// } else {
//   console.log(false)
// }
// Needed Output
// "{num3} Is Larger Than {num1} And Not The Same Type As {num2}"
// "{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"


// Edit What You Want Here

var num1 = "15";
var num2 = 10;
var num3 = "15";
var num4 = 200000;
console.log(num1 + num2)
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}