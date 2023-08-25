// to print diamond pattern

// upper portion
var n = parseInt(prompt("Enter no of rows : "));

for (let i = 1; i <= n; i++) {
    var str = "";
    for (let j = i; j <= n; j++) {
        str = str + " ";
    }
    for (let k = 1; k <= i; k++) {
        str = str + "*" + " ";
    }

    console.log(str);
}
//lower portion
for (let i = n-1; i >= 1; i--) {
    var str = "";
    for (let j = i; j <= n; j++) {
        str = str + " ";
    }
    for (let k = 1; k <= i; k++) {
        str = str + "*" + " ";
    }

    console.log(str);
}