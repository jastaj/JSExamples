// To Print Diamond Pattern

var n = parseInt(prompt('How many rows'));

for (var i = 1; i < n; i++) {
    var st = "";
    for (k = n - 1; k >= i; k--) {
        st = st + " ";
    }
    for (j = 1; j <= i; j++) {
        st = st + "*" + " ";
    }
    console.log(st);
}
for (var i = n; i >= 1; i--) {
    var st = "";
    for (k = i; k < n; k++) {
        st = st + " ";
    }
    for (j = 1; j <= i; j++) {
        st = st + "*" + " ";
    }
    console.log(st);
}
// End of Diamond Pattern

// var n = parseInt(prompt('How many rows'));
// for (i = 1; i <= n; i++) {
//     //var st="";
//     if (i == 1 || i == n) {
//         for (j = 1; j <= n; j++) {
//             document.write('*' + '&nbsp;');
//         }
//     }
//     else {

//         for (j = 1; j <= n; j++) {

//             if (j == 1 || j == n) {
//                 st1 = st1 + '*' + '&nbsp;';
//             }
//             else {
//                 st1 = st1 + '&nbsp;&nbsp;&nbsp;';
//             }
//         }
//         document.write(st1);
//     }
//     document.write('<br>')
//     console.log(st);
// }

    //Hollow Rectangle
    // var n = parseInt(prompt('How many rows'));
    // var m = parseInt(prompt('How many columns'));
    // var i, j;
    // for (i = 1; i <= n; i++) {
    //     for (j = 1; j <= m; j++) {
    //         if (i == 1 || i == n || j == 1 || j == m)
    //             document.write("*");
    //         else
    //             document.write("&nbsp;&nbsp;");
    //     }
    //     document.write("<br>");
    // }
