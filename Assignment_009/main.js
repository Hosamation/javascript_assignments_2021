// Assignment_001

console.log('%cAssignmnet 01', 'font-size: 20px; color: red;');
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

console.log(myFriends);
console.log(myFriends.slice(myFriends, num));
console.log(myFriends.slice(--myFriends.length - num ));


// Assignment_002

console.log('%cAssignmnet 02', 'font-size: 20px; color: red;');

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop()
console.log(friends); // ["Eman", "Osama"]


// Assignment_003

console.log('%cAssignmnet 03', 'font-size: 20px; color: red;');

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
    finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Assignment_004

console.log('%cAssignmnet 04', 'font-size: 20px; color: red;');

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO
console.log(words[website.length][0].slice(website.length).toUpperCase());

// Assignment_005

console.log('%cAssignmnet 05', 'font-size: 20px; color: red;');

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// if (haystack.indexOf(needle) == true) {
//     console.log('Found')
// } else {
//     console.log('Not Found')
// }

haystack.indexOf(needle) ? console.log('Found') : console.log('Not Found');

// if (haystack.lastIndexOf(needle) == true) {
//     console.log('Found')
// } else {
//     console.log('Not Found')
// }

haystack.lastIndexOf(needle) ? console.log('Found') : console.log('Not Found');

// if (haystack.includes(needle) == true) {
//     console.log('Found')
// } else {
//     console.log('Not Found')
// }

haystack.includes(needle) ? console.log('Found') : console.log('Not Found');

// Assignment_006

console.log('%cAssignmnet 06', 'font-size: 20px; color: red;');

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
// Your Code Here
// allArrs = (allArrs.concat(arr2[2],arr1[2], arr2[3]).join('').toLowerCase());
allArrs = allArrs.concat(arr1.slice(arr1.length - true), arr2.slice(arr1.length - true)).sort().join('').toLowerCase();
console.log(allArrs); // fxy