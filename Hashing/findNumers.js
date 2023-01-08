// Example 3: Given an integer array nums, find all the numbers x that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.


let nums= [5,2,7,10,3,9];

let findNumbers = num => {
    let ans= [];// stores numbers that match criteria
    let numsSet = new Set(nums)// turns nums into a set so it can be hashed
        for ( const num of nums){// loop through nums array and checks each number
            console.log(num,`- 1 =`, (num -1),`&`, num, `+ 1=`, (num +1),`are`, (num -1),`&`,(num +1), `in the Array:`, nums)
            if (!numsSet.has(num + 1)&& !numsSet.has(num -1)){// if num +||- 1 is not in nums add it to the ans
               
                ans.push(num)
                console.log(`True add to answer:`, ans)
            } else {//else statement only needed for displaying in console omit for better time O(n)
            console.log(`False dont add to answer`, ans)}
        }
    return ans;
}
console.log(`Final Answer:`,findNumbers(nums))