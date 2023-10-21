// To changing the color of one element.
const _element=document.getElementsByTagName('h1');
_element[1].style.color="Pink";

// To changing the color of all elements..
for(i=0;i<_element.length;i++)
{
    _element[i].style.color="green";
}

const _element1=document.getElementById('box');
_element1.innerText="Heyyyy!!";  //To print text inside the div

// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'gray';

const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special');

// list.forEach(function(item) {     //Csharp
//   console.log(item);
//   item.style.color = 'yellow';
// });

for(var i=0;i<list.length;i++)
{
    list[i].style.color='yellow';
}