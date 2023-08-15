//Biggest among three

var num1=parseInt(prompt('Enter first number'));
var num2=parseInt(prompt('Enter second number'));
var num3=parseInt(prompt('Enter third number'));

if(num1>num2)
{
    if(num1>num3)
    {
        console.log('First number is greater');
    }
    else
    {
        console.log('Third number is greater');
    }
    
}
else
{
    if(num2>num3)
    {
        console.log('Second number is greater');
    }
    else
    {
        console.log('Third number is greater');
    }
    
}