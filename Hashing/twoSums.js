// Example 1: 1. Two Sum

// Given an array of integers nums and an integer target, return indices of two numbers such that they add up to target.
//  You cannot use the same index twice.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let  target= 8;
let nums= [5,2,7,10,3,9];
let nums1= [2,7,11,15];
let nums2= [3,2,4];
var twoSum = function(nums, target) {
    let dic = new Map();
   
    for (let i = 0; i < nums.length; i++){
       let  num = nums[i];
        let comp = target- num;
        console.log(target,`-`, num,`=`, comp)
        if (dic.has(comp)){
            console.log(comp,`is already in map`, dic,`so log map position as:`)
            return [dic.get(comp),i]
        }
        console.log(`add number@`,num,`and index @`, i)
        dic.set(num, i);
        console.log(dic)
    }
    
    return [-1,-1];
}


console.log(twoSum(nums, target))