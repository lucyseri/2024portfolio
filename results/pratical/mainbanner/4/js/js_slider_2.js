const section = document.querySelector("section");
const gallery = document.querySelector(".gallery");
const prevBtn = document.querySelector(".prev");
const nextfBtn = document.querySelector(".next");
const pager = document.querySelector(".pager");
const pagerBtn = document.querySelectorAll(".pager-btn");
const slideCount = pagerBtn.length;
let arrHtml = "";
for (let i = 0; i < pagerBtn.length; i++) {
  arrHtml += `<li class="slide"><img src="img/cafe${i}.png" alt="cafe menu"></li>`;
  gallery.innerHTML = `<li class="slide"><img src="img/cafe${slideCount - 1}.png" alt="cafe menu"></li>${arrHtml}<li class="slide"><img src="img/cafe0.png" alt="cafe menu"></li>`;
}
const slide = document.querySelectorAll(".slide");
let slideHeight = 0;
for(let a = 0; a < slide.length; a++){
  if(slideHeight < slide[a].offsetHeight){
    slideHeight = slide[a].offsetHeight
  }
  section.style.height = slideHeight + "px";
};
//pager
function pagerActive(num){
  if(num >= slideCount) num = 0;
  pagerBtn.forEach((el, idx)=>{
    if(num == idx){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  })
};
//timer
let currentNum = 0;
function autoSlide(){
  currentNum++;
  if(currentNum >= slide.length){
    currentNum = 1;
    gallery.style.top = -1 * slideHeight * currentNum + "px";
    gallery.style.transition = 0+"ms";
    setTimeout(autoSlide, 0)
  }else if(currentNum <= 0){
    gallery.style.top = -1 * slideHeight * (slide.length - 2) + "px";
    gallery.style.transition = 0+"ms";
    currentNum = 0;
  }else{
    gallery.style.top = -1 * slideHeight * currentNum + "px";
    gallery.style.transition = "all 0.3s ease-in-out";
  }
  pagerActive(currentNum - 1);
};
let slideInt = setInterval(autoSlide, 3000);
(()=>{autoSlide()})();
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
  console.log(currentNum);
  gallery.style.transition = "all 0.3s ease-in-out";
  gallery.style.top = -1 * slideHeight * currentNum + "px";
  if(currentNum > slide.length - 1){
    currentNum = 1;
    gallery.style.top = -1 * slideHeight * currentNum + "px";
    gallery.style.transition = 0+"ms";
    setTimeout(autoSlide, 0)
  }
  pagerActive(currentNum - 1);
});
prevBtn.addEventListener('mouseover', btnClear);
prevBtn.addEventListener('mouseleave', btnClear);
nextfBtn.addEventListener('click', ()=>{
  currentNum--;
  gallery.style.transition = "all 0.3s ease-in-out";
  gallery.style.top = -1 * slideHeight * currentNum + "px";
  if(currentNum < 0 ){
    currentNum = slide.length - 2;
    gallery.style.top = -1 * slideHeight * currentNum + "px";
    gallery.style.transition = 0+"ms";
    setTimeout(function(){
      currentNum--;
      gallery.style.top = -1 * slideHeight * currentNum + "px";
      gallery.style.transition = "all 0.3s ease-in-out";
    }, 0)
  };
  pagerActive(currentNum - 1);
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
        currentNum = idx + 1;
        gallery.style.top = -1 * slideHeight * currentNum + "px";
        pagerActive(idx);
        if(idx == 2){
          currentNum = 0;
          gallery.style.top = -1 * slideHeight * currentNum + "px";
          gallery.style.transition = 0+"ms";
        }
      }
    }
  })
};
