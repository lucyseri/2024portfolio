const body = document.querySelector('body');
const closeBtn = document.querySelector('.close-btn');
const header = document.querySelector('header');
const searchIcon = document.querySelector('.search-icon');
const modeTxt = document.querySelector('.mode-label .txt')
const modeSwitch = document.querySelector('.switch');
const modeIcon = document.querySelectorAll('.icons .icon');
closeBtn.addEventListener('click', ()=>{
  header.classList.toggle('close');
});
searchIcon.addEventListener('click', ()=>{
  header.classList.remove('close');
});
modeSwitch.addEventListener('click', ()=>{
  body.classList.toggle('dark');
  if(body.classList.contains('dark')){
    modeTxt.innerText = "Light Mode";
    modeIcon[1].style.opacity = '1';
    modeIcon[0].style.opacity = '0';
  }else{
    modeTxt.innerText = "Dark Mode";
    modeIcon[0].style.opacity = '1';
    modeIcon[1].style.opacity = '0';
  }
})