// var n=parseInt(prompt('Enter any number ='));
// var flag=0;

// for(i=2 ;i<n;i++)
// {
//     if(n%i==0)
//     {
//         flag=1;
//         break;
//     }
// }

// if(flag==0)
// {
//     console.log('Number is prime');
// }
// else{
//     console.log('Number is not prime');
// }


var n=parseInt(prompt('Enter first number of the range='));
var m=parseInt(prompt('Enter last number of the range='));


for(var j=n;j<=m;j++)
{
    var flag=0;
    for(i=2 ;i<j;i++)
    {
        if(j%i==0)
        {
            flag=1;
            
        }
    }

    if(flag==0)
    {
        console.log(j);
    }
    

}