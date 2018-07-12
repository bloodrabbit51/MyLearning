
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
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description')

togglelist.addEventListener('click', () => {
  if (listdiv.style.display == 'none'){
    togglelist.textContent = 'Hide list'
    listdiv.style.display = 'block'
  }else {
    togglelist.textContent = 'show list'
    listdiv.style.display = 'none'
  }
})


button.addEventListener('click', () => {
  //p.textContent = input.value + ':';
  p.innerHTML = input.value + ':'; // with this the inner html code can be alterd
})

p.title = "list description"