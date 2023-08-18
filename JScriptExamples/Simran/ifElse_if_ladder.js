// Print days of week using ifElse if ladder.
var ch=prompt('Enter your choice from 1-7');

if(ch==1)
{
    document.write('Sunday');
}

else if(ch==2)
{
    document.write('Monday');
}

else if(ch==3)
{
    document.write('Tuesday');
}

else if(ch==4)
{
    document.write('Wednesday');
}

else if(ch==5)
{
    document.write('Thursday');
}

else if(ch==6)
{
    document.write('Friday');
}

else if(ch==7)
{
    document.write('Saturday');
}
else
{
    document.write('Invalid choice.')
}

// Perform Addition,Subtraction,Multiplication and division 

var choice=prompt('Press 1 for Addition\nPress 2 for Subtraction\nPress 3 for Multiplication\nPress 4 for Division\nEnter your choice 1-4:');

if(choice==1)
{
    var num1=parseInt(prompt('Enter first number:'));
    var num2=parseInt(prompt('Enter second number:'));

    var sum=num1+num2;
    document.write('Addition='+sum);
}
else if(choice==2)
{
    var num1=parseInt(prompt('Enter first number:'));
    var num2=parseInt(prompt('Enter second number:'));

    var sub=num1-num2;
    document.write('Subtraction='+sub);
}
else if(choice==3)
{
    var num1=parseInt(prompt('Enter first number:'));
    var num2=parseInt(prompt('Enter second number:'));

    var mul=num1*num2;
    document.write('Multiplication='+mul);
}
else if(choice==4)
{
    var num1=parseInt(prompt('Enter first number:'));
    var num2=parseInt(prompt('Enter second number:'));

    var div=num1/num2;
    document.write('Division='+div);
}
else
{
    document.write('Invalid choice.');
}


                     //OR

var choice_=prompt('Press + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nEnter your choice :');

if(choice_=='+' || choice_=='-' || choice_=='*' || choice_=='/')
{
    var num_1=parseInt(prompt('Enter first number:'));
    var num_2=parseInt(prompt('Enter second number:'));

    var value=num_1+choice_+num_2;
    var result=eval(value);
    document.write('Result=',result);
}

// To print divisions according to the marks.

var sub1=parseFloat(prompt('Enter marks of first subject:'));
var sub2=parseFloat(prompt('Enter marks of second subject:'));
var sub3=parseFloat(prompt('Enter marks of three subject:'));
var sub4=parseFloat(prompt('Enter marks of fourth subject:'));

var total=sub1+sub2+sub3+sub4;
document.write('Total='+total);

var per=(total/400)*100;
document.write('Percentage='+per); 

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
else
{
    document.write('Fail.')
}
// else if(per<40)
// {
//     document.write('Fail.')
// }