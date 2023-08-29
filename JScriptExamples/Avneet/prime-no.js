var a=parseInt(prompt('Enter first number of the range='));
var b=parseInt(prompt('Enter last number of the range='));


for(var j=a;j<=b;j++)
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