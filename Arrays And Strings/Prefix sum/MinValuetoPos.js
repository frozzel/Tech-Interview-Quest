// Minimum Value to Get Positive Step by Step Sum

// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.


/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [-3,2,-3,4,2];// Output: 5
// nums = [1,2]
// nums = [1,-2,-3]

var minStartValue = function(nums) {
        // We use "total" for current step-by-step total, "minVal" for minimum 
    // step-by-step total among all sums. Since we always start with 
    // startValue = 0, therefore the initial current step-by-step total is 0, 
    // thus we set "total" and "minVal" be 0.
    let minVal= 0;
    let total = 0;
    // Iterate over the array and get the minimum step-by-step total.
    for (var i = 0; i < nums.length; i++){
        console.log(`Loop nums`,nums[i],`+`,total)
        total += nums[i];
        console.log(`Total=`,total)
        minVal = Math.min(minVal, total)
        console.log(`minVal=`,minVal)
    }
        // We have to let the minimum step-by-step total equals to 1, 
    // by increasing the startValue from 0 to -minVal + 1, 
    // which is just the minimum startValue we want.
    console.log(-minVal,`+ 1=`)
    return -minVal +1;
};
console.log(minStartValue(nums));
