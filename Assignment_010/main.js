// Assignment 01

// let start = 10,
//     end = 100,
//     exclude = 40;

// for (i = start; i <= end; i += start) {
//   if (i === exclude) {
//     continue;
//   }
//   console.log(i);
// }

// for (i = start; i <= end; i += start) {
//   if (i !== exclude) {
//     console.log(i);
//   }
// }

// Assignment 02

// let start_ = 10,
//     end_ = 0,
//     stop = 3;

// for (i = start_; i >= end_; i--) {
//   if (i < start_) {
//     console.log(`${end_}${i}`);
//     if (i === stop) {
//       break;
//     }
//   }
// }

// Assignment 03

// let _start = 1,
//     _end = 6,
//     breaker = 2;

// for (i = _start; i <= _end; i++) {
//   console.log(i)
//   for (j = breaker; j <= _end; j += breaker) {
//     if (j === _end) {
//       break;
//     }
//     console.log(`-- ${j}`);
//   }
// }

// Assignment 04

// let index = 10,
//     jump = 2,
//     _end_ = 0;


// for (;;) {
//   console.log(index);
//   index -= jump;
//   if (index === _end_) break;
// }

// for (;;) {
//   if (index > jump) {
//     console.log(index);
//     index -= jump;
//   } else break;
// }

// Assignment 05

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for (i = --letter.length; i < friends.length; i++) {
//   if (friends[i].startsWith(letter.toUpperCase())) {
//     continue;
//   } else {
//     console.log(`${i} => ${friends[i]}`);
//   }
// }


// Assignment 06

// let start_6 = 0;
// let swappedName = "elZerO";
// let str = '';
// for (i = start_6; i < swappedName.length; i++){
//   if (swappedName[i] === swappedName[i].toUpperCase()) {
//     str += swappedName[i].toLowerCase()
//   } else {
//     str += swappedName[i].toUpperCase()
//   }
// }
// console.log(str)

// Assignment 07

// let start_7 = 0,
//     mix = [1, 2, 3, 'A', 'B', 'C', 4];

// for (i = start_7; i < mix.length; i++) {
//   if (typeof mix[i] === 'number' && mix[i] > true) {
//   } else {
//     continue
//   }
//   console.log(mix[i])
// }
