// program to use the functions for arithmetic operations

// function to perform addition
function sum(x,y)
{
    var add = x + y;
    return add;
}

// function to perform subtraction
function subt(x,y)
{
    var sub = x - y;
    return sub;
}

// function to perform multiplication
function mul(x,y)
{
    var multi = x * y;
    return multi;
}

// function to perform division
function div(x,y)
{
    var division = x / y;
    return division;
}

var num1 = parseInt(prompt("Enter number 1 :"));
var num2 = parseInt(prompt("Enter number 2 :"));

console.log(`The addition of ${num1} and ${num2} is ${sum(num1,num2)}`);
console.log(`The subtraction of ${num1} and ${num2} is ${subt(num1,num2)}`);
console.log(`The multiplication of ${num1} and ${num2} is ${mul(num1,num2)}`);
console.log(`The division of ${num1} and ${num2} is ${div(num1,num2)}`);