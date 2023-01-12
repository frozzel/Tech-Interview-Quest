// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [3,0,1]
///slow
// var missingNumber = function(nums) {
//     nums.sort()
//     let n = nums.length;
//     for ( let i = 0; i < n; i++){
//         if (nums[i] != i){
//             return i;
//         }
//     }
//     return n;
// };
///faster
// var missingNumber = function(nums){
//     let numSet = new Set();
//     for (num of nums){
//         numSet.add(num);
//     }
//     for (let i =0; i<= nums.length; i++){
//         if (!numSet.has(i)){
//             return i;
//         }
//     }
//     return -1;
// }

// var missingNumber = function(nums){
//     let expXor= 0;
//     for (let i =0; i<= nums.length; i++){
//         expXor ^=i;
//     }
//     let actXor = 0;
//     for (num of nums){
//         actXor ^=num;
//     }
//     return expXor ^ actXor;
// }
var missingNumber = function(nums){
    let expSum= 0;
    for (let i =0; i<= nums.length; i++){
        expSum +=i;
    } 
    let actSum =0;
    for ( num of nums){
        actSum += num;
    }
    return expSum - actSum;
}


console.log(missingNumber(nums))