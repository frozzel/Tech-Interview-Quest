// Example 1: You are given a string s and an integer k. Find the length of the longest substring that contains at most k distinct characters.

// For example, given s = "eceba" and k = 2, return 3. The longest substring with at most 2 distinct characters is "ece".
let s = "eceba";
let k = 2;



let findLongestSubstring = (s, k) => {
    let count= new Map();
    let left =0, ans =0;
    for (let right =0; right < s.length; right++){////loops over window and maps the string while counting the number of times it displays
        console.log(`Map`,s[right], `Index Count:`,(count.get(s[right])  || 0) +1, `=`)
        count.set(s[right], (count.get(s[right])  || 0) +1);
        console.log(s[left],s[right])
        while (count.size > k){
            console.log(`While`,count.size,`>`, k)
            count.set(s[left], count.get(s[left])-1);
            console.log(`Move Left Window`, s[left], count)
            if (count.get(s[left])==0){
                console.log(`If`, s[left],`= 0, reduce count`)
                count.delete(s[left])
            }
            console.log(`Move Left window over one:`, s[left])
            left++
        }
      
        ans = Math.max(ans, right - left + 1);
       
    }
    return ans;
}

console.log(findLongestSubstring(s, k))