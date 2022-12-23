// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// example:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// example:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
nums = [-7,-3,2,3,11]
nums1 = [-4,-1,0,3,10]

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    var results =  [];// empty array to put new values into
    var left = 0;// left pointer in array
    var right = nums.length -1; //right pointer in array
    var position = right;// the position in the 'results' array of new value
    console.log(`Begining Array`, nums)
    while(left<= right){ //must be less than or equal to so every value is accouted for
        if (nums[left]** 2 > nums[right]**2){// if square and the left is greater than right
            console.log(nums[left], `squared &`, nums[right], `squared =`)
            console.log(nums[left]**2, `is greater than `, nums[right]**2, `so its added to the last position in the Results Array`)
            results[position--]= nums[left++]**2; // add the squared value to the 'results' array at the last position
            console.log(`New Results Array:`,results)
        } else {// if square and right is greater than left
            console.log(nums[right], `squared &`, nums[left], `squared =`)
            console.log(nums[right]**2, `is greater than or equal to`, nums[left]**2, `so its added to the last position in the Results Array`)
            results[position--]= nums[right--]**2;// adds the right to the 'results' array at the last position
            console.log(`New Results Array:`,results)
        }
    }
    return results;// returns new array in sorted order squared
}


// console.log(`Final Results:`,sortedSquares(nums));
console.log(`Final Results:`,sortedSquares(nums1));