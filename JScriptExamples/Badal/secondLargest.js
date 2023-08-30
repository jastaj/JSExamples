// finding the second largest element in the array

// var array = [10, 5, 8, 20, 19];

// var first = 0;
// var second = 0;

// for (var j = 0; j < array.length; j++) {
//     if (first < array[j]) {
//         second = first;
//         first = array[j];
//     }else if (array[j] > second && array[j] !== first) {
//         second = array[j];
//     }
// }
// console.log(`The largest element is  ${first}.`);
// console.log(`The largest element is  ${second}.`);

// Second Method

var array = [10, 5, 8, 20, 17, 1, 19];
var max = array[0];

for(var i=0; i < array.length; i++)
{
    if(max < array[i])
    {
        max = array[i];
    }
}
console.log(max); //largest number

var smax = array[0];
for(var j=0; j<array.length; j++)
{
    if(max != array[j])
    {
        if(smax < array[j])
        {
            smax = array[j];
        }
    }
}
console.log(smax); // second largest number