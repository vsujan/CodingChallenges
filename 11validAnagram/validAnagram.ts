/*
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.


An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Example 1:

Input: s = ""anagram"", t = ""nagaram""

Output: true

Example 2:

Input: s = ""rat"", t = ""car""

Output: false
*/

const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) {
        return false;
    }
    const sChars = [...s];
    sChars.sort();
    const tChars = [...t];
    tChars.sort();
    const orgS = sChars.toString();
    const orgT = tChars.toString();
    return orgS === orgT;
};
