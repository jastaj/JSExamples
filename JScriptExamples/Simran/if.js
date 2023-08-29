// Printing the Salary, Year of service and bonus of employees.

var salary=parseInt(prompt('Enter the salary:'));
var yearOfservice=parseInt(prompt('Enter the year of service:'));

if(yearOfservice>5)
{
    var bonus=(salary*5)/100;
    document.write('Bonus='+bonus);
}