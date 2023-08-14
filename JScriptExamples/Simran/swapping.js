// Using document.write
var num1=prompt('Enter first number:');

var num2=prompt('Enter second number:');

document.write('Values before swapping'+'<br>');
document.write('*******************************'+'<br>');
document.write('First number is '+num1+'<br>');
document.write('Second number is '+num2+'<br>'+'<br>');

var temp=num2;
num2=num1;
num1=temp;

document.write('Values after Swapping'+'<br>');
document.write('*******************************'+'<br>');
document.write('First number is '+num1+'<br>');
document.write('Second number is '+num2+'<br>');

// Using console.log

var number1=prompt('Enter first number:');

var number2=prompt('Enter second number:');

console.log('\nValues before swapping');
console.log('\n*******************************');
console.log('\nFirst number is '+number1);
console.log('\nSecond number is '+number2);

var tem_p=number2;
number2=number1;
number1=tem_p;

console.log('\nValues after Swapping');
console.log('\n*******************************');
console.log('\nFirst number is '+number1);
console.log('\nSecond number is '+number2);