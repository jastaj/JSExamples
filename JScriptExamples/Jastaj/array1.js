let myArray=[10,20,30,40,50,60];

var sum=0;
for(var i=0;i<myArray.length;i++)
{
    sum=sum+myArray[i];
    var mean=sum/myArray.length;
}

console.log('Sum of elements ='+sum);
console.log('Mean ='+mean);