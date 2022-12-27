// Example 2: You are given a binary substring s (a string containing only "0" and "1"). An operation involves flipping a "0" into a "1". What is the length of the longest substring containing only "1" after performing at most one operation?

// For example, given s = "1101100111", the answer is 5. If you perform the operation at index 2, the string becomes 1111100111.
/**
 * @param {string} s
 * @return {number}
 */
s = "1101100111";

var findLength = function(s){
    let left = 0, curr =0, ans =0;// set all points at 0 in the index
    for (let right= 0; right < s.length; right++){// loop through the right pointer position
        console.log(s,[s[left], s[curr],s[right]], ans)
        if (s[right]== "0"){//condition to end sub string if theres a '0'
            curr++; // move curr by one if condition true
        }
        while (curr > 1){// new conditional loop inside sub string
            if (s[left]== "0"){// if left pointer is equal to 0 move curr and then move left pointer
                curr-=1;
            }
            left++;
        }
        ans= Math.max(ans, right-left +1);//tally the number that meets the logic
    }
    return ans;
}


console.log(`Answer:`, findLength(s))