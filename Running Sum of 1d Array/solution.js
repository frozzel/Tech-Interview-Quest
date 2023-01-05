/**
 * @param {number[]} nums
 * @return {number[]}
 */


var runningSum = function(nums) {
    let res = [nums[0]];
    nums.reduce((prev, curr) => {
        res.push(prev + curr);
        return prev + curr;
    });
    console.log(res)
    return res;
    
};

nums = [1,3,5,6]
console.log(runningSum(nums))