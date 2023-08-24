// 0 1 1 2 3 5 8

var pre = 0,
  curr = 1,
  next;
var num = parseInt(prompt('Enter the last number : '));
console.log(pre);
console.log(curr);
for (let i = 1; i <= num - 2; i++) {
  next = pre + curr;
  pre = curr;
  curr = next;

  console.log(next);
}
