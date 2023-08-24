// -----First Program-----
// var n=parseInt(prompt("Enter number of lines to triangle :"));
// for(i=1; i<=n; i++)
// {
//     var line="";
//     for(j=1; j<=i; j++)
//     {
//         line=line+j+"";
//     }
//     console.log(line);
// }

// -----Reverse Pattren-----
// var n=parseInt(prompt("Enter number of lines to triangle :"));
// for(i=n; i>=1; i--)
// {
//     var line="";
//     for(j=1; j<=i; j++)
//     {
//         line=line+j+" ";
//     }
//     console.log(line);
// }

// -----Mirrored pattren-----
// var n=parseInt(prompt("Enter number of lines to triangle :"));
// for(i=1; i<=n; i++)
// {
//     var line="";
//     for(k=n-1; k>=i; k--)
//     {
//         line=line+" ";
//     }

//     for(j=1; j<=i; j++)
//     {
//         line=line+j;
//     }
//     console.log(line);
// }

// -----Pyramid Pattren-----
var n=parseInt(prompt("Enter number of lines to triangle :"));
for(i=1; i<=n; i++)
{
    var line="";
    for(k=n-1; k>=i; k--)
    {
        line=line+" ";

    }

    for(j=1; j<=i; j++)
    {
        line=line+j+" ";
    }
    console.log(line);
}