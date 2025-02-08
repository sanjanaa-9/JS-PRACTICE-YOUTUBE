// 50  Questions  
// 1- BASIC CONSOLE USAGE [10 QUETIONS]

// Q-1 Log . your  name and favriot hobby to the console.
// solve
 
console.log("sanjana","reading books");

// Q-2 Perform and log the result of 45*2 -10.
//solve
console.log(45*2-10);

// Q-3 use console.log() to display the current year
 const year = new Date();
 console.log(year.getFullYear());

// Q-4 create two variables for firts and last name concatenated and log them.
// solve
  var first = "Sanjana"
  var last = "Harsh"
  console.log(first + " " + last);

  // one another way to solve this -

  console.log(`${first} ${last}`);

// Q-5 track the value of a variable by logging it before and after updating.
// solve
var a = 2025;
console.log(a);
var b = 2026;
console.log(b);
// Q-6 use console.error() to simulate an error message.
//solve 
console.error("Something went wrong");
// Q-7 Log the squre of the number 12 to the console.
console.log(12*12);

// Q-8 print the  type of a variable holding the value true .
var a = true;
console.log(typeof a);

// Q-9 create a variable holding your age and log whether it's greater than 18. 
// solve
var age = 20;
if (age > 18) console.log(true);
else console.log(false);
// Q-10 Log a result of 100/0 and observe the output 
console.log(100/0);

// 2- Variables and Data Types [10 QUESTIONS]

// Q-11 Decalre a variable using let and log its value.
// solve 
let one = 1
console.log(one);

// Q-12 create a constant to store the value of PI and log it.
// solve
const pi = Math.PI;
console.log(pi);

// Q-13 Reassign a value to a varible declared with let and log its result.
// solve
let aa = 1;
aa= 2;
console.log(aa);

// Q-14 check the type of null and log it 
// solve
console.log(typeof null);
// jab bhi typeof null nikalte hai null ka type hamesha object aata hai 

// Q-15 create a variable with a number as a string (e.g. "25") and log its types.
//solve
var a = "25";
console.log(typeof a);

// Q-16 use typeof to check the type of a buolean variable
// solve 
var b = true;

console.log(typeof b);

// Q-17 create three variables of types string, number, and boolean and log their values
let s = "hello", n = 20,o = true
console.log(s,n,b);
// Q-18 declare a variable without assigning a value log its type.
let v ;
console.log(typeof v);
// Q-19 create a variable with undefined and log its type.
// solve
  // kisi bhi string ka type string aata hai for e.g. "foo" iska typeof nikalenge to string aayega hamesha 
  // kisi bhi number ka type hamesha number aayega for eg. 9 iska typeof niklne pr hamesa number aayega 
  // kisi bhi boolean ka type hamesa boolean aayega for eg. true,false  iska typeof niklane pr hamesha boolean aayega
  // NaN (not a number) iska type niklne pr hamesa number aayega
  // null ka type hamesa type object aata hai
  
  let u = undefined;
  console.log(typeof u)

 
// Q-20 use const to create an array try reassigning the array and observe the error .
 
const arr = [1,2,3,4,5];
arr.pop();
console.log(arr);


// 3- Loops [10 QUESTIONS]

// Q-21 write a for loop to print numbers from 1 to 50 .

// solve

for(var i = 1; i<51; i++){
  console.log(i);
}

// Q-22 use a while loop to sum the number from 1 to 10
// solve

let count = 1;
let sum = 0;
while(count<11){
  sum = sum + count
  count++;

}
console.log(sum);

// Q-23 create a for....of loop to log each character of the string "javascript"
//   solve 
  let str = "javascript";
  for(let each of str){
    console.log(each);

  }

// Q-24 write a for loop that skips even number between 1 to 20.
// solve
for(var i = 1; i<21;i++){
  if(i%2===0){}
  else{
    console.log(i);
  }

}
// one another solution
for(var j=1; j<21;j++){
  if(j%2 !== 0){
    console.log(j);
  }
}
// Q-25 use a do...while loop to log number from 5 to 1 
// solve
var d = 5;
do{
  console.log(d);
  d--;
}
while(d>0);

// Q-26 create a for loop that calculates the factorial of 5 .
//solve
    let fact = 1;
    for(var i =5; i>0; i--){
      fact =  fact*i;
    }
    console.log(fact);

// Q-27 write a nested loop to print a 3x3 grid of numbers 
    //solve
   
    var hold = 0;
    for(var j=1; j<4; j++){
      var string = "";
      for(var i= 1; i<4; i++){
        string += `${hold} `;
        hold++;

      }
      console.log(string);
    }
// Q-28 use a for loop to reverse an array [1,2,3 ,4].
//soolve
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < Math.floor(arr2.length / 2); i++) {
    var temp = arr2[i];
    arr2[i] = arr2[arr2.length - 1 - i];
    arr2[arr2.length - 1 - i] = temp; 
}
console.log(arr2);
// Q-29 write a while loop that logs numbers from 1 to 100 divisible by 5.
//solve
let num = 1;
while(num<101){
  if(num%5===0)console.log(num);
  num++;
}
// Q-30 use A for ...in loop to iterate  over an object and log its keys. 
 // solve
 var obj = {
  name:"sanjana",
  age:20,
  gender:"Female",
  email:"sanjana1@gmail.com",
 }
 for(let key in obj){
  console.log(key);
 }
// Arrays [10 QUESTIONS]
// Q-31 create an array of your top 5 favriot movies and log it.
//solve
var movies = [" The Conjuring","The Exorcist","Queen","Spiderman","The Stand alone"];
movies.forEach(function(value){
  console.log(value);
})
// Q-32 find and log the second element of an array.
//solve
  var ar = [12,23,32,22,34];
  

// Q-33 add two new elements to the start of an array using .unshift().
// Q-34 remove the last elements of an array and log the updated array.
// Q-35 Use .slice() to extract the first three elements of an array .
// Q-36 find the index of a specific elements in an array using .indexOf().
// Q-37 check if a value exists in an array using  .includes().
// Q-38 combine two arrays [1,2] and [3,4] using .contact().
// Q-39 sort an array of numbers [5,2,9,1] in ascending order.
// Q-40 write a program that creates a copy of an array without mutating the original.


// Function (10 QUETIONS) -

// Q-41 write a function to check if a number is evenn or odd .
// Q-42 create a function to calculate the area of a circle with a given radius
// Q-43 write a function that accepts an array and return the sum of its elements
// Q-44 create a function that checks if a string starts with a specific character
// Q-45 write a function to find the maximum of two numbers
// Q-46 create a function that takes a number and returns its factorial
// Q-47 write a function that accepts a string and returns its reverse 
// Q-48 create a function to find the largest number in an array
// Q-49 write a function that converts a string to kebab-case (eg. "hello sanju" -> "hello sanju").
// Q-50 create a function that logs "hello","sanjana!" every time it is called 



