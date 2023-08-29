var array=[3,10,45,78,99];

for (k=0; k<array.length; k++)
{
    for (i=k; i<array.length; i++)
    {
        var str="";
        for(j=k; j<=i; j++)
        {
            str=str+array[j]+" ";
        }
        console.log(str);
    }
}
