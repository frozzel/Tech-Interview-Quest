// var cost = prompt('How much does milk Cost?')
// var wallet = prompt('How much money does the Robot Have')


// function getMilk(cost, wallet) {
//     console.log('leave house');
//     console.log('go to Store');
//     var bottesBought = Math.floor(wallet/cost);
//     if (cost > 4.00){
//         console.log('dont buy cost to much, leave store and go home')
//     } else {
//         console.log('bought ' + bottesBought +' bottles of Milk');
//         console.log('go home');
//         }
//     }
    


// getMilk(cost, wallet);

// var age = prompt('whats your age?')


// function lifeInWeeks(age) {
//     var death = 90;
//     var days = 365;
//     var weeks = 52;
//     var months = 12;
//     var timeLeft = death- age;

//     console.log('You have ' + (timeLeft * days) + ' days, '+ (timeLeft*weeks) + ' weeks, and '+ (timeLeft*months)+ ' months left.')
    
// }

// lifeInWeeks(age)


// function getMilk(money) {
//     return money % 1.5;
    
// }

// var change = getMilk(4);
// console.log(change)




/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

// function bmiCalculator(w, h) {
//     var height = Math.pow(h, 2);
//     var bmi = Math.round(w / height)
    
//     if (bmi < 18.5){
//         let  interpretation = ("Your BMI is "+ bmi +", so you are underweight.")
//         return interpretation;
//     } else if (bmi >= 18.5 && bmi <+ 24.9){
//         let interpretation = ("Your BMI is " +bmi+ ", so you have a normal weight.")
//         return interpretation;
//     } else  {
//         let interpretation = ("Your BMI is "+ bmi+ ", so you are overweight.")
//         return interpretation;
//     }
    
    
// }

// console.log(bmiCalculator(65, 1.8))






// var p1 = prompt('Love Connection Person 1');
// var p2 = prompt('Love Connection Person 2');

// var n = Math.random();
// n = Math.floor(n*100)+1;

// if (n > 70){
//     alert(p1+' loves '+ p2 + ' this much '+ n )
// } else if(n<=70 && n>=40){
//     alert(p1+' and '+ p2 + ' have '+ n +'% chance for love!')
// } else {
//     alert(p1+' and '+ p2 + ' have '+ n +'% chance for love they should run for the hills')
// }

// function isLeap(year){
        
//          if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
           
//                 return("Leap year.");
         
//         }
//         return ("Not leap year.");

// }

// isLeap(1948);


// var guest = prompt("Whats the guest name?");

// var guestList = ['chris', 'angela', 'jack', 'frank'];
// var guestList2 = ['chris', 'angela', 'jack', 'frank', 'bob'];

// function checkList(guest, guestList) {
   
//     if (guestList.includes(guest)){
//     return("Welcome "+ guest);
//     } else {
//     return(guest +" your Not on the list")
//     }
// };

// checkList(guest, guestList2)

// var output = [];
// var count =1;



// function fizzBuzz(){
//     if (count % 3 === 0 && output % 5 === 0){
//         output.push("fizzBuzz");
//     }
//     else if (count % 3 === 0){
//     output.push("fizz")
//     } 
//     else if (count % 5 === 0){
//         output.push("buzz");
       
//     }  else {
//         output.push(count)
       
//     }
//      count++;
//      console.log(output)
// }
 
   



// fizzBuzz();




// var names =["Angela", "Ben", "Jenny", "Michael", "Chloe"];

// function whosPaying(names) {
//     var numberOfPeople = names.length;
//     var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
//     var randomPerson = names[randomPersonPosition];
//     return randomPerson + " is going to buy lunch today!";
// }
// console.log(whosPaying(names));