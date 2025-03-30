// String Manipulation Functions:

// Reverse a String

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("hello")); // "olleh"



// Count Characters

// function countCharacters(word) {
//     return word.length;
// }

// console.log(countCharacters("hello")); // 5

// Capitalize Words

// function capitalizeWords(sentence) {
//     return sentence.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(' ');
// }

// console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"



// Array Functions

// Find Maximum and Minimum

// function findMax(arr) {
//     return Math.max(...arr);
// }

// function findMin(arr) {
//     return Math.min(...arr);
// }

// // console.log(findMax([19, 65, 1, 2, 6, 1, 9, 9, 2, 1])); // 65
// console.log(findMin([19, 65, 1, 2, 6, 1, 9, 9, 2, 1])); // 1



// Sum of Array

// function sumArray(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sumArray([19, 65, 1, 2, 6, 1, 9, 9, 2, 1])); // 115


// Filter Array

// function filterArray(arr, condition) {
//     return arr.filter(condition);
// }

// // Example: Filter out numbers greater than 10
// console.log(filterArray([19, 65, 1, 2, 6, 1, 9, 9, 2, 1], num => num > 10)); // [19, 65]



// Mathematical Functions

// Factorial


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // 120


// Prime Number Check

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(7)); // true
// console.log(isPrime(10)); // false




// Fibonacci Sequence

// function fibonacci(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
// }

// console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]

