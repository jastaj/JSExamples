var num1=parseInt(prompt('Enter first number : '))
var num2=parseInt(prompt('Enter Second number : '))
var oper=parseInt(prompt('Enter operation 1 for Additon, 2 for Subtraction, 3 for Multiplication, 4 for Division '));
switch(oper)
{
    case 1: console.log('Addition is :' + (num1+num2) );break;
    case 2: console.log('Subtraction is :' + (num1-num2) );break;
    case 3: console.log('Multiplication is :' + (num1*num2) );break;
    case 4: console.log('Division is :' + (num1/num2) );break;
}