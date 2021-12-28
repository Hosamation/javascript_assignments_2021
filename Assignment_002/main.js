// Assignment_001
console.log('### Assignment 01 ### \n ')
var numberOne = 10, numberTwo = 20;
console.log(numberOne + '' + numberTwo); // Normal Cocatenate => 1020
console.log(typeof (numberOne + '' + numberTwo)); // Normal Conatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`);                     // Template Literals Way => String 

console.log(numberTwo + '\n' + numberOne); // Normal Concatenate
console.log(`${numberTwo}
${numberOne}`);                            // Template Literals Way

// Assignment_002
console.log('\n### Assignment 02 ###\n')

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// Assignment_003
console.log('\n### Assignment 03 ###\n ')

console.log(
  '\`I\'m In \n\\\\\nLove \\\\ \"\"\" \'\'\'\n\
++ With ++\n\\\"\"\"\\\"\"\"\n \"\"JavaScript\"\"\`\`'
)

// Assignment_004
console.log('\n### Assignment 04 ###\n ')
let a = 21;
let b = 20;
console.log('_'+ a + '' + '_' + b + '' + a + '_' + b + '' + a + '_' + b + '' + a + '_' + b + '_');
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`)