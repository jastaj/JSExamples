var num1=parseInt(prompt('Enter first number = '));
var num2=parseInt(prompt('Enter second number = '));

console.log('Numbers before swapping are ');
console.log('---------------------------');
console.log('First number = '+num1);
console.log('Second number = '+num2);
var temp=num2;
num2=num1;
num1=temp;

console.log('---------------------------');
console.log('Numbers after swapping are ');
console.log('---------------------------');
console.log('First number = '+num1);
console.log('Second number = '+num2);