// //First Example

var n=parseInt(prompt('How many rows : '))

for(var i=1;i<=n;i++)
{
    var st="";
    for(j=1;j<=i;j++)
    {
        st=st+"*"+"";
    }
    console.log(st);
}

//Second Example To Reverse

var n=parseInt(prompt('How many rows : '));

for(var i=n;i>=1;i--)
{
    var st="";
    for(j=1;j<=i;j++)
    {
        st=st+"*"+" ";
    }
    console.log(st);
}

//Third Example by following pattern:
//      *
//    * *
//  * * *
// * * * *

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

//Example Fourth by following pattern:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var n=parseInt(prompt('How many rows'));

for(var i=1;i<=n;i++)
{
    var st="";
    for(j=1;j<=i;j++)
    {
        st=st+j+" ";
    }
    console.log(st)
;
}



