// program to perform the bubble sort

var array = [10, 5, 8, 20, 17, 1, 19];

var temp;
for(var i=0; i<array.length; i++)
{
    for(var j=0; j<array.length-i; j++)
    {
        if(array[j] > array[j+1])
        {
            temp = array[j+1];
            array[j+1] = array[j];
            array[j] = temp;
        }
    }
}

// console.log(array);

for(var k=0; k<array.length; k++)
{
    console.log(array[k]);
}