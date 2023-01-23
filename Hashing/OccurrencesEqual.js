// Example 3: 1941. Check if All Characters Have Equal Number of Occurrences

// Given a string s, determine if all characters have the same frequency.

// For example, given s = "abacbc", return true. All characters appear twice. Given s = "aaabb", return false. "a" appears 3 times, "b" appears 2 times. 3 != 2.


/**
 * @param {string} s
 * @return {boolean}
 */
const s = "abacbc"
const s1 = "aaabb"
var areOccurrencesEqual = function(s) {
    let count = new Map();// mapping count of each number in each array
    for (const x of s){// loop through each arr in "s"
        console.log(`Loop Position in Array:`,x, `add 1 to map at 'x'`,count.get(x), )
        count.set(x, (count.get(x) || 0)+1);
        console.log(count)
    }
   let frequency = new Set();
    for (const val of count.values()){// loop through the mapped integers
        console.log(`the integer:`,val, `appears`,val,`times`)
        frequency.add(val)// add value if it = n
        console.log(frequency)
    }
    return frequency.size == 1;// return true if all values are the same
}
console.log(`Occurrences are Equal?`,areOccurrencesEqual(s));
console.log(`Occurrences are Equal?`,areOccurrencesEqual(s1));