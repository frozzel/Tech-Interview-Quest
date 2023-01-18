// Example 2: 2248. Intersection of Multiple Arrays

// Given a 2D array nums that contains n arrays of distinct integers, return a sorted array containing all the numbers that appear in all n arrays.

// For example, given nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], return [3, 4]. 3 and 4 are the only numbers that are in all arrays.

/**
 * @param {number[][]} nums
 * @return {number[]}
 */

nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]];//[3,4]

let intersection = nums => {
    let count = new Map();// mapping count of each number in each array
    for ( const arr of nums){// loops through each arr in nums
        console.log(`loop through the each nums array:`,arr)
        for (const x of arr){//loop through map 'count' and sets x to new mapped total 
            console.log(`Loop Position in Array:`,x, `add 1 to map at 'x'`,count.get(x))
            count.set(x, (count.get(x) || 0)+1);
            console.log(count)
        }
    }
    let n = nums.length;// create varible to store the number required for each arr count
    let ans = [];
    for (const [key, val]of count){/// loop through the mapped integers 
        console.log(`the integer:`,key, `appears`,val,`times`)
        if (val == n ){// add value if it = n
            console.log(val, `is added to ans because its in all arr:`)
            ans.push(key)
        } else {
            console.log(`not added because it isnt in each arr`)
        }
    }
    ans.sort((a,b)=> a-b);
    return ans;
}

console.log(intersection(nums))