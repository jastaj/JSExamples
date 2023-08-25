// to print hollow rectangle
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

var n = parseInt(prompt("Enter no of rows : "));
var c = parseInt(prompt("Enter no of columns : "));

for(let i=1; i<=n; i++){
    for(let j=1; j<=c; j++){
        if(i==1 || i==n || j==1 || j==c){
            document.write("*");
        }
        else{
            document.write("&nbsp;&nbsp");
        }
    }
    document.write("<br>");
}