// finding maximum number in Array

let array = [10, 64, 17, 8, 33, 45, 88, 23, 43, 26];

var max = array[0];
for(var i=0; i<array.length; i++)
{
    if(max < array[i])
    {
        max = array[i];
    }
}

console.log(`The highest number in the Array is ${max}.`);