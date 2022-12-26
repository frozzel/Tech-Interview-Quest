/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
//// Arrays must be pre sorted otherwise just combine arrays and then sort 

var combine = function(arr1, arr2){
    let ans= []; // new array to hold output
    console.log(`answer start empty`, ans, `shows each stage as added to Array of Answers`)
    let i = j = 0; //index to run through both arrays starting at the begining
    while (i  < arr1.length && j < arr2.length){ /// while loop that continues through the lenght until on array is complete
        if (arr1[i]< arr2[j]){ //if the integer in arr1 is greater than the integer in arr2 at the given point
            ans.push(arr1[i]); //add it to the new ans array
            i++; //move point up one to next integer to check
            console.log(ans)
        } else { // if arr1[i] is not greater
            ans.push(arr2[j]);//add arr2[j] to the ans array
            j++; // then move it to the next point
            console.log(ans)
        }
    }
    while ( i< arr1.length){ // continues to loop through arr1 to ensure all integers have been added
        ans.push(arr1[i]);
        i++;
        console.log(ans)
    }
    while ( j< arr2.length){ // continues to loop through arr2 to ensure all integers have been added
        ans.push(arr2[j]);
        j++;
        console.log(ans)
    }
    console.log(`final ans array:`)
    return ans;
}

arr1 = [1,4,7,20]
arr2 = [3,5,6]
arr3 = [12, 15,19,25]//shows both i & j are passed through regarless of length
arr4 = [2,6,13,19,29,36,55]
console.log(combine(arr1, arr2))
console.log(combine(arr3, arr4))