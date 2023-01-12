// function string_reverse(str) 
// function LetterChanges(text) {
// //https://goo.gl/R8gn7u
// var s = text.split(/[a-z]/gi,'');
// for (var i = 0; i < s.length; i++) {
// // Caesar cipher
// switch(s[i]) {
// case ' ':
// break;
// case 'z':
// s[i] = 'a';
// break;
// case 'Z': 
// s[i] = 'A';
// break;
// default:
// s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
// }

// // Upper-case vowels
// switch(s[i]) {
// case 'a': case 'e': case 'i': case 'o': case 'u':
// s[i] = s[i].toUpperCase();
// }
// }
// return s.join('');
// }

// function transform(text) {
//     var caesar = text.replace(/[a-z]/gi, function(c) {
//         switch (c) {
//           case 'z': return 'a';
//           case 'Z': return 'A';
//           default:  return String.fromCharCode(1 + c.charCodeAt(0));
//         }
//     });
//     return caesar.replace(/[aeiou]+/g, function(vowel) {
//         return vowel.toUpperCase();
//     });
// }
// // console.log(LetterChanges("PYTHON"));
// // console.log(LetterChanges("W3R"));
// console.log(transform("hello*3"));

function SimpleSymbols(str){
    str = '=' + str + '='
    for (c in str:){
        if c.isalpha():
        if not str[str.index(c)-1] == '+' or not str[str.index(c)+1] == '+':
            return 'false'
    }
        
}
    
    return 'true'
    
// # keep this function call here  
console.log(SimpleSymbols(str));
