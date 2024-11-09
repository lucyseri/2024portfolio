let windowWidth = window.innerWidth;
window.addEventListener('resize', function(){
  const newWindowWidth = this.window.innerWidth;
  if(windowWidth < 1280 && newWindowWidth >= 1280){
    this.location.reload();
  }
  if((windowWidth < 768 && newWindowWidth>=768) || (windowWidth >767 && newWindowWidth <=767)){
    this.location.reload();
  }
  if((windowWidth < 360 && newWindowWidth>=360) || (windowWidth >359 && newWindowWidth <=359)){
    this.location.reload();
  }
});
//main banner
const bannerInner = document.querySelector('.banner-inner');
const slider = document.querySelector('#banner .slider');
const imgGallery = document.querySelector('#banner .img-gallery');
const imgSlide = document.querySelectorAll('#banner .img-slide');
const arrowBtns = document.querySelector('#banner .arrow-btns');
const arrowBtnImg = document.querySelectorAll('#banner .arrow-img');
const pagerBtns = document.querySelector('#banner .pager-btns');
const pagers = document.querySelector('#banner .pagers');
//main banner - width & height
const lastSlide = imgSlide[imgSlide.length - 1].cloneNode(true);
const firstSlide = imgSlide[0].cloneNode(true);
imgGallery.prepend(lastSlide);
imgGallery.append(firstSlide);
const imgSlideLength = imgGallery.childElementCount;
imgGallery.style.gridTemplateColumns = `repeat(${imgSlideLength}, 1fr)`;
const gap = imgSlide[1].offsetLeft - imgSlide[0].offsetLeft - imgSlide[0].offsetWidth;
slider.style.width = `calc(${imgSlideLength}00% + ${gap * (imgSlideLength - 1)}px)`;
bannerInner.style.height = `${imgSlide[0].offsetHeight + pagerBtns.offsetHeight}px`;
//main banner - pager html css
pagers.style.width = `${32+(16+12)*(imgSlide.length-1)}px`;
pagers.style.gridTemplateColumns = `repeat(${imgSlide.length}, minmax(12px, max-content))`;
let arrHtml = "";
for(let a = 0; a < imgSlide.length-1; a++){
  arrHtml+=`<li class="pager"></li>`;
  pagers.innerHTML = `<li class="pager slide-on"></li>${arrHtml}`;
}
const pager = document.querySelectorAll('#banner .pager');
//main banner - pager active
function autoPager(num){
  pager.forEach((el, idx)=>{
    if(num == idx){
      el.classList.add('slide-on');
    }else{
      el.classList.remove('slide-on');
    }
  })
};
//main banner - timer
let slideWidth = imgSlide[1].offsetLeft - imgSlide[0].offsetLeft;
let currentNum = 0;
function autoSlide(){
  currentNum++;
  if(currentNum >= imgSlideLength -1){
    currentNum = 0;
    slider.style.left = -1 * slideWidth * currentNum + "px";
    slider.style.transition = 0 + "ms";
    setTimeout(autoSlide, 0);
  }else if(currentNum <= 0){
    slider.style.left = -1 * slideWidth * (imgSlideLength -2) + "px";
    slider.style.transition = 0 + "ms";
  }else{
    slider.style.left = -1 * slideWidth * currentNum + "px";
    slider.style.transition = "all 0.3s ease-in-out";
  }
  autoPager(currentNum - 1);
};
let slideInt = setInterval(autoSlide, 3000);
(()=>{autoSlide()})();
//main banner - arrow btn
arrowBtns.addEventListener('mouseover', (e)=>{
  arrowBtnImg.forEach((el, idx)=>{
    if(e.target == el) clearInterval(slideInt);
  })
});
arrowBtns.addEventListener('mouseout', (e)=>{
  arrowBtnImg.forEach((el, idx)=>{
    if(e.target == el){
      slideInt = setInterval(autoSlide, 3000);
    } 
  })
});
arrowBtns.addEventListener('click', (e)=>{
  arrowBtnImg.forEach((el, idx)=>{
    if(e.type == 'click'){
      if(e.target == el){
        if(idx == 0){
          currentNum++;
          slider.style.transition = "all 0.3s ease-in-out";
          slider.style.left = -1 * slideWidth * currentNum + "px";
          if(currentNum > imgSlideLength - 2){
            currentNum=0;
            slider.style.left = -1 * slideWidth * currentNum + "px";
            slider.style.transition = 0+"ms";
            setTimeout(autoSlide, 0)
          }
          autoPager(currentNum -1)
        }else if(idx == 1){
          currentNum--;
          slider.style.transition = "all 0.3s ease-in-out";
          slider.style.left = -1 * slideWidth * currentNum + "px";
          autoPager(currentNum -1)
          if(currentNum < 1){
            currentNum = imgSlideLength - 1;
            slider.style.left = -1 * slideWidth * currentNum + "px";
            slider.style.transition = 0+"ms";
            setTimeout(function(){
              currentNum--;
              slider.style.transition = "all 0.3s ease-in-out";
              slider.style.left = -1 * slideWidth * currentNum + "px";
              autoPager(currentNum-1)
            }, 0)
          }
        }
      }
    }
  })
});
//main banner - pager btn
pagers.addEventListener('mouseover', (e)=>{
  pager.forEach((el, idx)=>{
    if(e.target == el) clearInterval(slideInt);
  })
});
pagers.addEventListener('mouseout', (e)=>{
  pager.forEach((el, idx)=>{
    if(e.target == el){
      slideInt = setInterval(autoSlide, 3000);
    } 
  })
});
pagers.addEventListener('click', (e)=>{
  pager.forEach((el, idx)=>{
    if(e.target == el){
      if(currentNum >= imgSlideLength -2){
        if(idx == 0){
          currentNum++;
          slider.style.left = -1 * slideWidth * currentNum + "px";
          slider.style.transition = "all 0.3s ease-in-out";
          setTimeout(function(){
            currentNum = 1;
            slider.style.left = -1 * slideWidth * currentNum + "px";
            slider.style.transition = 0+"ms";
          }, 0);
        }else{
          currentNum = idx + 1;
          slider.style.left = -1 * slideWidth * currentNum + "px";
          slider.style.transition = "all 0.3s ease-in-out";
        }
      }else if(currentNum <= 1){
        if(idx >= pager.length - 1){
          currentNum--;
          slider.style.left = -1 * slideWidth * currentNum + "px";
          slider.style.transition = "all 0.3s ease-in-out";
          setTimeout(function(){
            currentNum = imgSlideLength -2;
            slider.style.left = -1 * slideWidth * currentNum + "px";
            slider.style.transition = 0+"ms";
          }, 0);

        }else{
          currentNum = idx + 1;
          slider.style.left = -1 * slideWidth * currentNum + "px";
          slider.style.transition = "all 0.3s ease-in-out";
        }
      }else{
        currentNum = idx + 1;
        slider.style.left = -1 * slideWidth * currentNum + "px";
        slider.style.transition = "all 0.3s ease-in-out";
      }
      autoPager(idx);
    }
  })
});

