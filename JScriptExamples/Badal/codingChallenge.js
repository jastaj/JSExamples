// Coding Challenge 1

// When Test Data is "Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall."

// For Mark
var mark_mass = 78;
var mark_height = 1.69;
var mark_BMI = mark_mass / (mark_height * mark_height);
console.log(`Mark's BMI is ${mark_BMI}`);

// For John
var john_mass = 92;
var john_height = 1.95;
var john_BMI = john_mass / (john_height * john_height);
console.log(`John's BMI is ${john_BMI}`);

var markHigherBMI = mark_BMI > john_BMI;
console.log(markHigherBMI);

// When Test Data is "Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall."

// For Mark
var mark_mass = 95;
var mark_height = 1.88;
var mark_BMI = mark_mass / (mark_height * mark_height);
console.log(`Mark's BMI is ${mark_BMI}`);

// For John
var john_mass = 85;
var john_height = 1.76;
var john_BMI = john_mass / (john_height * john_height);
console.log(`John's BMI is ${john_BMI}`);

var markHigherBMI = mark_BMI > john_BMI;
console.log(markHigherBMI);

// Coding Challenge 2

if (markHigherBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

if (markHigherBMI) {
  console.log(`Mark's BMI(${mark_BMI}) is higher than John's (${john_BMI})!`);
} else {
  console.log(`John's BMI(${john_BMI}) is higher than Mark's (${mark_BMI})!`);
}
