// Example 1: 49. Group Anagrams

// Given an array of strings strs, group the anagrams together.

// For example, given strs = ["eat","tea","tan","ate","nat","bat"], return [["bat"],["nat","tan"],["ate","eat","tea"]].


let strs = ["eat","tea","tan","ate","nat","bat"];

function groupAnagrams(strs) {
    let groups = new Map();// creates a new map
    for (let str of strs) {// loops through strs array
        console.log(str, `sorted =`)
        let key = str.split('').sort().join('');// splits the string into an array, sorts the array, and joins the array back into a string
        console.log(key, `is the key`)
        if (!groups.has(key)) {// if the key is not in the map add it
            console.log(`key not in map add it`)
            groups.set(key, [])// adds the key to the map
            console.log(groups)
        } // else statement only needed for displaying in console omit for better time O(n)
        console.log(`key is in map  add it`)
            groups.get(key).push(str);// adds the string to the key
            console.log(groups)
        
    }
    let ans =[];// creates a new array to hold the answer
    for (const group of groups.values()){// loops through the map and adds the values to the ans array
        console.log(`group =`, group)
        ans.push(group);// adds the group to the ans array
        console.log(`ans =`, ans)
    }
    return ans;
}

console.log(`final answer=`,groupAnagrams(strs));