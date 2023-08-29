// var sub1=parseFloat(prompt('Enter marks of first subject'));
// var sub2=parseFloat(prompt('Enter marks of second subject'));
// var sub3=parseFloat(prompt('Enter marks of third subject'));
// var sub4=parseFloat(prompt('Enter marks of fourth subject'));

// var total=sub1+sub2+sub3+sub4;
// document.write('Marks obtained are: '+total);
// var per=(total/400)*100;
// document.write('Percentage is = '+per);

// if(per>=80 && per<=100)
// {
//     document.write('Merit');
// }
// else if(per>=60 && per<80)
// {
//     document.write('First Division');
// }
// else if(per>=50 && per<60)
// {
//     document.write('Second Division');
// }
// else if(per>=40 && per<50)
// {
//     document.write('Third Division');
// }
// // else if(per>=0 && per<40)
// // {
// //     document.write('Fail');
// // }
// // else
// // {
// //     document.write('Fail');
// // }
// else if(per<40)
// {
//     document.write('Fail');
// }

var p1Age=parseInt(prompt('Enter age of first person'));
var p2Age=parseInt(prompt('Enter age of second person'));
var p3Age=parseInt(prompt('Enter age of third person'));
var p4Age=parseInt(prompt('Enter age of fourth person'));

//if(p1Age>p2Age,p3Age,p4Age)

if(p1Age>p2Age && p1Age>p3Age && p1Age>p4Age)
{
    document.write('First person is oldest');
}
else if(p2Age>p1Age && p2Age>p3Age && p2Age>p4Age)
{
    document.write('Second person is oldest');
}
else if(p3Age>p1Age && p3Age>p2Age && p3Age>p4Age)
{
    document.write('Third person is oldest');
}
else if(p4Age>p1Age && p4Age>p2Age && p4Age>p3Age)
{
    document.write('Fourth person is oldest');
}

// var salary
// var yearOfService

// if(yearOfService>5)
// {
// 	var bonus=(salary*5)/100;
// 	document.write('Bonus = '+bonus)
// }
