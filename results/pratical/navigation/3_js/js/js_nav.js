//mobile menu slide-in & slide-out
const mobileMenu = document.querySelector('.menu-icon');
const mibileClose = document.querySelector('.close-icon');
const bottomHeader = document.querySelector('.bottom-header');
mobileMenu.addEventListener('click', function(){
  bottomHeader.classList.add("menu-on");
});
mibileClose.addEventListener('click', function(){
  bottomHeader.classList.remove("menu-on");
});
//mobile dropdown menu
const gnb = document.querySelector(".gnb");
const gnbLi = document.querySelectorAll('.gnb-list');
const gnbArrowBtn = document.querySelectorAll('span.arrow-icon');
const lnb = document.querySelectorAll('.lnb')
gnbArrowBtn.forEach((el, idx)=>{
  el.addEventListener('click', function(e){
     if(gnbArrowBtn[idx].classList.contains('drop-down')){
       gnbArrowBtn[idx].classList.remove('drop-down');
       gnbLi[idx].style.height = gnbLi[idx].firstElementChild.offsetHeight + "px";
      }else{
      for(let a = 0; a < gnbArrowBtn.length; a++){
        gnbArrowBtn[a].classList.remove('drop-down');
        gnbLi[a].style.height = gnbLi[a].firstElementChild.offsetHeight + "px";
      }
      gnbArrowBtn[idx].classList.add('drop-down');
      gnbLi[idx].style.height = `${gnbLi[idx].firstElementChild.offsetHeight + lnb[idx].offsetHeight}px`;
    }
  })
});
//menu bar
const menuBar = document.querySelector('.menu-bar');
const topHeader = document.querySelector('.top-header');
function barSetting(){
  menuBar.style.left = gnbLi[0].offsetLeft + "px";
  menuBar.style.top = gnbLi[0].firstElementChild.offsetHeight + topHeader.offsetHeight - menuBar.offsetHeight + "px";
  menuBar.style.width = gnbLi[0].offsetWidth + "px";
};
barSetting();
gnbLi.forEach((el, idx)=>{
  el.addEventListener('mouseenter', (e)=>{
    menuBar.style.left = gnbLi[idx].offsetLeft + "px";
    menuBar.style.width = gnbLi[idx].offsetWidth + "px";
  });
});