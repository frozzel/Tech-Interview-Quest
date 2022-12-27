// Example 3: 713. Subarray Product Less Than K.

// Given an array of positive integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. The subarrays with products less than k are:

// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

// Key idea: Whenever you see a problem asking for the number of subarrays, think of this: at each index, how many valid subarrays end at this index? Let's split the 8 subarrays by their ending indices:

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
nums = [10, 5, 2, 6], k = 100;
var numSubarrayProductLessThanK = function(nums, k){
    if(k<=1){
        console.log(`End of Array`)
        return 0;
    }
    let ans =0, left = 0, curr =1;
    for (let right =0; right < nums.length; right++){
        console.log(curr, `*`,nums[right], `Answers Total SubArrays:`,ans)
        curr *= nums[right];
        console.log(`equals:`,curr)
        while (left <= right && curr >= k) {
            console.log(curr, `Exeeds K`,k)
            curr /= nums[left];
            console.log(`Move to next SubArray`, curr,`Answers Total SubArrays:`,ans)
            left++;
        }
        
        ans += right - left + 1;
    }
    return ans;
}

console.log(`Answer:`, numSubarrayProductLessThanK(nums, k))