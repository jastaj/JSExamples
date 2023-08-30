// finding the second smallest element in the array

// to find the smallest number
var array = [10, 5, 8, 20, 17, 1, 19, 3];
var min = array[0];

for(var i=0; i<array.length; i++)
{
    if(min > array[i])
    {
        min = array[i];
    }
}

console.log("smallest number is " + min);

// to find the second smallest number

var smin = array[0];
for(var j=0; j<array.length; j++)
{
    if(min != array[j])
    {
        if(smin > array[j])
        {
            smin = array[j];
        }
    }
}

console.log("second smallest number is " + smin);
