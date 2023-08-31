var myArray=[0, 90, 56, 80, 1, 82, 48];
//SECOND LARGEST NUMBER

var MIN=myArray[0];
for(i=0;i<7;i++)
{
    if(MIN>myArray)
    {
        MIN=myArray[i];
    }
}
var SMIN=myArray[0];
for(i=0;i<7;i++)
{
    if(myArray[i]!=MIN)
    {
        if(SMIN>myArray[i])
        {
            SMIN=myArray[i];
        }
    }
}

console.log(SMIN);