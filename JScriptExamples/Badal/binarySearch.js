// Binary Search Method

var array = [10, 5, 8, 20];
var temp;

// sorting the array with bubble sort
for (var j = 0; j < array.length-1; j++) {
    for (var k = 0; k < array.length-j-1; k++) {
        if (array[k] > array[k + 1]) {
            temp = array[k];
            array[k] = array[k + 1];
            array[k + 1] = temp;
        }
    }
}
// printing the elements
for(var x=0; x<array.length; x++)
{
    console.log(array[x]);
}

// taking user input of number that is to be searched
var srch = parseInt(prompt("Enter a number to be searched : "));
var beg = 1;
var end = array.length;
var loc = -1;

var mid = Math.floor((beg+end)/2);

for(var i=0; i<array.length; i++)
{
    if(srch == array[mid])
    {
        loc = mid;
        break;
    }
    else if(srch < array[mid])
    {
        end = mid - 1;
    }
    else
    {
        beg = mid + 1;
    }
    mid = Math.floor((beg+end)/2);
}

// checking condition if it is found or not
if(loc == -1)
{
    console.log(`Element is not Present!!`);
}
else
{
    console.log(`The element is present at index position ${loc}.`);
}