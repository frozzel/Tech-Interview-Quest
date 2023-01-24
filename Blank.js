// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let l1 = [2,4,3];
let l2 = [5,6,4];


var addTwoNumbers = function(l1, l2) {
   const r1 = +l1.reverse().join("");
   const  r2 = +l2.reverse().join("");
    // console.log(r1,r2);
    // let l1String = r1.join("");
    // let l2String = r2.join("");
  const ans =  r1 + r2;
console.log(ans)  
 const ansArray =   ans.reverse().split("");
    console.log(ansArray)
//   let ansArray = ans1.split("");

    return ansArray;
};

console.log(addTwoNumbers(l1,l2));
// array  = [1,2,3,4,5,6,7]
// function reverse(array){
//     var output = [];
//     while (array.length){
       
//         output.push(array.pop());
//     }

//     return output;
// }

// console.log(reverse(array));