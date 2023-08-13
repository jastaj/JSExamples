var num=parseInt(prompt('Enter four digit number:'));

var rem1=num%10;
num=parseInt(num/10);
var rem2=num%10;
num=parseInt(num/10);
var rem3=num%10;
num=parseInt(num/10);

var reverse=rem1*1000+rem2*100+rem3*10+num;
document.write('Reverse='+reverse);