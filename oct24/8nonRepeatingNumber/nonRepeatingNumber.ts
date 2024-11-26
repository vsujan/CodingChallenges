/*
Given a sorted list of numbers in which all elements appear twice except one element that appears only once, find the number that appears only once.

Example:
Input: [1, 1, 2, 3, 3, 4, 4]
Output: 2
*/

const nonRepeatingNumber = (input: Array<number>): number => {
    const numberFrequency: { [key: string]: number } = {};
    for (const item of input) {
      if (numberFrequency[item]) {
        numberFrequency[item] = numberFrequency[item] + 1;
      } else {
        numberFrequency[item] = 1;
      }
    }
    const output: Array<number> = input.filter(item => numberFrequency[item] === 1);
  
    return output[0];
  };
  