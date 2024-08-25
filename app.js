// ---------------Interview Questions----------------

// ---------Q1 Program to swap two two numbers---------

// let a = 4;
// let b = 5;

// console.log(`Before swapping: a = ${a} & b = ${b}`);

// let temp = a;
// a = b;
// b = temp;

// console.log(`After swapping: a = ${a} & b = ${b}`);

// ---------Without 3rd Variable---------
// -------------Method 1: Using Arithmetic Operations------------

// let a = 4;
// let b = 5;

// console.log(`Before swapping: a = ${a} & b = ${b}`);

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`After swapping: a = ${a} & b = ${b}`);

// -------------Method 2: Using Bitwise XOR------------

// let a = 4;
// let b = 5;

// console.log(`Before swapping: a = ${a} & b = ${b}`);

// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// console.log(`After swapping: a = ${a} & b = ${b}`);

// ---------Q2 Find factorial---------

// ---------Method 1: Iterative Approach--------------

// let a = 3;

// result = 1;
// for (i = 1; i <= a; i++) {
//     result *= i;
// }

// console.log(`Factorial of a given number is ${result}.`)

// ---------Method 2: Recursive Approach--------------

// Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.
// A recursive function typically has two parts:

// Base Case: The condition that stops the recursion.
// Recursive Case: The part where the function calls itself with a smaller input.

// Visula Representation

// factorialRecursive(5)
//   ↳ 5 * factorialRecursive(4)
//         ↳ 4 * factorialRecursive(3)
//               ↳ 3 * factorialRecursive(2)
//                     ↳ 2 * factorialRecursive(1)
//                           ↳ 1 (base case)


// function factorial(n){
//   if(n<0){
//     return "Factorial is not definend for negative integers."
//   }
//   else if(n === 0 || n ===1){
//     return 1;
//   }
//   else{
//    return n * factorial(n-1)
//   }
// }

// console.log(factorial(4));

// -----------------Q3 Fibonacci Sequence--------------

// function fibonacci(n) {
//     // Base case: If n is 0 or 1, return n
//     if (n === 0 || n === 1) {
//         return n;
//     }

//     // Recursive case: Calculate the sum of the two previous Fibonacci numbers
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // Example usage:
// console.log(fibonacci(3));  // Output: 5
// console.log(fibonacci(7));  // Output: 13


// -----------------Q4 Write a program to note the character count--------------

// let string = "Faraz";

// let a = 0;
// let b = 0;
// let c = 0;
// let d = 0;
// let e = 0;
// let f = 0;
// let g = 0;
// let h = 0;
// let i = 0;
// let j = 0;
// let k = 0;
// let l = 0;
// let m = 0;
// let n = 0;
// let p = 0;
// let q = 0;
// let r = 0;
// let s = 0;
// let t = 0;
// let v = 0;
// let w = 0;
// let x = 0;
// let y = 0;
// let z = 0;

// string = string.toLowerCase();

// for (let i = 0; i < string.length; i++) {
//     if (string[i] == "a") {
//         a++;
//     }
// }

// ---------------Q4 Write a function to find the power of any given number------------------


// let number = 5;
// let power = 3;

// let output = Math.pow(number, power);
// console.log(output);


// ------------------For Loop------------------

// let number = 50;
// let power = 2;

// let output;

// for (let i =0;i < power; i ++){
//     output = number * number;
// }

// console.log(output);

// -------Without using loop------------

// let number = 5;
// let power = 3;

// let output = 5 ** 3;
// console.log(output);

// ---------------Recursion--------------------

// let number = 5;
// let power = 3;

// function recursivePower(number, power) {
//     if (power === 0) {
//         return 1;
//     }

//     else {
//         return number * recursivePower(number, power - 1)
//     }
// }
// let output = recursivePower(number, power)

// console.log(output);

// ----------------Q5 Linear Search---------------

// let arr = [2, 6, 9, 3, 8, 5, 9, 1];
// let toFind = 9;

// let flag = false;
// function linearSearch(arr, toFind) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == toFind) {
//             console.log(`"${toFind}" found at index ${i}`);
//             flag = true;
//         }
//     }
//     if (!flag) {

//         console.log(`"${toFind}" Not found!`);
//     }
// }
// linearSearch(arr, toFind);

// ------------Q6 Binnary Search------------------

// let arr = [2, 6, 9, 3, 8, 5, 1];

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let toFind = 7;
arr.sort();

let totalLength = arr.length;
let midIndex = (totalLength - 1) / 2;
let startingIndex = 0;
let endingIndex = totalLength - 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[midIndex] == toFind) {
        console.log(`"${toFind}" found at index ${i}`);
    }
    else if (arr[midIndex] < toFind) {
        startingIndex = midIndex;
        midIndex = startingIndex / endingIndex;

    }
    else if (arr[midIndex] > toFind) {
        endingIndex = midIndex;
        midIndex = startingIndex / endingIndex;
    }
    else {
        console.log("Value not found!");

    }
};

