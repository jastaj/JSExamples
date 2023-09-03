// -----> Calculator using function <-----
var operation=prompt("Enter operation ( + , - , * , / ) :" );
var num1=parseInt(prompt("Enter first number :"));
var num2=parseInt(prompt("Enter second number :"));
var result;
var action;

    // ---> functions
function addition(no1,no2)
{
    var add= no1+no2;
    return add;
}
function subtraction(no1,no2)
{
    var sub= no1-no2;
    return sub;  
}
function multiplication(no1,no2)
{
    var mul= no1*no2;
    return mul;  
}
function division(no1,no2)
{
    var div= no1/no2;
    return div;  
}

    // ---> Choose operation
switch(operation)
{
    case '+': result=addition(num1,num2);
    action="Addition";
    break;
    case '-': result=subtraction(num1,num2);
    action="Subtraction";
    break;
    case '*': result=multiplication(num1,num2);
    action="Multiplication";
    break;
    case '/': result=division(num1,num2);
    action="Division";
    break;

}
console.log(`${action} of two numbers : ${result}`);
