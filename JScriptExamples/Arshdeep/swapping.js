// SWAPPING OF TWO NUMBERS

var num1=parseInt(prompt('Enter first number = '));
var num2=parseInt(prompt('Enter second number = '));

document.write('Numbers before swapping are ');
document.write('-----------------------------');
document.write('First number = '+num1);
document.write('Second number = '+num2);
var temp=num2;
num2=num1;
num1=temp;

document.write('-----------------------------');
document.write('Numbers after swapping are ');
document.write('-----------------------------');
document.write('First number = '+num1);
document.write('Second number = '+num2);