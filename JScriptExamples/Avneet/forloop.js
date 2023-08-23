//To print natural numbers.

// var n=parseInt(prompt('Enter maximum limit'));
// for(i=1;i<=n;i++)
// {
//     console.log(i);
// }



//To print even numbers

// var n=parseInt(prompt('Enter maximum limit'));
// for(i=2;i<=n;i=i+2)
// {
//     console.log(i);
// }



//Odd numbers

// var n=parseInt(prompt('Enter maximum limit'));
// for(i=1;i<=n;i=i+2)
// {
//     console.log(i);
// }



//Reverse Series

// var n=parseInt(prompt('Enter maximum limit'));
// for(i=n;i>=1;i--)
// {
//     console.log(i);
// }



// To print a sum of natural numbers

// var n=parseInt(prompt('Enter a limit:'));
// var sum=0;
// for(i=1;i<=n;i++)
// {
//     sum=sum+i;
// }
// console.log('Sum of series='+sum);



//Factorial of a number

// var num=parseInt(prompt('Enter a number'));
// var i;
// var fact=1;
// for(i=1;i<=num;i++)
// {
//     fact=fact*i;
// }
// console.log('Factorial = '+fact);



// Sum of series

// var n=parseInt(prompt('Enter a limit:'));
// var sum=0;

// for(i=1;i<=n;i++)
// {
//     sum=sum+Math.pow(i,2);
// }
// console.log('Sum of series='+sum);



var n=parseInt(prompt('Enter a limit:'));
var sum=0;
var sign;
for(i=1;i<=n;i++)
{
//    if(i%2==0)
// 	{
// 		sum=sum+(-i);
// 	}
// 	else
// 	{
// 		sum=sum+i;
// 	}
    sign=Math.pow(-1,i+1);
    sum=sum+(i*sign);
}
console.log('Sum of series='+sum);