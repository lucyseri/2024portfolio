const categoryMorebtn = document.querySelector('.category-select img');
const categoryBtns = document.querySelector('.category-btns');
const categoryBtnLi = document.querySelectorAll('.category-btns li');
categoryMorebtn.addEventListener('click', function(e){
  if(categoryMorebtn.classList.contains('category-more')){
    categoryMorebtn.classList.remove('category-more');
    categoryBtns.style.height = categoryBtnLi[0].offsetHeight + "px";
  }else{
    categoryMorebtn.classList.add('category-more');
    categoryBtns.style.height = "auto";
  }
});
categoryBtns.addEventListener('click', function(e){
  categoryBtnLi.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add('current-category');
    }else{
      el.classList.remove('current-category');
    }
  })
});
let currentPageNum = 0;
const pagerBtns = document.querySelector('.pager-btns');
const pagerBtnLi = document.querySelectorAll('.pager-btns li');
pagerBtns.addEventListener('click', function(e){
  pagerBtnLi.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add('current-page');
      currentPageNum = idx + 1;
    }else{
      el.classList.remove('current-page');
    }
  })
});