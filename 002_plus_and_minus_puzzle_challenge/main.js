// Challenge One | Plus ANd Minus Puzzle

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[++a]
- Value: 11
- Explain: Pre Increment
[+]
- Explain: Addition Operator
[+b++]
- Value: 20 => 21
- Explain: [+] Unary Plus [b++] Post Increment
[+] 
- Explain: Addition Operator
[+c++]
- Value: 80 => 81
- Explain: [+] Unary Plus [c++] Post Increment
[-]
-Explain: Subtract Operator
[+a++]
- Value: 11 = 12
- Explain: [+] Unary Plus [a++] Post Increment
*/

// console.log(++a + -b + +c++ - -a++ + +a);
/*
[++a]
- Value: 13
- Explain: Pre Increment
[+]
-Explain: Addition Opreator
[-b]
- Value: -21
- Explain: Unary Negation
[+]
- Explain: Addition Operator
[+c++]
- Value: 81
- Explain: post Increment
[-]
- Explain: Subtraction Operator
[-a++]
- Value: -13
- Explain: [-] Unary Negation [a++] Post Increment 
[+]
- Explain: Addition Operator
[+a]
- Value: 14
- Explain: Unary Plus
*/


// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
  [--c]
  - Value: 79
  - Explain: Pre Decrement
  [+]
  -Explain: Addition Operator
  [+b]
  - Value: 20 
  - Explain: Unary Plus
  [+]
  - Explain: Addition Operator
  [--a]
  - Value: 9
  - Explain: Pre Decrement
  [*]
  - Explain: Multiplication Operator
  [+b++]
  - Value: 20
  - Explain: [+] Unary Plus [b++] Post Increment
  [-]
  - Explain: Subtraction Operator
  [+b]
  - Value: 20
  - Explain: Unary Plus 
  [*]
  - Explain: Multiplication Operator
  [a]
  - Value: 10
  - Explain: 
  [+]
  - Explian: Addition Operator
  [--a]
  - Value: 9
  - Explain: Pre Decrement
  [-]
  - Explain: Subtraction Operator
  [+true]
  - Value: 1
  - Explain: 
*/

