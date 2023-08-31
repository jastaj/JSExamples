var myArray=[5, 77, 45, 80, 16, 52, 68];
//SECOND LARGEST NUMBER

var MAX=myArray[0];
for(i=0;i<7;i++)
{
    if(MAX<myArray[i])
    {
        MAX=myArray[i];
    }
}
var SMAX=myArray[0];
for(i=0;i<7;i++)
{
    if(myArray[i]!=MAX)
    {
        if(SMAX=myArray[i])
        {
            SMAX=myArray[i];
        }
    }
}

console.log(SMAX);

