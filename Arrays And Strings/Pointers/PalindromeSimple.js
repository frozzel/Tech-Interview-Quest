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
   
    console.log(s)
    return true;
    
}

let s2 = ["k","a","y","a","k",]//true
let s3 = [1,3,5,3,1]// true
let s4 = [1,6,5,5,1]// false
// it is case senitive need to convert array to lowercase for true test otherwise //


console.log(`is s palindrome?`,checkifPalindrome(s))
console.log(`is s1 palindrome?`, checkifPalindrome(s1))
console.log(`is s2 palindrome?`,checkifPalindrome(s2))
console.log(`is s3 palindrome?`,checkifPalindrome(s3))
console.log(`is s4 palindrome?`,checkifPalindrome(s4))


console.log(`Next Test`)

/**
 * @param {string} b
 * @return {boolean}
 */
b= "A man, a plan, a canal: Panama"
console.log(`Original Expression:`, b)
var isPalindrome = function(b) {
    b=  b.toLowerCase();
     console.log(`to lowercase:`,b)
    b= b.replace(/[^0-9a-z]+/g,"");
    console.log(`removes spaces and symbols:`,b)

    let le = 0;
    let ri = b.length -1
    while (le< ri){
        if (b[le] !=b[ri]){
            console.log(`True/False is Palindrome?`)
            return false;
        }
        le++
        ri--
    }
    console.log(`True/False is Palindrome?`)
    return true;
};
b2= "race a car";
b3= " ";
console.log(isPalindrome(b))
console.log(isPalindrome(b2))
console.log(isPalindrome(b3))