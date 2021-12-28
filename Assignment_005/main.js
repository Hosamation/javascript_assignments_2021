// Assignment_001
console.log('### Assignment 01 ###\n')

let userName = "Elzero";

console.log(userName[0].toLowerCase(0)); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.charAt(userName.indexOf('e')).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.slice(-6,-5).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substring(-1, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.substr(-6, 1).toLowerCase().repeat(3)); // eee

// Assignment_002
console.log('### Assignment 02 ###\n')

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True