const section = document.querySelector('section');
const gallery = document.querySelector('.gallery');
const slide = document.querySelectorAll('li.slide');
const currentNum = document.querySelector('.current-num');
const totalNum = document.querySelector('.total-num');
const btns = document.querySelector('.btns');
const btn = document.querySelectorAll('.btn');
//height
let slideHeight = 0;
for(let a = 0; a < slide.length; a++){
  if(slideHeight < slide[a].offsetHeight){
    slideHeight = slide[a].offsetHeight;
  }
};
section.style.height = slideHeight + "px";
//total num
totalNum.innerText = slide.length;
//fade fn
function fadeFn(num){
  slide.forEach((el, idx)=>{
    if(idx == num){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  })
  currentNum.innerText = num + 1;
};
//timer
let i = -1;
function autoFade(){
  i++;
  if(i >= slide.length){
    i = 0;
  }else if(i < 0){
    i = slide.length -1;
  };
  fadeFn(i);
}
let fadeInt = setInterval(autoFade, 4000);
(()=>{autoFade()})();
//btn fn
btns.addEventListener('click', btnFn);
btns.addEventListener('mouseover', btnFn);
btns.addEventListener('mouseout', btnFn);
function btnFn(e){
  let triger = true;
  btn.forEach((el, idx)=>{
    if(e.target == el){
      if(e.type == 'click'){
        if(idx == 0){
          i--;
          if(i < 0) i = slide.length-1;
          fadeFn(i);
        }else if(idx == 1){
          clearInterval(fadeInt);
          el.classList.add('disable');
          btn[2].classList.remove('disable');
          triger = false;
        }else if(idx == 2){
          fadeInt = setInterval(autoFade, 4000);
          el.classList.add('disable');
          btn[1].classList.remove('disable');
          triger = true;
        }else if(idx == 3){
          i++;
          if(i >= slide.length) i = 0;
          fadeFn(i);
        }
      }else if(e.type == 'mouseover'){
        if(triger == true){
          if(idx == 0 || idx == 3){
            clearInterval(fadeInt);
          }
        } 
      }else if(e.type == 'mouseout'){
        if(triger == true){
          if(idx == 0 || idx == 3) fadeInt = setInterval(autoFade, 4000);
        } 
      }
    }
  })
}