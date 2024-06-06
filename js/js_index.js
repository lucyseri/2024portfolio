"use strict";
//section1
const emailAddress = document.querySelector('#sec1 .email-address');
const emailAddressText = emailAddress.innerText;
const emailCopyBtn = document.querySelector('#sec1 .copy-btn');
function copyBtnTxtFn(){
  emailCopyBtn.innerText = "copy!";
}
emailCopyBtn.addEventListener('click', ()=>{
  window.navigator.clipboard.writeText(emailAddressText);
  emailCopyBtn.innerText = "copyed!";
  setTimeout(copyBtnTxtFn, 1000);
})

//scroll
const sec1 = document.querySelector('#sec1');
const sec2 = document.querySelector('#sec2');
const sec3 = document.querySelector('#sec3');
const sec1Title = document.querySelector('#sec1 h2');
const sec2Title = document.querySelector('#sec2 h2');
const sec3Title = document.querySelector('#sec3 h2');
const goto = document.querySelector('.goto-menu');
window.addEventListener('scroll', ()=>{
  let scrollValue = window.scrollY;
  if(scrollValue >= 100){
    sec1Title.classList.add('title-in');
  }else{
    sec1Title.classList.remove('title-in');
  }
  if(scrollValue >= sec1.offsetTop){
    goto.classList.add('goto-on');
  }else{
    goto.classList.remove('goto-on');
  }
  if(scrollValue >= sec1.offsetTop + sec1.offsetHeight / 3){
    sec2Title.classList.add('title-in');
  }else{
    sec2Title.classList.remove('title-in');
  }
  if(scrollValue >= sec2.offsetTop + sec2.offsetHeight / 3){
    sec3Title.classList.add('title-in');
  }else{
    sec3Title.classList.remove('title-in');
  }
})

//popup-project1
const popup1 = document.querySelector('.popup1');
const popup1Iframe = document.querySelector('.project1-desktop');
const popup1Close = document.querySelector('.project1-desktop button');
popup1.addEventListener('click', ()=>{
  popup1Iframe.classList.add('popup-on');
});
popup1Close.addEventListener('click', ()=>{
  popup1Iframe.classList.remove('popup-on');
});
//popup-project2:desktop
const popup2 = document.querySelector('.popup2');
const popup2Iframe = document.querySelector('.project2-desktop');
const popup2Close = document.querySelector('.project2-desktop button');
popup2.addEventListener('click', ()=>{
  popup2Iframe.classList.add('popup-on');
});
popup2Close.addEventListener('click', ()=>{
  popup2Iframe.classList.remove('popup-on');
});
//popup-project2:tablet
const popup3 = document.querySelector('.popup3');
const popup2TabletIframe = document.querySelector('.project2-tablet');
const popup2TabletClose = document.querySelector('.project2-tablet button');
popup3.addEventListener('click', ()=>{
  popup2TabletIframe.classList.add('popup-on');
});
popup2TabletClose.addEventListener('click', ()=>{
  popup2TabletIframe.classList.remove('popup-on');
});
//popup-project2:mobile
const popup4 = document.querySelector('.popup4');
const popup2MobileIframe = document.querySelector('.project2-mobile');
const popup2MobileClose = document.querySelector('.project2-mobile button');
popup4.addEventListener('click', ()=>{
  popup2MobileIframe.classList.add('popup-on');
});
popup2MobileClose.addEventListener('click', ()=>{
  popup2MobileIframe.classList.remove('popup-on');
});


//footer
const emailInput = document.querySelector('#footer input');
const emailBtn = document.querySelector("#footer button");
function emailBtnFn(){
  emailBtn.innerText = "Click!";
  emailBtn.style.animationPlayState = "running";
}
emailInput.addEventListener('click', ()=>{
  window.navigator.clipboard.writeText(emailInput.value).then(()=>{
    emailBtn.innerText = "Copyed!";
    emailBtn.style.animationPlayState = "paused";
    setTimeout(emailBtnFn, 2000);
  })
})