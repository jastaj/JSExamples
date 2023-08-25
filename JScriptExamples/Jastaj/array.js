let myArray = ['Simon', 'Dharampreet', 'Badal', 'Kamal', 'Avneet','Arshdeep',13];


for(var i=0;i<myArray.length;i++)
{
    console.log(myArray[i]);
}


myArray[2] = 'Taranpreet';
console.log(myArray);

myArray.push('Susy');
console.log(myArray);

myArray.shift();

console.log(myArray);

myArray.unshift('Simon');
console.log(myArray);

myArray.pop();
console.log(myArray);


let newArray = [1, 2, 3];
const combinedArray = myArray.concat(newArray);
console.log(combinedArray);

for (i = 0; i < combinedArray.length; i++) {
    console.log(combinedArray[i]);

}


// const x=99;
// x=199;
// console.log(x);
// const people = [
//    { Name: 'Heena', Salary: 40000, Address: 'USA' },
//    { Name: 'Smith', Salary: 30000, Address: 'USA' },
//    { Name: 'John', Salary: 50000, Address: 'Canada' },
// ]
//console.log(people);


//people.forEach(People);


// function People(temp) {
//    console.log(temp);
// }

// const myPeople = people.map(function (person) {
//    return person.Salary
// })

// console.log(myPeople)

// const newPeople = people.filter(function (person) {
//   return person.Address === 'USA'
// })

// console.log(newPeople)

// const total = people.reduce(function (acc, curr) {
//   acc += curr.Salary
// //   acc=acc+curr.Salary
//   return acc
// }, 0)
// console.log(total)

// var d = new Date()
// console.log(d)
// console.log(d.getHours())
// console.log(d.getDay())
// console.log(d.toDateString('dd-MMM-yyyy'))
