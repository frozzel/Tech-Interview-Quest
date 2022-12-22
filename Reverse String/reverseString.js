// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.



/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
s = ["h","e","l","l","o"];
s1 = ["H","a","n","n","a","h"]
s2 = ["s","i","n","n","e","D"]

var reverseString = function(s) {
    var le = 0;
    var ri = s.length -1  // set pointers at each end of array
    while (le < ri){
        var tmp = s[le]; //temporarily hold the letter in memory
        console.log(`Array: `, s,`create temporary holding of s[le]= "`,  tmp, `" these should be the same as: "`, s[le],`"`)
        s[le++] = s[ri]; // moves the  right pointer to swap to left
        console.log(`inserts s[ri] "`, s[ri], `" to lefts position in loop, now array =`, s)
        s[ri--] = tmp; //inserts tmp into right pointers position, then reapeats loop until finished!
        console.log(`insert 'tmp' to loop position s[ri](right), array= `,s, `repeat until loop finishes!` )


    }
    return s;
};

s2.reverse()
console.log(`Easy Way`, s2)
console.log(`Long time consuming way:`)
console.log(reverseString(s)); console.log(`Finished results`);
// console.log(reverseString(s1)); console.log(`Finished results`);
// console.log(reverseString(s2)); console.log(`Finished results`);