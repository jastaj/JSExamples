var array=[55, 7, 99, 8, 66, 2, 98]

for(i=0;i<array.length;i++)
{
    for(j=0;j<(array.length-i);j++)
    {
        if(array[j]>array[j+1])
        {
            var temp=array[j]
            array[j]=array[j+1]
            array[j+1]=temp
        }
    }
}
for(i=0;i<array.length;i++)
{
    console.log(array[i]);
}