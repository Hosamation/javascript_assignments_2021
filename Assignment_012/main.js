// Assignment 1
function sayHello(theName, theGender) {
  if (theGender === 'Male') {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === 'Female') {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// Assignment 2
function calculate(firstNum, secondNum, operation) {
  if (operation === 'add') {
    console.log(firstNum + secondNum);
  } else if (operation === 'subtract') {
    console.log(firstNum - secondNum);
  } else if (operation === 'multiply') {
    console.log(firstNum * secondNum)
  } else if (secondNum === undefined) {
    console.log('Second Number Not Found')
  } else {
    console.log(firstNum + secondNum)
  }
}
// function calculate(firstNum, secondNum, operation) {
//   switch (operation) {
//     // case secondNum = undefined:
//     //     console.log('Second Number Not Found')
//     //     break;
//     default:
//     case operation = 'add':
//       console.log(firstNum + secondNum);
//       break;
//     case operation = 'subtract':
//       console.log(firstNum - secondNum);
//       break;
//     case operation = 'multiply':
//       console.log(firstNum * secondNum);
//       break;
//   }
// }

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// Assignment 3
function ageInTime(theAge) {
  let months = theAge * 12,
      weeks = months * 4,
      days = theAge * 365,
      hours = days * 24,
      minuts = hours * 60,
      seconds = minuts * 60
  if (theAge <= 10 || theAge >= 100) {
    console.log('Age Out Of Range')
  } else {
    console.log(`You Are Life:\n${months} Months\n${weeks} Weeks\n${days} Days\n${hours} Hours\n${minuts} Minuts\n${seconds} Seconds`)
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// Assignment 4
// Challenge

// Assignment 5
function creatSelectBox(startYear, endYear) {
  document.write('<select>')
  for(i = startYear; i <= endYear; i++) {
    document.write(`<option value=${i}>${i}</option>`)
  }
  document.write('</select>')
}
creatSelectBox(2000, 2021)

// Assignment 6
function multiply(...multi) {
  let result = 1;
  for (i = 0; i < multi.length; i++) {
    if (typeof i === 'number') {
      result *= Math.trunc(multi[i]);
    }
  }
  return result;
}

// console.log(multiply(2.2, 2, 2))
// console.log(multiply(10, 20))

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000