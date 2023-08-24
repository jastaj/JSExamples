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

var n=parseInt(prompt('Enter the rows='));

for(var i=1; i<=n; i++)
{
	var st="";
	for(k=n-1;k>=i;k--)
	{
		st=st+" ";
	}
	for(j=1;j<=i;j++)
	{
		st=st+j+" ";
	}
	console.log(st)
}