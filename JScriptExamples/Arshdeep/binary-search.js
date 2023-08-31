var arr=[9,12,30,2,1,3,6];

let element=parseInt(prompt('Enter the element to be searched'));

var start=0;
var end=arr.length;
var mid=Math.floor((start+end)/2);

var flag=-1;
for(var i=0;i<arr.length;i++)
{
    if(arr[mid]==element)
    {
        flag=mid;
        break;
    }
    else if(arr[mid]>element)
    {
        end=mid-1;
        
    }else
    {
        start=mid+1;
    }
    mid=Math.floor((start+end)/2);
}

if(flag==-1)
{
    console.log('Element not found');
}
else
{
    console.log('Element found at location = '+flag);
}