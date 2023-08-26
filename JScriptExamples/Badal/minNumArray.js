// finding minimum number in Array

let array = [10, 64, 17, 8, 33, 45, 88, 23, 43, 26];

var min = array[0];
for(var i=0; i<array.length; i++)
{
    if(min > array[i])
    {
        min = array[i];
    }
}

console.log(`The smallest number in the Array is ${min}.`);