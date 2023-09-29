const _element=document.getElementById('box');
_element.style.backgroundColor='red';
_element.style.color='#fff';
_element.style.fontWeight='Bold';

const _element1= document.getElementsByClassName('textColor');


for(var i=0;i<_element1.length;i++)
{
    _element1[i].style.color='red';

}