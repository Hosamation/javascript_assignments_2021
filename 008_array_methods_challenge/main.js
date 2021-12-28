// Array Methods Challenge

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.reverse().splice(zero, --counter)
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(--counter, my.length - true)); // ["Elham", "Mazero"]
console.log(my.slice(++zero, ++counter)); // ["Elham", "Mazero"]

// console.log(my.slice(zero, counter)[--zero] + my.slice(++zero, counter)[--zero])

// console.log(  my.slice(zero, counter)[--zero].slice(zero++, counter - zero) +
//     my.slice(zero, counter)[zero++].slice(zero--))

console.log(my.slice(zero, counter)[--zero].slice(zero, --counter) +
    my.slice(++zero, ++counter)[zero--].slice(--counter)
); // Elzero

// console.log(my[counter].substr(zero, ++counter) + my[my.length / counter].substr(counter)); // "Elzero"
// console.log(`${my[counter].substr(zero, ++counter)}${my[my.length / counter].substr(counter)}`);

// console.log(my[counter].charAt(++counter + true) + my[--counter].charA)); // "rO"
// console.log(zero)
// console.log(counter)
console.log(my[2][4] + my[2][5]); // "rO"
console.log(my[counter][counter + counter] + my[counter++][counter + --counter].toUpperCase())
// console.log(my[++zero][++counter] + my[zero--][++counter].toUpperCase()); // "rO"