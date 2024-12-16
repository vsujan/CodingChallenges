"use strict";
/*
First unique character	function that finds the first unique character in a given string. If no unique character exists, return -1.
Example:
Input: swiss Output: w (because w is the first unique followed by i)
Input: aabbcc Output: -1
*/
const firstUniqueCharacter = (str) => {
    const letterMap = {};
    for (let i = 0; i < str.length; i++) {
        if (letterMap[str[i]]) {
            letterMap[str[i]]++;
        }
        else {
            letterMap[str[i]] = 1;
        }
    }
    for (const key in letterMap) {
        if (letterMap[key] === 1) {
            return key;
        }
    }
    return -1;
};
