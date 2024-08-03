const section = document.querySelector('section');
const container = document.querySelector('.container');
const gallery = document.querySelector('.gallery');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextfBtn = document.querySelector('.next');
const pager = document.querySelector('.pager');
const pagerBtn = document.querySelectorAll('.pager-btn');


//height
let slideHeight = 0;
for(let a = 0; a < slide.length; a++){
  if(slideHeight < slide[a].offsetHeight){
    slideHeight = slide[a].offsetHeight
  }
  section.style.height = slideHeight + "px";
};

//pager
function pagerActive(num){
  pagerBtn.forEach((el, idx)=>{
    if(num == idx){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  })
};
let currentNum = -1;
function autoSlide(){
  currentNum++;
  if(currentNum >= slide.length) currentNum = 0;
  gallery.style.top = -1 * slideHeight * currentNum + "px";
  gallery.style.transition = "all 0.3s ease";
  pagerActive(currentNum);
};
autoSlide();
let slideInt = setInterval(autoSlide, 3000);

//btn
function btnClear(e){
  if(e.type == 'mouseover'){
    clearInterval(slideInt);
  }else if(e.type == 'mouseleave'){
    slideInt = setInterval(autoSlide, 3000);
  }
};
//arrow
prevBtn.addEventListener('click', ()=>{
  currentNum++;
  if(currentNum >= slide.length) currentNum = 0;
  gallery.style.top = -1 * slideHeight * currentNum + "px";
  pagerActive(currentNum);
});
prevBtn.addEventListener('mouseover', btnClear);
prevBtn.addEventListener('mouseleave', btnClear);

nextfBtn.addEventListener('click', ()=>{
  currentNum--;
  if(currentNum < 0 ) currentNum = slide.length - 1;
  gallery.style.top = -1 * slideHeight * currentNum + "px";
  pagerActive(currentNum);
});
nextfBtn.addEventListener('mouseover', btnClear);
nextfBtn.addEventListener('mouseleave', btnClear);

//pagerbtn
pager.addEventListener('click', pagerBtnFn);
pager.addEventListener('mouseover', btnClear);
pager.addEventListener('mouseleave', btnClear);
function pagerBtnFn(e){
  pagerBtn.forEach((el, idx)=>{
    if(e.target == el){
      if(e.type == 'click'){
        currentNum = idx;
        gallery.style.top = -1 * slideHeight * currentNum + "px";
        pagerActive(currentNum);
      }
    }
  })
};

/**
 * 
let arr =[];
for(let i = 0; i < pagerBtn.length; i++){
  arr.push(`<li class="slide"><img src="img/cafe${i}.png" alt="cafe menu"></li>`)
};
arr.unshift(`<li class="slide"><img src="img/cafe${pagerBtn.length - 1}.png" alt="cafe menu"></li>`);
arr.push(`<li class="slide"><img src="img/cafe0.png" alt="cafe menu"></li>`);

for(let j = 0; j < arr.length ; j++){
  gallery.innerHTML = arr[j];
}
 */