//best con
const rank = document.querySelectorAll(".rank");
rank.forEach((el, idx)=>{
  el.innerText = idx + 1;
});

//new con
const newProductSlider = document.querySelector('#sec2 .product-slider');
const newCon = document.querySelector('#sec2 .new-con');
const newItem = document.querySelectorAll('#sec2 .new-item');
const newPagers = document.querySelector('#sec2 .pagers');
const newPager = document.querySelectorAll('#sec2 .pager');
//new con - slider
let newPageNum = "";
let slideItemGap = newItem[1].offsetLeft - newItem[0].offsetLeft - newItem[0].offsetWidth;
console.log(slideItemGap);
newPagers.addEventListener('click', function(e){
  newPager.forEach((el, idx)=>{
    if(e.target == el){
      newPageNum = idx;
      el.classList.add('slide-on');
      newCon.style.transform = `translateX(${-1 * (newProductSlider.offsetWidth + slideItemGap) * idx}px)`;
    }else{
      el.classList.remove('slide-on');
    }
  });
})
//jellcat friends
const lineThum = document.querySelector('#sec4 .line-thum');
const thumSlide = document.querySelector('#sec4 .line-thum .thum-slider');
const thumUl = document.querySelector('#sec4 .line-thum ul');
const thumUlImg = document.querySelectorAll('#sec4 .line-thum ul img');
const thumLeftArrow = document.querySelector('#sec4 .left-arrow img');
const thumRightArrow = document.querySelector('#sec4 .right-arrow img');
//jellcat friends - width & height
thumUl.style.gridTemplateColumns = `repeat(${thumUlImg.length}, 1fr)`;
lineThum.style.height = thumUl.offsetHeight + "px";
//jellcat friends - thum slider
let thumSlideNum = 0;
let thumImgGap = thumUlImg[1].offsetLeft - thumUlImg[0].offsetLeft;
thumLeftArrow.addEventListener('click', function(){
  if((thumUl.offsetWidth + thumSlide.offsetLeft) < lineThum.offsetWidth){
    thumSlide.style.left = -3 * thumSlideNum * thumImgGap + "px";
  }else{
    thumSlideNum++;
    thumSlide.style.left = -3 * thumSlideNum * thumImgGap + "px";
  }
});
thumRightArrow.addEventListener('click', function(){
  if(thumSlide.offsetLeft >= 0){
    thumSlide.style.left = -3 * thumSlideNum * thumImgGap + "px";
  }else{
    thumSlideNum--;
    thumSlide.style.left = -3 * thumSlideNum * thumImgGap + "px";
  }
});
//jellcat friends - product slider
const lineProducts = document.querySelector('#sec4 .products');
const lineProduct = document.querySelectorAll('#sec4 .products .product');
const lineProductPagers = document.querySelector('#sec4 .pagers');
const lineProductPager = document.querySelectorAll('#sec4 .pagers .pager');
const lineProductSlideGap = lineProduct[2].offsetLeft - lineProduct[0].offsetLeft;
lineProductPagers.addEventListener('click', function(e){
  lineProductPager.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add("slide-on");
      if(idx == 0){
        lineProducts.style.transform = `translateX(0)`;
      }else if(idx == 1){
        lineProducts.style.transform = `translateX(${-1*lineProductSlideGap}px)`
      }
    }else{
      el.classList.remove("slide-on");
    }
  })
});