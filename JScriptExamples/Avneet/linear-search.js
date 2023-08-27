var num=[10, 17, 66, 90, 2, 45];

var element=parseInt(prompt('Enter the element to be searched'));
var loc=-1;

for(var i=0;i<num.length;i++)
{
    if(element==num[i])
    {
        loc=i;
        break;
    }
}
if(loc==-1)
{
    console.log('Element not found in an array');    
    
}
else
{
    console.log('Element found at location  ' +loc+' in an array' );    
}