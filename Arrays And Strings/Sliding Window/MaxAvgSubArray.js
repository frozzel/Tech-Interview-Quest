/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
k= 4;
nums= [1,12,-5,-6,50,3];

var findMaxAverage = function(nums, k) {
    let curr=0;
    for (i=0; i<k; i++){
        console.log(`Tally SubArray:`,curr,`plus`, nums[i])
        curr +=nums[i];
        console.log(`SubArray Total First Loop:`,curr)
    }
    ans = curr;
    for (let i =k; i < nums.length; i++){
        console.log(curr,`Minus Left Window`, nums[i-k],`add Right Window`, nums[i])
        curr += nums[i]-nums[i-k];
        console.log(`New Sub Array Total:`, curr)
        ans = Math.max(ans, curr);
        console.log(ans)
    }
    return ans / k;//to get avg /k
};
console.log(findMaxAverage(nums, k))

//same as slidding sum just divide by k (window size) for avarage