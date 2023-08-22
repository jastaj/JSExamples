var n=parseInt(prompt('Enter any number ='));
var flag=0;

for(i=2 ;i<n;i++)
{
    if(n%i==0)
    {
        flag=1;
        break;
    }
}

if(flag==0)
{
    console.log('Number is prime');
}
else{
    console.log('Number is not prime');
}