/*
Write a JavaScript function called findUnique that takes an array of numbers as input and returns an array containing only the unique numbers (those that appear exactly once) from the input array.

Requirements:
The function should preserve the order of the unique numbers as they first appear in the input array.
You may assume the input array contains only numbers.

// Input:
const input = [4, 3, 2, 4, 1, 3, 5, 6, 5];

// Output:
const output = findUnique(input); // Should return [2, 1, 6]
*/

const findUnique = (input: Array<number>): Array<number> => {
    const numberFrequency: { [key: string]: number } = {};
    for (const item of input) {
      if (numberFrequency[item]) {
        numberFrequency[item] = numberFrequency[item] + 1;
      } else {
        numberFrequency[item] = 1;
      }
    }
    const output: Array<number> = input.filter(item => numberFrequency[item] === 1);
  
    return output;
  };
  