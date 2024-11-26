"use strict";
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example:1
Input: s = ""A man, a plan, a canal: Panama"" Output: true Explanation: ""amanaplanacanalpanama"" is a palindrome.
example 2:
Input: s = ""race a car"" Output: false Explanation: ""raceacar"" is not a palindrome.
example 3:
Input: s = "" "" Output: true Explanation: s is an empty string """" after removing non-alphanumeric characters Since an empty string reads the same forward and backward, it is a palindrome.
*/
const isValidPalindrome = (s) => {
    const sInLowerCase = s.toLowerCase();
    const validChars = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const sArr = [...sInLowerCase];
    let originalValidArr = [];
    let reverseArr = [];
    for (let i = 0; i < sArr.length; i++) {
        if (validChars.includes(sArr[i])) {
            originalValidArr.push(sArr[i]);
            reverseArr = [sArr[i], ...reverseArr];
        }
    }
    return originalValidArr.every((item, index) => item === reverseArr[index]);
};
