// To print natural numbers.

var n=parseInt(prompt('Enter maximum limit'));
var i=1;
while(i<=n)
{
    console.log(i);
    i++;
}

//Even Numbers

var n=parseInt(prompt('Enter maximum limit'));
var i=2;
while(i<=n)
{
    console.log(i);
    i=i+2;
}

// Odd Numbers

var n=parseInt(prompt('Enter maximum limit'));
var i=1;
while(i<=n)
{
    console.log(i);
    i=i+2;
}

// In reverse Oder

var n=parseInt(prompt('Enter maximum limit'));
var i=n;
while(i>=1)
{
    console.log(i);
    i--;
}

// To print a table
var n=parseInt(prompt('Enter a number to print a table:'));
var i=1;
while(i<=10)
{
    console.log(n+' x '+i+' = '+n*i);
    i++;
}

// To print a sum of natural numbers
var n=parseInt(prompt('Enter a limit:'));
var i=1;
var sum=0;

while(i<=n)
{
    sum=sum+i;
    i++;
}

console.log('Sum of series='+sum);