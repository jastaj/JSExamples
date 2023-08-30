// print all patterns for a numbers in array

let array = [10, 64, 17, 8, 33, 45, 88, 23, 43, 26];

// outer loop for total no. of patterns
for( var i=0; i<array.length; i++)
{
    // outer loop for single patterns
    for(var j=i; j<=array.length; j++)
    {
        // loop to print actual pattern
        for(var k=i; k<=i; k++){
            document.write(array[k]);
        }
        document.write("<br>");
    }
}
// 