
/* const myheading = document.getElementsByTagName('h1')[0];
const mybutton = document.getElementById('mybutton')
const mytextinput = document.getElementById('mytextinput')



mybutton.addEventListener('click', () => {
  myheading.style.color = mytextinput.value;
});
 */

/*  const myList = document.getElementsByTagName('li')

 for (let i =0; i < myList.length; i+=1){
   myList[i].style.color = 'green'
 }

 const error = document.getElementsByClassName('error')

 for (let i = 0; i < error.length; i+=1){
   error[i].style.color = 'red'
 } */

//document.querySelector('#anyid') # is should be used in front of it
//document.querySelector('li') this returns the first li Element
//document.querySelectorAll('li') this returns all the instances of li  
//document.querySelector('.error') . is used in front of the class name

const togglelist = document.getElementById('togglelist')
const listdiv = document.querySelector('.list')
const descriptioninput = document.querySelector('input.description');
const descriptionp = document.querySelector('p.description');
const descriptionbutton = document.querySelector('button.description')
const additeminput = document.querySelector('input.additeminput')
const addinputbutton = document.querySelector('button.additembutton')
const removeitembutton = document.querySelector('button.removeitembutton')


togglelist.addEventListener('click', () => {
  if (listdiv.style.display == 'none'){
    togglelist.textContent = 'Hide list'
    listdiv.style.display = 'block'
  }else {
    togglelist.textContent = 'show list'
    listdiv.style.display = 'none'
  }
})


descriptionbutton.addEventListener('click', () => {
  //p.textContent = input.value + ':';
  descriptionp.innerHTML = descriptioninput.value + ':'; // with this the inner html code can be alterd
  descriptioninput.value = '';
});

descriptionp.title = "list description";

addinputbutton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  li.textContent = additeminput.value;
  ul.appendChild(li);
  additeminput.value = '';
});


removeitembutton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});