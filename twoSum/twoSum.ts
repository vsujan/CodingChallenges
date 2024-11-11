/*
Given an array of integers, return the indices of the two numbers such that they add up to a specific target.

Input:nums = [2, 7, 11, 15], target = 9
Output: [0, 1]  # Because nums[0] + nums[1] = 2 + 7 = 9
*/

const twoSum = (nums: number[], target: number): number[] | undefined => {
  const refObj: { [key: number]: number } = {};
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (refObj[complement] !== undefined) {
      result = [refObj[complement], i];
    }
    refObj[nums[i]] = i;
  }
  return result.length === 2 ? result : undefined;
};
