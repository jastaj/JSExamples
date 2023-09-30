const element=document.getElementById('box');
element.style.backgroundColor='#a3baaf';

element.style.color='#fff';
element.style.fontWeight='Bold';


const element1=document.getElementsByClassName('textColor');

for(var i=0;i<element1.length;i++)
{
    element1[i].style.color='orange';
}
