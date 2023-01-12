// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

 

// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// Example 2:

// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there is no 2, 4, 6, or 8 in arr.

/**
 * @param {number[]} arr
 * @return {number}
 */

var arr = [1,2,3];
var arr1 = [1000,1,0,999,555];

var countElements = function(arr) {
    arr.sort(function(a,b){return a-b});

    let count=0;
    let runLength = 1;
    
    console.log(arr)
    for (let i =1; i < arr.length; i++){
        if (arr[i-1] != arr[i]){
            if (arr[i -1]+1 == arr[i]){
                count += runLength;
            }
            runLength =0;
        }
        runLength+=1;
       
    }
    
    return count;
};
///dont get this one
console.log(countElements(arr));
console.log(countElements(arr1));