// -----Factorial-----
// var n=parseInt(prompt("Enter number to find factorial :"));
// var fact=1;
// var sum=0;
// for(i=1;i<=n;i++)
// {
//     fact=fact*i;
//     sum=sum+(i/fact);
// }
// console.log("Factorial = "+fact);
// console.log("Sum = "+sum);

// -----Fibonacci Series-----
// var n=parseInt(prompt("Enter number to find Fibonacci Series :"));
// var pre=0;
// var curr=1;
// var next;
// console.log(pre);
// console.log(curr);
// for(i=0;i<=n;i++)
// {
//     next=pre+curr;
//     pre=curr;
//     curr=next;
//     console.log(next);
// }

// -----Prime Number-----
// var n=parseInt(prompt("Enter number to find it's prime  or not :"));
// var flag=0;
// for(i=2;i<n;i++)
// {
//     if(n%i==0)
//     {
//         flag=1;
//         break;
//     }
// }
// if(flag==0)
// {
//     console.log("Number is prime ");
// }
// else
// {
//     console.log("Number is not prime ");
// }

// -----Prime number from range-----
var beg=parseInt(prompt("Enter first number of Range: "));
var end=parseInt(prompt("Enter last number of Range: "));
for(i=beg; i<=end; i++)
{
for(j=2;j<i;j++)
{
    var flag=0;
    if(i%j==0)
    {
        flag=1;
        break;
    }
}
if(flag==0)
{
    console.log("Prime Number : "+i);
}
}
