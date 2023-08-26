// program to perform linear search

let array = [10, 64, 17, 8, 33, 45, 88, 23, 43, 26];

var num = parseInt(prompt("Enter the number you want to search : "));
var str = -1;
for(var i=0; i<array.length; i++)
{
    if(num == array[i])
    {
        str = i;
    }
}

if(str == -1){
    console.log("Element is not Present!!");
}
else
{
    console.log(`Element is Present at index position ${str}.`);
}