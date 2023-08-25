// to check how many numbers are Prime in given range

var n = parseInt(prompt("Enter the starting number of a range : "));
var m= parseInt(prompt("Enter the ending number of a range : "));

for(var i=n; i<=m; i++){
    var flag = 0;
    for(var j=2; j<i; j++ ){
        if(i%j==0){
            flag = 1;
        }
    }
    if(flag==0){
        console.log(i);
    }
}