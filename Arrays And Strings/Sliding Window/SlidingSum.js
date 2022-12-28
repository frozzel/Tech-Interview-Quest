// Example 4: Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

k =4;
nums = [3,-1,4,12,-8,5,6];
nums1 = [2,7,2,8,9,16,-5,6]
var findBestSubarray = function(nums, k){
    let curr =0;
    for ( i =0; i< k; i++){//loop through first sub array, k is your window length
        console.log(`Tally SubArray:`,curr,`plus`, nums[i])
        curr += nums[i];// curr adds each loop from the array
        console.log(`SubArray Total First Loop:`,curr)
    }
       let ans = curr;
       for (let i =k; i < nums.length; i++){// move the window to check for all posible totals
        console.log(curr,`Minus Left Window`, nums[i-k],`add Right Window`, nums[i])
        curr += nums[i]- nums[i-k];// adds new loop integer, subtracts left positions integer
        console.log(`New Sub Array Total:`, curr)
        ans = Math.max(ans, curr)// compares each loops total for the hightest answer/total
       }
       return ans;
}


console.log(`Hightest Total in SubArray:`,findBestSubarray(nums, k))
// console.log(`Hightest Total in SubArray:`,findBestSubarray(nums1, k))