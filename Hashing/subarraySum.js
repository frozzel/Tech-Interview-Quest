// Example 4: 560. Subarray Sum Equals K

// Given an integer array nums and an integer k, find the number of subarrays whose sum is equal to k.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const k = 3;
const nums = [1,2,1,2,1];

var subarraySum = function(nums, k){
        let count = new Map();// map to store the count of curr_sum
        count.set(0, 1)// to handle the case when subarray starts from index 0
        let ans = curr = 0;//set ans and curr to 0
        console.log(`Map starts at:`,count,`to account for index 0`);
        for (num of nums){//iterate over the array
            curr += num;
            console.log(`curr`,curr,`-`,  k, `= if less than 0 don't add to ans:`);
            ans += count.get(curr - k) || 0;
            console.log( `ans is:`,ans);
            count.set(curr, (count.get(curr) || 0) + 1);
            console.log(`count is:`,count);
        }
        return ans;

}
console.log(subarraySum(nums,k));