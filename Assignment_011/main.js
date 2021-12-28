// While Loop

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// while (index < friends.length) {
//   if (friends[counter][index] !== 'A') {
//   } 
// }

// console.log(friends[counter][index])

while (index < friends.length) {
  if (
      typeof friends[index] === 'string' && 
      friends[index][counter] !== 'A'
      ) {
    console.log(`${index} => ${friends[index]}`);
  }
  index++;
}
// while (counter < friends.length) {
//   console.log(`${counter} => ${friends[index]}`);

//   counter++;
// }