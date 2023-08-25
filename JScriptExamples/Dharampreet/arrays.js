// -----Array basic examples-----
var array_n=['Apple','Mango',23,'Litchi','Gauva']
    // Print Array
for(i=0; i<array_n.length; i++)
{
    console.log(array_n[i]);
}
    // Insert value at end 
array_n.push('Grapes')
console.log(array_n);

    // Delete value at end 
array_n.pop('Grapes')
console.log(array_n);

    // Delete value at first 
array_n.shift('Grapes')
console.log(array_n);

    // Undo Shift
array_n.unshift('Grapes')
console.log(array_n);

    // Concatinate two arrays
var array_m=['One', 'Two', 'Three'];
array_n=array_n+array_m;
console.log(array_n);