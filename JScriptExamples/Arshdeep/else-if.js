// Days of week

var ch=parseInt(prompt('Enter your choice from 1-7'));

if(ch==1)
{
    document.write("Sunday");
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
    document.write('Invalid Choice');
}

//Pressing Button

var ch=prompt('Press 1 for Addition \nPress 2 for Subtraction\nPress 3 for Multiplication\nPress 4 for Division\nEnter your choice 1-4 ');

if(ch==1)
{
    var num1=parseInt(prompt('Enter first number'));
    var num2=parseInt(prompt('Enter second number'));

    var sum=num1+num2;
    document.write('Addition= '+sum);
}