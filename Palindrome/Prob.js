// Check if Palindrome RACECAR is same forward and back!

/**
 * @param {string} s
 * @return {boolean}
 */
let s = ["r","a","c","e","c","a","r"];//true
let s1 = ["b","a","n","a","n","a"] //false
var checkifPalindrome= function(s){
    let left = 0
    let right = s.length -1;

    while (left < right){
        if (s[left] != s[right]){
            return false;
        }
        left++;
        right--;
    }
   
    return true;
    
}

let s2 = ["k","a","y","a","k",]//true
let s3 = [1,3,5,3,1]// true
let s4 = [1,6,5,5,1]// false
// it is case senitive need to convert array to lowercase for true test otherwise //


console.log(checkifPalindrome(s))
console.log(checkifPalindrome(s1))
console.log(checkifPalindrome(s2))
console.log(checkifPalindrome(s3))
console.log(checkifPalindrome(s4))