// //REVERSE TWO DIGIT NUMBER

// var num=parseInt(prompt('Enter three digit number:'))

// var rem1=num%10;
// num=parseInt(num/10);
// var rem2=num%10;
// num=parseInt(num/10);

// var reverse=rem1*100+rem2*10+num;
// document.write('Reverse= '+reverse);

//REVERSE OF FOUR DIGIT NUMBER

var num=parseInt(prompt('Enter four digit number:'))

var rem1=num%10;
num=parseInt(num/10);
var rem2=num%10; 
num=parseInt(num/10);
var rem3=num%10;
num=parseInt(num/10);
var rem4=num%10;
num=parseInt(num/10);


var reverse=rem1*1000+rem2*100+rem3*10+rem4*1+num;
document.write('Reverse= '+reverse);


