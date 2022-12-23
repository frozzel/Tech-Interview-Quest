// Example 4: 392. Is Subsequence.

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) 
// of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


s ="ace";
t = "abcde";
var isSubsequence = function(s, t){
    let i = j = 0; //setup index of 0 for each string or array
    while (i<s.length && j<t.length){ //loop through each strings length as until it ends
        if (s[i]== t[j]){ /// check if letters are the same, then move to next letter in s
            console.log(`matches with: "`, s[i], `" first varible & "`,t[j], `" secound varible`)
            i++
        }
        console.log(`didnt match: "`, s[i],`" first varible & "`, t[j], `" secound varible`)
        j++// if letters are not the same move to next leter in t
    }
    console.log(i, s.length)
    return i == s.length; /// return the answer once looped through all of s string (or array)
}
a = "124";
b = "1345"; // false, there is no 2 in set b
console.log(`is first varible a subsequence?`,isSubsequence(s, t))
console.log(`is first varible a subsequence?`,isSubsequence(a, b))