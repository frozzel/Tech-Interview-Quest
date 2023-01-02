// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

nums = [1,2,3,4];//Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
nums1 = [1,1,1,1,1]//Output: [1,2,3,4,5]
nums2 = [3,1,2,10,1]//Output: [3,4,6,16,17]

var runningSum = function(nums){
    let ans = [nums[0]];
    console.log(nums, `Start By Adding the first position to the New ans Array`, ans)
   for (let i =1; i< nums.length; i++){//loop starts at position 1 not 0 because ans already tracks position 0
        console.log(`Loop through nums and add it to new Array`,nums[i],`+`,nums[i-1],`=`)
        ans.push(nums[i] += nums[i -1]);//add nums positions and push it into ans array
        console.log(`New ans Array:`,ans)
   }
   return ans;
}

console.log(`Nums Runnnig Sum`,runningSum(nums));
console.log(`Nums1 Runnnig Sum`,runningSum(nums1));
console.log(`Nums2 Runnnig Sum`,runningSum(nums2));

//if you remove ans array and change the nums array in place your space complexity will double in efficiency, with a 10% increase in time as well