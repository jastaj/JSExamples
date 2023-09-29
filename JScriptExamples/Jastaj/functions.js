// var num1=parseInt(prompt('Enter first number'))
// var num2=parseInt(prompt('Enter second number'))
// const result=Addition(num1,num2);
// console.log('Addition= '+result);

// function Addition(x,y)
// {
//     var sum=x+y;
//     return sum;
// }

// var num=parseInt(prompt('Enter a number'))

// const result=Factorial(num);


// console.log('Factorial= '+result);

// function Factorial(n)
// {
//     var fact=1;
//     for(var i=1;i<=n;i++)
//     {
//         fact=fact*i;
//     }
//     return fact;
// }


// var num=parseInt(prompt('Enter a number'))

// prime(num);

// function prime(n)
// {
//     var flag=0;
//     for(var i=2;i<n;i++)
//     {
//         if(n%i==0)
//         {
//             flag=1;
//             break;
//         }
//     }
//     if(flag==0)
//     {
//         console.log(n+ ' is prime');
//     }
//     else
//     {
//         console.log('Number is not prime');
//     }
    
// }

var num=parseInt(prompt('Enter a three digit number'))
const result=reverse(num);
console.log(result);

function reverse(n)
{
    var sum=0;
    for(i=1;i<=3;i++)
    {
    var rem=n%10;
    n=parseInt(n/10);
    sum=(sum*10)+rem;
    }
return sum;
}
  


