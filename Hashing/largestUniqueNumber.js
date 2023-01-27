// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

 

// Example 1:

// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.
// Example 2:

// Input: nums = [9,9,8,8]
// Output: -1
// Explanation: There is no number that occurs only once.

/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [5,7,3,9,4,9,8,3,1];
let nums1 = [9,9,8,8];

var largestUniqueNumber = function(nums) {
    let map = {};// created object to store the number and the count of the number
    let ans = -1;// set the answer to -1 incase there is no number that occurs only once
    console.log(`First create your Map object:`,map)
    for (let num of nums){// loop through the nums array
        console.log(`num:`,num)
        map[num] ? map[num]++ : map[num] = 1;// if the number is in the map object, increment the count by 1, else set the count to 1
        console.log(`map:`,map)
}
    console.log(`Then check and see if it occured more than once and which value is highest`)
    for (let num of nums){// loop through the nums array
        console.log(`num:`,num,`if Mapped num occured once:`,map[num],  `change previous ans:`,ans,`if num is greater than ans:`)
        if (map[num] === 1 && num > ans){// if the number has a count of 1 and the number is greater than the answer
            console.log(`num:`,num, `map[num]:`,map[num])
            ans = Math.max(ans, num);
            console.log(`ans:`,ans)
        }
    }
    return ans;
}
console.log(`the largest integer that only occurs once or -1 if null:`,largestUniqueNumber(nums));
console.log(`the largest integer that only occurs once or -1 if null:`,largestUniqueNumber(nums1));