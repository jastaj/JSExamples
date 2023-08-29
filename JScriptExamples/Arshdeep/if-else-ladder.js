var sub1=parseFloat(prompt('Enter marks of first subject'));
var sub2=parseFloat(prompt('Enter marks of second subject'));
var sub3=parseFloat(prompt('Enter marks of third subject'));
var sub4=parseFloat(prompt('Enter marks of fourth subject'));

var total=sub1+sub2+sub3+sub4;

var per=(total/400)*100;

if(per>=80 && per<=100)
{
    document.write('Merit');
}
else if(per>=60 && per<=80)
{
    document.write('First Division');
}
else if(per>=50 && per<=60)
{
    document.write('Second Division');
}
else if(per>=40 && per<=50)
{
    document.write('Third Division');
}
else if(per<40)
{
    document.write('Fail')
}
