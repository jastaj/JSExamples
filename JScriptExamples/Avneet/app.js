//Mark's BMI
var mark_mass=78;
var mark_height=1.69;
var mark_BMI=mark_mass/(mark_height * mark_height);


//John's BMI
var john_mass=92;
var john_height=1.95;
var john_BMI=john_mass / (john_height * john_height);
var markHigherBMI;


if (mark_BMI>john_BMI) 
{
    markHigherBMI=true;
}
else 
{
    markHigherBMI=false;
}
console.log(markHigherBMI);
