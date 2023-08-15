// var num1=parseInt(prompt('Enter first number'));
// var num2=parseInt(prompt('Enter second number'));

// if(num1>num2)
// {
//     document.write  ('First number is greater');
// }
// else
// {
//     document.write('Second number is greater');
// }

// var num=parseInt(prompt('Enter a number'));

// if(num>0)
// {
//     document.write('Number is positive');
// }
// else
// {
//     document.write('Number is negative');
// }

// var num=parseInt(prompt('Enter a number'));

// if(num%2==0)
// {
//     document.write('Number is even');
// }
// else
// {
//     document.write('Number is odd');
// }


// let num1=parseInt(prompt('Enter first number'));
// let num2=parseInt(prompt('Enter second number'));
// let num3=parseInt(prompt('Enter third number'));
// //9,8,7
// //9,8,10
// //8,9,7
// //8,9,10
// if(num1>num2)
// {
//     if(num1>num3)
//     {
//         document.write('First number is greater');
//     }
//     else
//     {
//         document.write('Third number is greater');
//     }

// }
// else
// {
//     if(num2>num3)
//     {
//         document.write('Second number is greater');
//     }
//     else
//     {
//         document.write('Third number is greater');
//     }
// }


// var ch=parseInt(prompt('Enter your choice from 1-7'));

// if(ch==1)
// {
//     document.write("Sunday");
// }
// else if(ch==2)
// {
//     document.write('Monday');
// }
// else if(ch==3)
// {
//     document.write('Tuesday');
// }
// else
// {
//     document.write('Invalid Choice');
// }

var ch=prompt('Press 1 for Addition \nPress 2 for Subtraction\nPress 3 for Multiplication\nPress 4 for Division\nEnter your choice 1-4 ');

if(ch==1)
{
    var num1=parseInt(prompt('Enter first number'));
    var num2=parseInt(prompt('Enter second number'));

    var sum=num1+num2;
    document.write('Addition= '+sum);
}