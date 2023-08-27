var myArray=[5,14,28,66,52];

for(var k=0;k<myArray.length;k++)
{
    for(var i=k;i<myArray.length;i++)
    {
        var st=" ";
        for(var j=k;j<=i;j++)
        {
            st=st+myArray[j]+" ";
        }
        console.log(st)
    }
}