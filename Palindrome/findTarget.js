//Example 2: Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum.

//For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// nums = [1, 2, 4, 6, 8, 9, 14, 15]; //true 4 + 9
nums = [1, 2, 5, 6, 8, 9, 14, 15]; //true 5 + 8
// nums = [1, 2, 3, 6, 8, 9, 14, 15]; //false
target = 13;
var checkForTarget = function(nums, target){
    let left =0;
    let right =nums.length -1;
    while (left < right){
        let current =  nums[left]+ nums[right];
        if(current==target){
            console.log(`Target is met when the left pointer hits`, nums[left], `and the right pointer hits`, nums[right], `in the array`)
            return true;

        }
        if (current > target){
            right--;
        }else{
            left++;

        }
    }
    console.log(`No numbers equal target`)
    return false;
}

console.log(checkForTarget(nums, target))  // change target number to assess diferrent combos