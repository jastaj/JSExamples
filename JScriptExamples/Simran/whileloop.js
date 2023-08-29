// 1. To print natural numbers.
var n=parseInt(prompt('Enter maximum limit:'));
// var i=0;
var i=1;

while(i<=n)
{
    document.write(i+'<br>');
    i++;
}


// 2. To print Even numbers.
var even=parseInt(prompt('Enter the maximum limit:'));
var j=2;

while(j<=even)
{
    document.write(j+'<br>');
    j=j+2;
}


// 3. To print Odd numbers.
var odd=parseInt(prompt('Enter the maximum limit:'));
var k=1;

while(k<=odd)
{
    document.write(k+'<br>')
    k=k+2;
}


// 4. To print numbers in reverse order.
var reverse=parseInt(prompt('Enter the maximum limit:'));
var l=reverse;

while(l>=1)
{
    document.write(l+'<br>');
    l--;
}


// 5. To print Table of a number.
var table=parseInt(prompt('Enter a number to print the table:'));
var m=1;

// while(m<=10)
while(m!=table)        
{
    document.write(table +' x '+m+' = '+m*table+'<br>');
    m++;
}

// 6. To print sum of natural numbers.
var num=parseInt(prompt('Enter the maximum limit:'));
var p=1;

var sum=0;

while(p<=num)
{
    sum=sum+p;
    p++;
}

document.write('Sum = '+sum);