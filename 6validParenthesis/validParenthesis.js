"use strict";
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

"Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true"
*/
const validParenthesis = (input) => {
    const stack = [];
    // Create a map to store matching pairs
    const pairs = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    // Loop through each character in the string
    for (let character of input) {
        // If it's an opening bracket, push it onto the stack
        if (pairs[character]) {
            stack.push(character);
        }
        else {
            // If it's a closing bracket, check the stack
            if (stack.length === 0 || pairs[stack.pop()] !== character) {
                return false;
            }
        }
    }
    // If the stack is empty, all brackets are matched
    return stack.length === 0;
};
