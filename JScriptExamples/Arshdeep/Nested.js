let num1=parseInt(prompt('Enter first number'));
let num2=parseInt(prompt('Enter second number'));
let num3=parseInt(prompt('Enter third number'));
//9,8,7
//9,8,10
//8,9,7
//8,9,10
if(num1>num2)
{
    if(num1>num3)
    {
        document.write('First number is greater');
    }
    else
    {
        document.write('Third number is greater');
    }

}
else
{
    if(num2>num3)
    {
        document.write('Second number is greater');
    }
    else
    {
        document.write('Third number is greater');
    }
}