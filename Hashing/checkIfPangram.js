// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false

/**
 * @param {string} sentence
 * @return {boolean}
 */
sentence = "thequickbrownfoxjumpsoverthelazydog";
sentence1 = "waltzbadnymphforquickjigsvex";

var checkIfPangram = sentence => {
    let seen = new Set();/// create new array that can only have one of each letter 
    for (let i = 0; i < sentence.length; i++){//loop through sentence array
        if (!seen.has(sentence[i])){
            console.log(`adds`, sentence[i], `to seen set`)
            seen.add(sentence[i])
        }
    }
    console.log( `seen set has`, seen.size, `=`, 26)
    return seen.size===26;
};

console.log(`Answer 1:`,checkIfPangram(sentence));
console.log(`Answer 2:`,checkIfPangram(sentence1));