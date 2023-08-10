var ch=parseInt(prompt('Enter 1 for Addition, 2 for Subtraction, 3 for Multiplication and 4 for division. Enter your choice 1-4'));

if(ch)
{
    var num1=parseInt(prompt('Enter first number'))
    var num2=parseInt(prompt('Enter second number'))

    const result=num1+num2;
    document.write('Addition = '+result);
}
else if(ch==2)
{
    var num1=parseInt(prompt('Enter first number'))
    var num2=parseInt(prompt('Enter second number'))

    const result=num1-num2;
    document.write('Subtraction = '+result);
}
else if(ch==3)
{
    var num1=parseInt(prompt('Enter first number'))
    var num2=parseInt(prompt('Enter second number'))

    const result=num1*num2;
    document.write('Multiplication = '+result);
}
else if(ch==4)
{
    var num1=parseInt(prompt('Enter first number'))
    var num2=parseInt(prompt('Enter second number'))

    const result=num1/num2;
    document.write('Division = '+result);
}
else
{
    document.write('Invalid Choice');
}
