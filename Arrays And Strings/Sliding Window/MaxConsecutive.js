// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2;
nums1 = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k1 = 3;

var longestOnes = function(nums, k) {
    let ans = 0;//answer starts at 0
    let left = 0;//left pointer starts at 0
    let curr = k;//allows k to to change based on amount of 0 in sub Array
    for (let right = 0; right < nums.length; right++) {//loop through nums array starting at right pointer
    if (nums[right] === 0) {// if the right pointer position has a 0, subtract one from curr so the k varable never goes beond the params
        console.log(`current right pointer is:`, nums[right]);
      curr -= 1;//subtracting from k
      console.log(`Number of '0' Left:`, curr)
    }
    while (curr < 0) {// loop to move left pointer if the number of 0 drops below allotted amount
      if (nums[left] === 0) {// if left pointer is 0
        console.log(`current left pointer is:`, nums[left]);
        curr += 1;// give curr count another 0 to add
        console.log(`Number of '0' Left:`, curr)
      }
      left += 1;// moves left pointer to resize window
      console.log(`left pointer is now:`, nums[left])
    }
    ans = Math.max(ans, right - left + 1)// ans is  the max number of right index - left index plus 1 (because index starts at 0)
    console.log(`total max sub arrays so far:`,ans, `current position:`,[left,right],nums)
    }
    return ans;
};

console.log(`Answer 1:`, longestOnes(nums, k));
// console.log(`Answer 2:`, longestOnes(nums1, k1));
