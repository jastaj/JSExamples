let myArray = ['Simon', 'Dharampreet', 'Badal', 'Kamal', 'Avneet','Arshdeep',13];

for(var i=0; i<myArray.length; i++)
{
    console.log(myArray[i]);
}

// chnage name by index number
myArray[2] = 'Lovepreet';
console.log(myArray);


// add one more name
myArray.push('Simran');
console.log(myArray);


// remove first name by using shift function
myArray.shift();
console.log(myArray);


// add back shifted name by using unshift function
myArray.unshift('Simon');
console.log(myArray);


// to delete from last
myArray.pop();
console.log(myArray);

// ----New Array----
let newArray = [1, 2, 3];
const combinedArray = myArray.concat(newArray);
console.log(combinedArray);

for (i = 0; i < combinedArray.length; i++)
{
    console.log(combinedArray[i]);
}