// basic operations on array

var array = ['India', 'Russia', 'Switzerland', 'Japan'];

// to print array using for loop

for(var i=0; i<array.length; i++){
    console.log(array[i]);
}

// to add the element at the end of the array
array.push('Dubai');
console.log(array);

// to delete the one element from the end of the array
array.pop();
console.log(array);

// to delete first element of the array
array.shift();
console.log(array);

// to add the element at the beginning of the array
array.unshift('India');
console.log(array);

// to concatenate two arrays
var newArray = [1,2,3, 'India'];
var twoArray = array + newArray;
// console.log(twoArray);

// to delete specific element in array

array.splice(1,1);
console.log(array);

