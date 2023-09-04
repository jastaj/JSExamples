// -----> Calculator using function <-----
// var operation=prompt("Enter operation ( + , - , * , / ) :" );
// var num1=parseInt(prompt("Enter first number :"));
// var num2=parseInt(prompt("Enter second number :"));
// var result;
// var action;

//     // ---> functions
// function addition(no1,no2)
// {
//     var add= no1+no2;
//     return add;
// }
// function subtraction(no1,no2)
// {
//     var sub= no1-no2;
//     return sub;  
// }
// function multiplication(no1,no2)
// {
//     var mul= no1*no2;
//     return mul;  
// }
// function division(no1,no2)
// {
//     var div= no1/no2;
//     return div;  
// }

//     // ---> Choose operation
// switch(operation)
// {
//     case '+': result=addition(num1,num2);
//     action="Addition";
//     break;
//     case '-': result=subtraction(num1,num2);
//     action="Subtraction";
//     break;
//     case '*': result=multiplication(num1,num2);
//     action="Multiplication";
//     break;
//     case '/': result=division(num1,num2);
//     action="Division";
//     break;
//     default :
//     console.log("Enter valid input !!!");

// }
// console.log(`${action} of two numbers : ${result}`);

// ----->Factorial using function<-----
// var num=parseInt(prompt("Enter number to find factorial :"));
// var result=factorial(num);
// console.log(`Factorial of number ${num} is ${result}`);

// function factorial(num)
// {
//     var fact=1;
//     for(i=1; i<=num; i++)
//     {
//         fact=fact*i;
//     }
//     return fact;
// }

// -----> Prime number function <-----
// var num=parseInt(prompt("Enter number to find it's Prime or Not :"));
// prime(num);

// function prime(x)
// {
//     for(i=2; i<num; i++)
//     {
//         if(num%i==0)
//         {
//             flag=0;
//             break;
//         }  
//     }

//     if(flag==1)
//     {
//         console.log(`${num} is a prime number `);
//     }
//     else
//     {
//         console.log(`${num} is not a prime number `);

//     }
// }

// -----> 