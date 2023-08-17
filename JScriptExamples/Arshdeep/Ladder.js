var p1Age=parseInt(prompt('Enter age of first person'));
var p2Age=parseInt(prompt('Enter age of second person'));
var p3Age=parseInt(prompt('Enter age of third person'));
var p4Age=parseInt(prompt('Enter age of fourth person'));


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

// var salary=parseInt(prompt('Enter a Salary'));
// var yearOfService

// if(yearOfService>5)
// {
// 	var bonus=(salary*5)/100;
// 	document.write('Bonus = '+bonus)
// }
