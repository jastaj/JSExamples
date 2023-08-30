// var myArray=[55,7,99,8,66,2,98];
// var element=parseInt(prompt('Enter the element to be searched'));
// var loc=-1;
// for(var i=0;i<myArray.length;i++)
// {
//     if(element==myArray[i])
//     {
//         loc=i;
//         break;
//     }
// }
// if(loc==-1)
// {
//     console.log('element not found');    
    
// }
// else
// {
//     console.log('Element found at location = '+loc);    
// }
var myArray=[55,7,99,8,66,2,98];
MAX=myArray[0];
//myArray.sort();

for(var i=0;i<myArray.length;i++)
{
    if(MAX<myArray[i])
    {
        MAX=myArray[i];
    }
}
console.log(MAX);
SMAX=myArray[0];
for(var i=0;i<myArray.length;i++)
{
    if(myArray[i]!=MAX)
    {
        if(SMAX<myArray[i])
        {
            SMAX=myArray[i];
        }
    }
}

console.log(SMAX);
// var myArray=[5,14,28,66,52];

// for(var k=0;k<myArray.length;k++)
// {
//     for(var i=k;i<myArray.length;i++)
//     {
//         var st=" ";
//         for(var j=k;j<=i;j++)
//         {
//             st=st+myArray[j]+" ";
//         }
//         console.log(st)
//     }
// }