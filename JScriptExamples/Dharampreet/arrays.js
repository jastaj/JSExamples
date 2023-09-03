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
// var Ary_n=[9,15,7,20,11];
// for(a=0; a<Ary_n.length; a++)
// {
// for(i=a; i<Ary_n.length; i++)
// {
//     var line="";
//     for(j=a; j<=i; j++)
//     {
//         line=line+" "+Ary_n[j];
//     }
//     console.log(line);
// }
// console.log(" ");
// }

// ----- Array Second largest number -----
// var array_n=[89,15,77,20,11];
// var Max=array_n[0];
// var Max2=array_n[0];
// var Max=0;
// var Max2=0;
// for(j=0; j<array_n.length; j++)
// {
//     if(array_n[j]>Max)
//     {
//         Max=array_n[j];
//     }
// }
// console.log("Maximum number :"+Max);
// for(i=0; i<array_n.length; i++)
// {
//     if(array_n[i]!=Max)
//     {
//         if(array_n[i]>Max2)
//         {
//             Max2=array_n[i];
//         }
//     }
// }
// console.log("Second Maximum number :"+Max2);

// ----- Array Second Minimum number -----
// var array_n=[9,15,45,20,11];
// var Max=0;
// var Max2=0;
// for(j=0; j<array_n.length; j++)
// {
//     if(array_n[j]<Min)
//     {
//         Min=array_n[j];
//     }
// }
// console.log("Minimum number : "+Min);
// for(i=0; i<array_n.length; i++)
// {
//     if(array_n[i]!=Min)
//     {
//         if(array_n[i]<Min2)
//         {
//             Min2=array_n[i];
//         }
//     }
// }
// console.log("Second Minimum number : "+Min2);

// ----- Second method -----
// var array_n=[89,15,77,20,11];
// var Max=0;
// var Max2=0;
// for(i=0; i<array_n.length; i++)
// {
//     if(array_n[i]>Max)
//     {
//         Max2=Max;
//         Max=array_n[i];
//     }
//     else if(array_n[i]>Max2 && array_n[i]!=Max)
//     {
//         Max2=array_n[i]
//     }
// }
// console.log("Second Maximum number :"+Max2);

// ----- Bubble sort -----
// var array_n=[89,15,77,10,11];
// for(i=0; i<array_n.length; i++)
// {
//     for(j=0;j<array_n.length-1; j++)
//     {
//         if(array_n[j]>array_n[j+1])
//         {
//             temp=array_n[j];
//             array_n[j]=array_n[j+1];
//             array_n[j+1]=temp;
//         }
//     }
// }
// console.log(array_n);

// -----Binary Search-----
var array_n=[89,15,77,10,11];
array_n.sort();
console.log(array_n);
var beg=1;
var end=array_n.length;
var mid=Math.floor((beg+end)/2);
var loc=-1;
var flag=-1;
var item=parseInt(prompt("Enter item to be searched : "));
    
for(i=0; i<array_n.length; i++)
{
    if(item==array_n[mid])
    {
        loc=mid;
        flag=0;
        break;
    }
    else
    {
        if(item>array_n[mid])
        {
            beg=mid+1;
        }
        else if(item<array_n[mid])
        {
            end=mid-1;
        }
    }
    mid=Math.floor((beg+end)/2);
}

if(flag==-1)
{
    console.log(`Item ${item} is not found at any location`);
}
else
{
    console.log(`Item ${item} is found at any location ${loc}`);
}
