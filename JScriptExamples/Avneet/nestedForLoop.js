// Example:1

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// var n=parseInt(prompt('How many rows'));

// for(var i=1;i<=n;i++)
// {
//     var st="";
//     for(j=1;j<=i;j++)
//     {
//         st=st+j+" ";
//     }
//     console.log(st);
// }



// Example:1

// *
// * *
// * * *
// * * * *
// * * * * *

// var n=parseInt(prompt('Enter rows'));

// for(var i=1; i<=n; i++)
// {
// 	var st="";
// 	for(j=1;j<=i;j++)
// 	{
// 		st=st+"*"+" ";
// 	}
// 	console.log(st);
// }



// Example:2 (reverse)

// * * * * *
// * * * *
// * * *
// * *
// * 

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



// Example:3

//        1
//      1 2
//    1 2 3
//  1 2 3 4
//1 2 3 4 5

// var n=parseInt(prompt('Enter the rows='));

// for(var i=1; i<=n; i++)
// {
// 	var st="";
// 	for(k=n-1;k>=i;k--)
// 	{
// 		st=st+" ";
// 	}
// 	for(j=1;j<=i;j++)
// 	{
// 		st=st+j;
// 	}
// 	console.log(st)
// }



// Example:4

// 1
// 2 2
// 3 3 3 
// 4 4 4 4
// 5 5 5 5 5

// var n=parseInt(prompt('How many rows'));

// for(var i=1;i<=n;i++)
// {
//     var st="";
//     for(j=1;j<=i;j++)
//     {
//         st=st+i+" ";
//     }
//     console.log(st);
// }



// Example 5

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// var n=parseInt(prompt('Enter the rows='));

// for(var i=1; i<=n; i++)
// {
// 	var st="";
// 	for(k=n-1;k>=i;k--)
// 	{
// 		st=st+" ";
// 	}
// 	for(j=1;j<=i;j++)
// 	{
// 		st=st+j+" ";
// 	}
// 	console.log(st)
// }

// Example:6
 
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// var n=parseInt(prompt('How many rows'));

// for(var i=n;i>=1;i--)
// {
//     var st="";
//     for(k=i;k<=n;k++)
//     {
//         st=st+" ";
//     }
//     for(j=1;j<=i;j++)
//     {
//         st=st+"*"+" ";
//     }
//     console.log(st);
// }



// Example:7

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

//  var n=parseInt(prompt('How many rows'));

// for(var i=1;i<n;i++)
// {
//     var st="";
//     for(k=n-1;k>=i;k--)
//     {
//         st=st+" ";
//     }
//     for(j=1;j<=i;j++)
//     {
//         st=st+"*"+" ";
//     }
//     console.log(st);
// }

// for(var i=n;i>=1;i--)
// {
//     var st="";
//     for(k=i;k<n;k++)
//     {
//         st=st+" ";
//     }
//     for(j=1;j<=i;j++)
//     {
//         st=st+"*"+" ";
//     }
//     console.log(st);
// }



// Example:8

// * * * * * * *
// *           *
// *           *
// *           *
// * * * * * * *

// var n=parseInt(prompt('How many rows'));
// for(i=1;i<=n;i++)
// {
//     var st="";
// 	var st1="";
//     if(i==1||i==n)
//     {
//         for(j=1;j<=n;j++)
//         {
//             document.write('*'+'&nbsp;');
//         }    
//     }
//     else{
       
//         for(j=1;j<=n;j++)
//         {
            
//             if(j==1||j==n)
//             {
//                 st1=st1+'*'+'&nbsp;';
//             }
//             else
//             {
//                 st1=st1+'&nbsp;&nbsp;&nbsp;';
//             }
//         }
//         document.write(st1);
//     }
//     document.write('<br>')
//     console.log(st);
// }


// another way

var n=parseInt(prompt('How many rows'));
var m=parseInt(prompt('How many columns'));
var i, j;
for (i=1; i<=n; i++)
{
	for (j = 1; j <= m; j++)
    {
		if (i==1 || i==n || j==1 || j==m)
		document.write("*");
	    else
        document.write("&nbsp;&nbsp;");
    }
    document.write("<br>");
}