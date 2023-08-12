var markwt = parseFloat(prompt('Enter the Mark Weight:'));
var markht = parseFloat(prompt('Enter the Mark Height:'));
var johnwt = parseFloat(prompt('Enter the John Weight:'));
var johnht = parseFloat(prompt('Enter the John Height:'));
var BMI1 = markwt/(markht*markht); 
console.log("Mark's BMI=" +BMI1);
var BMI2 = johnwt/johnht**2;
console.log("John's BMI=" +BMI2);

var markhigherBMI = BMI1>BMI2;

if (markhigherBMI==true)
{
    console.log(`Mark's BMI ${BMI1}  higher than John's BMI ${BMI2}`);
}
else
{
    console.log(`John's BMI ${BMI2}  higher than Mark's BMI ${BMI1}`);
}



