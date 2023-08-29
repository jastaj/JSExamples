// -----Array basic examples-----
// var array_n=['Apple','Mango',23,'Litchi','Gauva']
//     // Print Array
// for(i=0; i<array_n.length; i++)
// {
//     console.log(array_n[i]);
// }
//     // Insert value at end 
// array_n.push('Grapes')
// console.log(array_n);

//     // Delete value at end 
// array_n.pop('Grapes')
// console.log(array_n);

//     // Delete value at first 
// array_n.shift('Grapes')
// console.log(array_n);

//     // Undo Shift
// array_n.unshift('Grapes')
// console.log(array_n);

//     // Concatinate two arrays
// var array_m=['One', 'Two', 'Three'];
// array_n=array_n+array_m;
// console.log(array_n);

// -----Linear Search from Array-----
// var Ary_n=[9,15,7,20,11];
// var num=parseInt(prompt("Enter number to search from array :"));
// for(i=0; i<Ary_n.length; i++)
// {
//     var loc=0;
//     if(Ary_n[i]==num)
//     {
//         loc=i;
//         break;
//     }
// }
// if(loc==i)
// console.log("Element is found at location :"+loc);
// else
// console.log("Element is not found at any location");

// -----Max and Min value from Array-----
// var Ary_m=[9,15,5,20,61];
// var max=Ary_m[0];
// for(i=0; i<Ary_m.length; i++)
// {
//     if(Ary_m[i]>max)
//     {
//         max=Ary_m[i];
//     }
// }
// var min=Ary_m[0];
// for(i=0; i<Ary_m.length; i++)
// {
//     if(Ary_m[i]<min)
//     {
//         min=Ary_m[i];
//     }
// }
// console.log("Maximum element : "+max);
// console.log("Maximum element : "+min);

// -----Array Pattrens-----
var Ary_n=[9,15,7,20,11];
for(a=0; a<Ary_n.length; a++)
{
for(i=a; i<Ary_n.length; i++)
{
    var line="";
    for(j=a; j<=i; j++)
    {
        line=line+" "+Ary_n[j];
    }
    console.log(line);
}
console.log(" ");
}
