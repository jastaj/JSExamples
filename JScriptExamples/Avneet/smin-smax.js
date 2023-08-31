var array=[55, 7, 99, 8, 66, 2, 98]

// To find second largest no. in an array
// var MAX=array[0];
// for(i=0;i<7;i++)
// {
//     if(MAX<array[i])
//     {
//         MAX=array[i];
//     }
// }
// var SMAX=array[0];
// for(i=0;i<7;i++)
// {
//     if(array[i]!=MAX)
//     {
//         if(SMAX=array[i])
//         {
//             SMAX=array[i];
//         }
//     }
// }

// console.log(SMAX);


// To find the second minimum number

// [55, 7, 99, 8, 66, 2, 98]

var MIN=array[0];
for(i=0;i<7;i++)
{
    if(MIN>array[i])
    {
        MIN=array[i];
    }
}
var SMIN=array[0];
for(i=0;i<7;i++)
{
    if(array[i]!=MIN)
    {
        if(SMIN>array[i])
        {
            SMIN=array[i];
        }
    }
}

console.log(SMIN);