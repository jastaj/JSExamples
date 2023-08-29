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
//         line=line+j+" ";
//     }
//     console.log(line);
// }

// -----Diamond Pattren-----
// var n=parseInt(prompt("Enter number of lines to pattren :"));
// for(i=1; i<=n; i++)
// {
//     var line="";
//     for(k=n-1; k>=i; k--)
//     {
//         line=line+" ";

//     }

//     for(j=1; j<=i; j++)
//     {
//         line=line+"*"+" ";
//     }
//     console.log(line);
// }
// for(i=n-1; i>=1; i--)
// {
//     var line="";
//     for(k=i; k<n; k++)
//     {
//         line=line+" ";

//     }

//     for(j=1; j<=i; j++)
//     {
//         line=line+"*"+" ";
//     }
//     console.log(line);
// }

//-----Empty rectangle-----
var r=parseInt(prompt("Enter number of rows to rectangle :"));
var c=parseInt(prompt("Enter number of columns to rectangle :"));
var i,j;
for(i=1 ; i<=r; i++)
{
    var line="";
    for(j=1; j<=c; j++)
    {
        if(i==1||i==r||j==1||j==c)
        {
            // line=line+"*";
            document.write("*");
        }
        else
        {
            // line=line+i;
            document.write("&nbsp;&nbsp;");
        }
    }
    // console.log(line);
    document.write("<br>");
}