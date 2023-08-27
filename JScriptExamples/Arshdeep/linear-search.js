var myArray=[5,77,45,80,16,52,68];
var element=parseInt(prompt('Enter the element to be searched'));
var loc=-1;
for(var i=0;i<myArray.length;i++)
{
    if(element==myArray[i])
    {
        loc=i;
        break;
    }
}
if(loc==-1)
{
    console.log('element not found');    
    
}
else
{
    console.log('Element found at location = '+loc);    
}