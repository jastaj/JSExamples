// var n=parseInt(prompt('How many rows'));

// for(var i=1;i<=n;i++)
// {
//     var st="";
//     for(j=1;j<=i;j++)
//     {
//         st=st+"*"+" ";
//     }
//     console.log(st);
// }

//Reverse

// var n=parseInt(prompt('How many rows'));

// for(var i=n;i>=1;i--)
// {
//     var st="";
//     for(j=1;j<=i;j++)
//     {
//         st=st+"*"+" ";
//     }
//     console.log(st);
// }

//Example 3
//1
//2 2
//3 3 3
//4 4 4 4
//5 5 5 5 5

var n=parseInt(prompt('How many rows'));

for(var i=1;i<=n;i++)
{
    var st="";
    for(k=n-1;k>=i;k--)
    {
        st=st+" ";
    }
    for(j=1;j<=i;j++)
    {
        st=st+"*";
    }
    console.log(st);
}