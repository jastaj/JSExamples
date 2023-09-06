// find the reverse of a number using function

function reverse(n)
{
    var rem = 0, rev = 0;

    for(var i=1; i<=3; i++)
    {
        rev = n % 10;
        n = parseInt(n / 10);
        rem = (rem * 10) + rev;
    }

    console.log(rem)
}   

// user input for a 3 digit number
var num = parseInt(prompt("Enter 3 digit number : "));

// calling the function
reverse(num);