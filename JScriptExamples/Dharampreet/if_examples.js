// -----SOLUTION 1 -----
// var length=parseFloat(prompt("Enter Length of rectangle :"));
// var breadth=parseFloat(prompt("Enter Breadth of rectangle :"));
// console.log(`Length : ${length} Breadth : ${breadth}`);
// if(length==breadth)
//     console.log("It's a square [same length and breadth]");
// else
// console.log("It's a rectangle");

// -----SOLUTION 2-----
// var guy1=parseInt(prompt('Enter age of first person :'));
// var guy2=parseInt(prompt('Enter age of second person :'));
// var guy3=parseInt(prompt('Enter age of third person :'));
// var guy4=parseInt(prompt('Enter age of fourth person :'));

// if((guy1>guy2)&&(guy1>guy3)&&(guy1>guy4))
// console.log(`First person with age:${guy1} is oldest`);

// else if((guy2>guy1)&&(guy2>guy3)&&(guy2>guy4))
// console.log(`Second person with age:${guy2} is oldest`);

// else if((guy3>guy1)&&(guy3>guy2)&&(guy3>guy4))
// console.log(`Third person with age:${guy3} is oldest`);

// else
// console.log(`Fourth person with age:${guy4} is oldest`);

// -----Solution 3-----
var phy=parseInt(prompt("Enter Marks in Physics(/100) :"));
var chem=parseInt(prompt("Enter Marks in Chemistry(/100) :"));
var math=parseInt(prompt("Enter Marks in Math (/100):"));
var percent=((phy+chem+math)/300)*100;
if(percent>80)
console.log(`Percentage is ${percent} with Grade-A`);

if((percent>60)&&(percent<80))
console.log(`Percentage is ${percent} with Grade-B`);

if((percent>50)&&(percent<60))
console.log(`Percentage is ${percent} with Grade-C`);

if((percent>45)&&(percent<50))
console.log(`Percentage is ${percent} with Grade-D`);

if((percent>25)&&(percent<45))
console.log(`Percentage is ${percent} with Grade-E`);

else
console.log(`Percentage is ${percent} with Grade-F`);
