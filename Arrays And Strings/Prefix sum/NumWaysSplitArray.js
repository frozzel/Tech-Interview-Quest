// Example 2: 2270. Number of Ways to Split Array

// Given an integer array nums, find the number of ways to split the array 
// into two parts so that the first section has a sum greater than or equal 
// to the sum of the second section. The second section should have at least one number.

/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [10,4,-8,7];
nums1 = [2,3,1,0]

// var waysToSplitArray = function(nums){
//     let prefix = [nums[0]];
//     for (let i =1; i < nums.length; i++){//create prefix sums
//         console.log( prefix[prefix.length -1],`+`,nums[i], `Prefix Sum=`)
//         prefix.push(nums[i]+ prefix[prefix.length -1])
//         console.log(prefix)
//     }
   
//     let ans =0;
//     for (let i =0; i < nums.length-1; i++){
//         console.log(prefix[prefix.length-1], `-`,prefix[i], `=` )
//         let leftWin = prefix[i];
//         let rightWin = prefix[prefix.length-1]- prefix[i];
//         console.log(rightWin, `is <=`, leftWin)
//         if (leftWin >= rightWin){
            
//             ans++
//             console.log(true)
//         } else {
            
//             console.log(false)
//         }
        
//     }
//     return ans;
// }

// console.log(`Ways Array Can Be Split:`, waysToSplitArray(nums));
// console.log(`Ways Array Can Be Split:`, waysToSplitArray(nums1));

var waysToSplitArrayFast = function(nums) {
    let ans = 0, leftSection = 0, total = 0; arr = [];
    for (const num of nums) {
        console.log(num,`+`, total,`=`)
        total += num;
        arr.push(total);
        console.log(total,`Prefix Sum =`, arr)
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
        leftSection += nums[i];
        let rightSection = total - leftSection;
        console.log(`compare left & right of Prefix`,arr, total,`-`, leftSection,`=`, rightSection)
        if (leftSection >= rightSection) {
            console.log(leftSection, `>=`,rightSection)
            console.log(true, `add to ans total`)
            ans++;
        } else{
            console.log(leftSection, `>=`,rightSection,false, `Dont add to ans`)
        }
    }
    
    return ans;
};
console.log(`Ways Array Can Be Split Fast:`, waysToSplitArrayFast(nums));
console.log(`Ways Array Can Be Split Fast:`, waysToSplitArrayFast(nums1));