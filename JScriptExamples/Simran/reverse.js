//Reversing a three digit number

var num=parseInt(prompt('Enter three digit number:'));
//549
var rem1=num%10;     // 549%10=9
num=parseInt(num/10); //54.9=54
var rem2=num%10;     // 54%10=4
num=parseInt(num/10);  //5.4=5

var reverse=rem1*100+rem2*10+num;
document.write('Reverse is '+reverse)

//Reversing a four digit number

var num=parseInt(prompt('Enter a four digit number:'));
//2471
var rem1=num%10;   // 2471%10=1
num=parseInt(num/10); //247.1=247
var rem2=num%10;    // 247%10=7
num=parseInt(num/10); //24.7=24
var rem3=num%10;   // 24%10=4
num=parseInt(num/10);  //2.4=2

var reverse=rem1*1000+rem2*100+rem3*10+num;
document.write('Reverse is '+reverse);