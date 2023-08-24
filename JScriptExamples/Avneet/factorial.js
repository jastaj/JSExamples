// 1/1!, 2/2!, ...., n/n!

var fact = 1;
var sum = 0;
var n = 4;
for (i = 1; i <= n; i++) {
  fact = fact * i;
  sum = sum + i / fact;
}
console.log(sum);
