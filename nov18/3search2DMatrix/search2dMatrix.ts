/*
You are given an m x n integer matrix matrix with the following two properties: Each row is sorted in non-decreasing order. The first integer of each row is greater than the last integer of the previous row. Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.

Example: 1
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

const searchMatrix = (matrix: number[][], target: number) => {
  const length: number = matrix.length;
  let result: boolean = false;
  for (let i: number = 0; i < length; i++) {
    const lengthOfEachMatrix = matrix[i].length;
    if (matrix[0][lengthOfEachMatrix - 1] >= target) {
      result = matrix[0].includes(target);
    }
  }
  return result;
};
