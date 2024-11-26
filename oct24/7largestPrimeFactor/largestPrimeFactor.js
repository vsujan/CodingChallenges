"use strict";
/*
Write a program that finds the largest prime factor of a given positive integer n.
where 2 ≤ 𝑛 ≤ 10^9

Example:
Input: 13195
5
2639
7
377
13
29
Output: 29

Input: 600851475143
Output: 6857
*/
const largestPrimeFactor = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            num = num / i;
            i = 2;
        }
    }
    return num;
};
