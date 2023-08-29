// To perform Addition, Subtraction, Multiplication and Division of two numbers using Switch Statement.
var ch=parseInt(prompt('Press 1 for Addition\nPress 2 for Subtraction\nPress 3 for Multiplication\nPress 4 for Division\nEnter your choice 1-4:'));

switch(ch)
{

    case 1:

            var num1=parseInt(prompt('Enter first number:'));
            var num2=parseInt(prompt('Enter second number:'));

            var sum=num1+num2;
            document.write('Addition='+sum);
            break;

    case 2:


            var num1=parseInt(prompt('Enter first number:'));
            var num2=parseInt(prompt('Enter second number:'));

            var sub=num1-num2;
            document.write('Subtraction='+sub);
            break;

    case 3:

            var num1=parseInt(prompt('Enter first number:'));
            var num2=parseInt(prompt('Enter second number:'));

            var mul=num1*num2;
            document.write('Multiplication='+mul);
            break;

    case 4:

            var num1=parseInt(prompt('Enter first number:'));
            var num2=parseInt(prompt('Enter second number:'));

            var div=num1/num2;
            document.write('Division='+div);
            break;

    default:
            document.write('Invalid choice.');
}