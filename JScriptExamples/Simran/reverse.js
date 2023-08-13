var num=parseInt(prompt('Enter three digit number:'));

var rem1=num%10;
num=parseInt(num/10);
var rem2=num%10;
num=parseInt(num/10);

var reverse=rem1*100+rem2*10+num;
document.write('Reverse is '+reverse)
