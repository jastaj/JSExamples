// 1. To find a greatest number between two numbers.

var num1=parseInt(prompt('Enter a first number:'));
var num2=parseInt(prompt('Enter a second number:'));

if(num1>num2)
{
    document.write('First number is greater.');
}
else
{
    document.write('Second number is greater.');
}


// 2. To find the number is positive or negative.

var number=parseInt(prompt('Enter a number:'));

if(number>0)
{
    document.write('Number is positive.');
}
else
{
    document.write('Number is negative.')
}


// 3. To find the number is Even or Odd.

var num_ber=parseInt(prompt('Enter a first number:'));


if(num_ber%2==0)
{
    document.write('Number is Even.');
}
else
{
    document.write('Number is Odd.');
}

// 4. Check the shape is square or not.

var length=prompt('Enter the length of a shape:');
var breadth=prompt('Enter the breadth of a shape:');

if(length==breadth)
{
    document.write('It is a sqaure.')
}
else
{
    document.write('It is not a square.')
}