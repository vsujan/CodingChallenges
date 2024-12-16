"use strict";
/*
Sum of DIgits
Write a TypeScript function that takes a number as an input and returns the sum of its digits.
You should handle both positive and negative numbers, treating the negative sign as non-existent.
Example:
input 1234 output: 10
input:-456 output: 15
*/
const sumOfDigits = (num) => {
    let sum = 0;
    num = Math.abs(num);
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
};
