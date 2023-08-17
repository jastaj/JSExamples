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


// var ch=prompt('Press + for Addition \nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nEnter your choice =');

// if(ch=='+' || ch=='-' || ch=="*" || ch=='/')
// {
//     var num1=parseInt(prompt('Enter first number='));
//     var num2=parseInt(prompt('Enter second number='));

//     var sum=num1+ch+num2;
//     var result=eval(sum);
//     document.write('Result = '+result);
// }



// To print the divisons according to their marks

var sub1=parseFloat(prompt('Enter marks of first subject = '));
var sub2=parseFloat(prompt('Enter marks of second subject = '));
var sub3=parseFloat(prompt('Enter marks of three subject = '));
var sub4=parseFloat(prompt('Enter marks of fourth subject = '));

var total=sub1+sub2+sub3+sub4;
document.write('Total Marks = '+total);

var per=(total/400)*100;
document.write('Percentage = '+per); 

if(per>=80 && per<=100)
{
    document.write('Merit');
}
else if(per>=60 && per<80)
{
    document.write('First Division.');
}
else if(per>=50 && per<60)
{
    document.write('Second Division.');
}
else if(per>=40 && per<50)
{
    document.write('Third Division.');
}
else if(per>=0 && per<40)
{
    document.write('Fail');
}
// else if(per<40)
// {
//     document.write('Fail.')
// }
else
{
    document.write('Fail.')
}
