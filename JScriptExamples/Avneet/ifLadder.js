// // Print days of week using if else if ladder

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
// else if(ch==4)
// {
//     document.write('Wednesday');
// }
// else if(ch==5)
// {
//     document.write('Thursday');
// }
// else if(ch==6)
// {
//     document.write('Friday');
// }
// else if(ch==7)
// {
//     document.write('Saturday');
// }
// else
// {
//     document.write('Invalid Choice');
// }




// var ch=prompt('Press 1 for Addition \nPress 2 for Subtraction\nPress 3 for Multiplication\nPress 4 for Division\nEnter your choice 1-4=');

// if(ch==1)
// {
//     var num1=parseInt(prompt('Enter first number='));
//     var num2=parseInt(prompt('Enter second number='));

//     var sum=num1+num2;
//     document.write('Addition= '+sum);
// }
// if(ch==2)
// {
//     var num1=parseInt(prompt('Enter first number='));
//     var num2=parseInt(prompt('Enter second number='));

//     var sub=num1-num2;
//     document.write('Subtraction= '+sub);  
// }
// if(ch==3)
// {
//     var num1=parseInt(prompt('Enter first number='));
//     var num2=parseInt(prompt('Enter second number='));

//     var multi=num1*num2;
//     document.write('Multiplication= '+multi);  
// }
// if(ch==4)
// {
//     var num1=parseInt(prompt('Enter first number='));
//     var num2=parseInt(prompt('Enter second number='));

//     var div=num1/num2;
//     document.write('Division= '+div);  
// }


var ch=prompt('Press + for Addition \nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nEnter your choice =');

if(ch=='+' || ch=='-' || ch=="*" || ch=='/')
{
    var num1=parseInt(prompt('Enter first number='));
    var num2=parseInt(prompt('Enter second number='));

    var sum=num1+ch+num2;   //3+2
    var result=eval(sum);
    document.write('Result = '+result);
}
