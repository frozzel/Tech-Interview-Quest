// Example 1: Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var k=8;
var nums = [3, 1, 2, 7, 4, 2, 1, 1, 5]

var findLength = function(nums, k) {
    let left = 0;// left pointer starts at 0 in array
    let curr = 0;// curr  starts at 0 in array
    let ans = 0;// ans  starts at 0 in array
    for (let right = 0; right < nums.length; right++) { //Loop from right pointer "start at 0 position", loop it as long as the array length, move right pointer in segments of +1
        curr += nums[right]; // curr will add the right position
        
        console.log(`total of left and rights sub array:`,curr)
        while (curr > k) {//curr will only add right position as long as its less than k (8)in example
            
            curr -= nums[left];// remove left point in sub array 
            console.log(`Reduce Left pointer until current is bellow k:`,curr)
            left++;// move to left one
        }
        ans = Math.max(ans, right - left + 1); //tally up number on arrays to find totall position count
       
    }

    return ans;
}

console.log(`Longest Sub Array Length is:`, findLength(nums, k))