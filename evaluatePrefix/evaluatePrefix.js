"use strict";
/*
Write a function to evaluate a given prefix expression (Polish notation). The expression will consist of operators followed by their
operands. Your function should handle basic arithmetic operations and support multi-digit integers.

Input:
A string representing a prefix expression (e.g., ""+ 5 3"") saperated by space("" "").
The expression may contain the following operators: +, -, *, /.
Operands can be multi-digit integers and may be negative.
Output:
Return the evaluated result as a number.
If the expression is invalid (e.g., malformed or unknown operators), return null or throw an error.

- You can assume that the input will be well-formed and contain at least one operator and two operands for valid operations.
- Consider edge cases, such as division by zero.
*/
const evaluatePrefix = (expression) => {
    const chars = expression.split(" ").reverse();
    const refChars = [];
    for (const c of chars) {
        if (["+", "-", "*", "/"].includes(c)) {
            const num1 = refChars.pop();
            const num2 = refChars.pop();
            if (num1 === undefined || num2 === undefined || Number(num2) === 0) {
                return null;
            }
            refChars.push(doOperation(c, num1, num2));
        }
        refChars.push(Number(c));
    }
    if (refChars.length !== 1) {
        throw new Error("Invalid expression");
    }
    return refChars[0];
};
const doOperation = (operator, num1, num2) => {
    let result = 0;
    switch (operator) {
        case "+":
            result = num1 + num2;
        case "-":
            result = num1 - num2;
        case "*":
            result = num1 * num2;
        case "/":
            result = num1 / num2;
    }
    return result;
};
