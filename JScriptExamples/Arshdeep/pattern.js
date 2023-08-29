//First Example of full triangle

var n=parseInt(prompt('How many rows'));

for(var i=1;i<n;i++)
{
    var st="";
    for(k=n-1;k>=i;k--)
    {
        st=st+" ";
    }
    for(j=1;j<=i;j++)
    {
        st=st+"*"+" ";
    }
    console.log(st);
}


//Second Example of Reverse Tringle

var n=parseInt(prompt('How many rows'));
for(var i=n;i>=1;i--)
{
    var st="";
    for(k=i;k<n;k++)
    {
        st=st+" ";
    }
    for(j=1;j<=i;j++)
    {
        st=st+"*"+" ";
    }
    console.log(st);
}

//Third Example to create diamond

var n=parseInt(prompt('How many rows'));

for(var i=1;i<n;i++)
{
    var st="";
    for(k=n-1;k>=i;k--)
    {
        st=st+" ";
    }
    for(j=1;j<=i;j++)
    {
        st=st+"*"+" ";
    }
    console.log(st);
}

for(var i=n;i>=1;i--)
{
    var st="";
    for(k=i;k<n;k++)
    {
        st=st+" ";
    }
    for(j=1;j<=i;j++)
    {
        st=st+"*"+" ";
    }
    console.log(st);
}

//Fourth Example of Hollow Rectangle

var n=parseInt(prompt('How many rows'));
var m=parseInt(prompt('How many columns'));
var i, j;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= m; j++)
        {
            if (i == 1 || i == n || j == 1 || j == m)
                document.write("*");
            else
                document.write("&nbsp;&nbsp;");
        }
          document.write("<br>");
    }
