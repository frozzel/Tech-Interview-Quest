// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0

// Constraints:
/**
 * @param {string} text
 * @return {number}
 */

let text = "loonbalxballpoon";
let text2 = "nlaebolko";
let text3 = "leetcode";

var maxNumberOfBalloons = function(text) {
    console.log(`if:`,text.length, `is less than 7, return 0`)
    if (text.length < 7) return 0;//if the length of the string is less than 7, return 0
    const map = {"b": 0, "a": 0, "l": 0, "o": 0, "n": 0};//predefine the map with key balloon/value 0
    for(let char of text){//loop through the string and map the characters
        console.log(`char:`,char)
        if (map.hasOwnProperty(char)) map[char] += 1;//if the map has the character, add 1 to the value
        console.log(`map:`,map)
    }
    let min = Number.MAX_SAFE_INTEGER;//set min to the max safe integer
    
    for(let char in map){//loop through the map to check the value of each character
        if (map[char]=== 0) return 0;//if the value is 0, return 0
        if (char === "l" || char === "o"){//if the character is l or o, divide the value by 2 and set it to min
            console.log(`char:`,char, `map[char]:`,map[char], `min:`,min)
            min = Math.min(min, Math.floor(map[char] / 2));//divide the value by 2 and set it to min because l and o can be used twice
            console.log(`min:`,min)
        } else {//else, set the value to min
            console.log(`char:`,char, `map[char]:`,map[char], `min:`,min)
            min = Math.min(min, map[char]);//set the value to min for all the other characters
            console.log(`min:`,min)
        }
    }
    return min;
};

console.log(maxNumberOfBalloons(text));
console.log(maxNumberOfBalloons(text2));
console.log(maxNumberOfBalloons(text3));