// ------Example 1------
// var length = parseFloat(prompt("Enter the length:"));
// var breadth = parseFloat(prompt("Enter the Breadth:"));
// console.log(`Length : ${length}`);
// console.log(`Breadth : ${breadth}`);

// if (length==breadth)
// {
//     console.log("It is a square");
// }
// else {
//     console.log('It is a rectangle');
// }

// ------Example 2-----
// var p1 = parseInt(prompt("Enter the age of first person :"));
// var p2 = parseInt(prompt("Enter the age of second person :"));
// var p3 = parseInt(prompt("Enter the age of third person :"));
// var p4 = parseInt(prompt("Enter the age of fourth person :"));
// if((p1>p2)&&(p1>p3)&&(p1>p4))
// {
//     console.log(`First Person with age : ${p1} is oldest`);
// }
// if((p2>p1)&&(p2>p3)&&(p2>p4))
// {
//     console.log(`Second Person with age : ${p2} is oldest`);
// }
// if((p3>p1)&&(p3>p2)&&(p3>p4))
// {
//     console.log(`Third Person with age : ${p3} is oldest`);
// }
// else
// {
//     console.log(`Fourth Person with age : ${p4} is oldest`);
// }

// -----Example 3----

var chem = parseInt(prompt("Enter the marks of Chemistry"));
var phy = parseInt(prompt("Enter the marks of Physics"));
var math = parseInt(prompt("Enter the marks of Mathematics"));
var prctage = ((chem+phy+math)/300*100);

if(prctage>80){
    console.log(`Percentage is ${prctage} : with A Grade`);
}
if((prctage<80)&&(prctage>60)){
    console.log(`Percentage is ${prctage} : with B Grade`);
}
if((prctage<60)&&(prctage>50)){
    console.log(`Percentage is ${prctage} : with C Grade`);
}
if((prctage<50)&&(prctage>45)){
    console.log(`Percentage is ${prctage} : with D Grade`);
}
if((prctage<45)&&(prctage>25)){
    console.log(`Percentage is ${prctage} : with E Grade`);
}
else{
    console.log(`Percentage is ${prctage} : with F Grade`);

}
