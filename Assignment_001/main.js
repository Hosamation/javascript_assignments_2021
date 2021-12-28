// Assignment 01 
/*
  # Code One
  This Code Not Work 
  Cannot read property 'style' of null
  Code work before the page loading
*/

// Assignment 02
// document.body.appendChild(document.createElement('h1')).innerText = 'Elzero';
document.write('<h1>Elzero</h1>')
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.fontSize = '80px';
document.querySelector('h1').style.fontWeight = 'bold';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.fontFamily = 'arial';

// Assignment 03
let fSize = 'font-size: 40px'
console.log(`%cElzero %cWeb %cSchool`, 
            `color: red; ${fSize};`, 
            `color: green; ${fSize}; font-weight: bold;`,
            `color: white; ${fSize}; background-color: blue;`);

// Assignment 04
// Group 1
console.group('Group 1');
console.log('Message One');
console.log('Message Two');
// Child Group
console.group('Child Group');
console.log('Message One');
console.log('Message Two');
console.groupEnd();
// Grand Child Group
console.group('Grand Child Group');
console.log('Message One');
console.log('Message Two');
console.groupEnd();
console.groupEnd();
// Group 2
console.group('Group 2');
console.log('Message One');
console.log('Message Two');
console.groupEnd();

// Assignment 05
console.table(['Elzero', 'Ahmed', 'Sameh', 'Gamal', 'Aya']);

// Assignment 06
// console.log("Iam In Console");
// document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/