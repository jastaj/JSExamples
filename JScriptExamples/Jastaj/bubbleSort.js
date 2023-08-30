var arr=[100,7,99,8,66,2,98,1];
for(i=0;i<arr.length;i++)   //Passes
{
    for(j=0;j<arr.length-i;j++)
    {
        if(arr[j]>arr[j+1])
        {
            temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }
}

for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}