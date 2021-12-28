// String Manipulation Challenge 

// string_manipulation_challenge

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero


// 8 H
console.log(a[13].toUpperCase().repeat(8)); // HHHHHHHH
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH
console.log(a.charAt(a.indexOf('h')).toUpperCase().repeat(8)); // HHHHHHHH
console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH
console.log(a.substring(13, 14).toUpperCase().repeat(8)); // HHHHHHHH
console.log(a.substr(13, 1).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(' ', 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(`${a.charAt().toLowerCase()}${a.slice(1, -1).toUpperCase()}${a.substr(-1).toLowerCase()}`); // eLZERO WEB SCHOOl