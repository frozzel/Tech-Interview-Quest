// Example 2: 2351. First Letter to Appear Twice

// Given a string s, return the first character to appear twice. It is guaranteed that the input will have a duplicate character.

/**
 * @param {string} s
 * @return {character}
 */

let s = ["a","b","c","d","e","f","z"];
let s1 =["f","u","c","k","","y","o","u"]
//////Slow way /////////
// var repeatedCharacter = function(s) {
//     let seen = new Set();
//     console.log(`Set Starts at:`, seen)
//     for (const c of s){
//         if (seen.has(c)){
//             console.log(c, `is in`, seen)
//             return c;
//         }
//         console.log(c, `in not in`, seen, `So add it`)
//         seen.add(c)
//     }
//     return 'No Matching Characters';
// }

/////fast way/////////
const repeatedCharacter = (s) => {
    let set = new Set();
    console.log(`Set Starts at:`, set)
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            console.log(s[i], `in not in`, set, `So add it`)
            set.add(s[i]);
        } else {
            console.log(s[i], `is in`, set)
            return s[i];
        }
    }
    return 'No Matching Characters';
}

console.log(`First Repeating Character 's':`,repeatedCharacter(s));
console.log(`First Repeating Character 's1':`,repeatedCharacter(s1));