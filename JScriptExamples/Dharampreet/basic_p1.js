// CHALLANGE 1
var Mark_Wg=parseFloat(prompt("Enter Mark's Weight :"));
var Mark_Hg=parseFloat(prompt("Enter Mark's height :"));
var John_Wg=parseFloat(prompt("Enter John's Weight :"));
var John_Hg=parseFloat(prompt("Enter John's Height :"));
var BMI_1=Mark_Wg/(Mark_Hg*Mark_Hg); // MARK BMI
console.log("Mark's BMI : "+BMI_1);
var BMI_2=John_Wg/(John_Hg*John_Hg); //JOHN BMI
console.log("John's BMI : "+BMI_2);
let markHigherBMI=BMI_1>BMI_2;
if (markHigherBMI==true)
console.log('Mark has higher BMI');
else
console.log('John has higher BMI');

