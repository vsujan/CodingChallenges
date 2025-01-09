"use strict";
/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/
const majorityElement = (nums) => {
    let candidate = 0;
    let count = 0;
    // Phase 1: Find a candidate for the majority element
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    // Phase 2: Return the candidate
    return candidate;
};
