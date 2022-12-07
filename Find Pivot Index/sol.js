/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    for(let sum = nums.reduce((sum, num) => sum + num, 0), i = 0, leftSum = 0; i < nums.length; leftSum += nums[i], i++)
        if(leftSum === sum - nums[i] - leftSum) return i;
    return -1;
};