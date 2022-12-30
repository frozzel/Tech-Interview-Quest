// Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, 
// return a boolean array that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, 
// or false otherwise.

// For example, given nums = [1, 6, 3, 2, 7, 2] and queries = [[0, 3], [2, 5], [2, 4]] and limit = 13, 
// the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @param {number} limit
 * @return {boolean[]}
 */
nums = [1, 6, 3, 2, 7, 2];
queries = [[0, 3], [2, 5], [2, 4]];
limit= 13;//from example ^^^


var answerQueries = function(nums, queries, limit){
    let prefix = [nums[0]];//create empty array to hold new nums array with prefix sum
    for (let i = 1; i < nums.length; i++){// loop through nums array to add up Prefix Sum
        console.log( prefix[prefix.length -1],`+`,nums[i], `Prefix Sum=`)
        prefix.push(nums[i] + prefix[prefix.length -1]);//adds the prefix sum of nums index to new array
        console.log(prefix, `loop || end`)
    }
    let ans = [];
    for (const [x,y] of queries){
        console.log(`Checking query[x,y]:`,[x,y],`Y-X Prefix Sum=`, prefix[y],`-`,prefix[x],` add num[x] to total +`,nums[x], `=`)
        let curr = prefix[y]- prefix[x] + nums[x];
        console.log(curr,`Limit is:`, limit,`answer is:`,limit>curr)
        ans.push(curr< limit);
    }
    return ans;
}

console.log(`Answer:`, answerQueries(nums, queries, limit));