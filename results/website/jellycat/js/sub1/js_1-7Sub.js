//products data
const Rawdata = [
  {img: 'img/product/gift3.jpg', name: '[생일 선물]해피벌스데이 - 생일 케이크', price: '42450', rank: '8', date: '20221225'},
  {img: 'img/product/gift1.jpg', name: '[크리스마스 선물]메리 크리스마스 - 소프트 트리', price: '42450', rank: '10', date: '20241225'},
  {img: 'img/product/gift2.jpg', name: '[크리스마스 선물]메리 크리스마스 - 소프트 리스', price: '42450', rank: '10', date: '20241225'},
  {img: 'img/product/gift4.jpg', name: '[아기 선물]담요 선물 - 베이비 문어 담요 선물 세트', price: '42450', rank: '10', date: '20241025'},
  {img: 'img/product/gift0.jpg', name: '[맞춤 선물]배쉬풀 버니즈 퍼스널 - 소프트 베이지 버니즈 인 셔츠', price: '42850', rank: '31', date: '20230201'}
];
//category
const categoryMorebtn = document.querySelector('.category-select img');
const categoryBtns = document.querySelector('.category-btns');
const categoryBtnLi = document.querySelectorAll('.category-btns li');
//products
const productsCon = document.querySelector('.products-con');
//display
const selectBox = document.querySelector('#product-array');
//pager
const pagerBtns = document.querySelector('.pager-btns');
const pagerBigLeftArrow = document.querySelector('.pager .big-left-arrow');
const pagerBigRightArrow = document.querySelector('.pager .big-right-arrow');
const pagerLeftArrow = document.querySelector(".pager .left-arrow");
const pagerRightArrow = document.querySelector(".pager .right-arrow");
//obj prototype
function ProductsObj(img, name, price, rank, date){
  this.img = img;
  this.name = name;
  this.price = price;
  this.rank = rank;
  this.date = date;
};
let productsLiHtml = '';
ProductsObj.prototype.productsLiFn = function(){
  productsLiHtml+=`<li class="product-item product-compo">
                    <a href="product.html">
                      <img src="${this.img}" alt="${this.name}">
                      <div class="product-info">
                        <p class="name">${this.name}</p>
                        <div class="price-info">
                          <p class="price">${parseInt(this.price).toLocaleString('ko-KR')}</p>
                          <span class="heart-icon">
                            <span class="ir_pm">관심상품 담기</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>`
};
let newData = [];
let srotedData = [];
srotedData = Rawdata.sort(function(a, b){
  return b.date - a.date;
});
for(let i=0;i<Rawdata.length;i++){
  newData.push(new ProductsObj(srotedData[i].img, srotedData[i].name, srotedData[i].price, srotedData[i].category, srotedData[i].rank, srotedData[i].date))
}
function productsInputFn(startnum, length){
  for(let i =0; i<length;i++){
    newData[i+12*startnum].productsLiFn();
  }
  productsCon.innerHTML = productsLiHtml;
}
let setLength = '';
if(Rawdata.length>=12){
  setLength = 12;
}else{
  setLength = Rawdata.length;
}
productsInputFn(0, setLength);
//create pager btn
let currentPageNum = 0;
function creatPagerFn(){
  let pagerBtnLiHtml = '<li class="current-page">1</li>';
  if(newData.length%12>0){
    for(let i=0;i<parseInt(newData.length/12);i++){
      pagerBtnLiHtml+=`<li>${i+2}</li>`;
    };
  }else{
    for(let i=0;i<parseInt(newData.length/12-1);i++){
      pagerBtnLiHtml+=`<li>${i+2}</li>`;
    };
  }
  pagerBtns.innerHTML = pagerBtnLiHtml;
};
creatPagerFn();
function pagerBtnHideFn(num){
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  if(pagerBtnLi.length>5){
    for(hidepager of pagerBtnLi){
      hidepager.classList.add('hide');
    }
    for(let i=0; i<5;i++){
      pagerBtnLi[num+i].classList.remove('hide');
    }
  }else{
    for(hidepager of pagerBtnLi){
      hidepager.classList.remove('hide');
    }
  }
}
pagerBtnHideFn(0);
//category select
categoryMorebtn.addEventListener('click', function(e){
  if(categoryMorebtn.classList.contains('category-more')){
    categoryMorebtn.classList.remove('category-more');
    categoryBtns.style.height = categoryBtnLi[0].offsetHeight + "px";
  }else{
    categoryMorebtn.classList.add('category-more');
    categoryBtns.style.height = "auto";
  }
});
//display
selectBox.addEventListener('change', function(){
  if(selectBox.value == 'newst'){
    srotedData = Rawdata.sort(function(a, b){
      return b.date - a.date;
    });
  }else if(selectBox.value == 'popularity'){
    srotedData = Rawdata.sort(function(a, b){
      return a.rank - b.rank;
    });
  }else if(selectBox.value == 'high-price'){
    srotedData = Rawdata.sort(function(a, b){
      return b.price - a.price;
    });
  }else if(selectBox.value == 'low-price'){
    srotedData = Rawdata.sort(function(a, b){
      return a.price - b.price;
    });
  }
  newData.splice(0);
  for(let i = 0;i<srotedData.length;i++){
    newData.push(new ProductsObj(srotedData[i].img, srotedData[i].name, srotedData[i].price, srotedData[i].category, srotedData[i].rank, srotedData[i].date))
  }
  productsLiHtml ='';
  let length = 0;
  if(parseInt(newData.length / 12) > 0){
    length = 12;
  }else{
    length = newData.length % 12;
  }
  productsInputFn(0, length);
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  for(let i =0; i<pagerBtnLi.length;i++){
    pagerBtnLi[i].classList.remove('current-page');
  }
  pagerBtnLi[0].classList.add('current-page');
  currentPageNum = 0;
  pagerBtnHideFn(currentPageNum);
});
//pager
pagerBtns.addEventListener('click', function(e){
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  pagerBtnLi.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add('current-page');
      currentPageNum = idx;
      productsLiHtml='';
      let length = 0;
      if(parseInt(newData.length / 12) - idx > 0){
        length = 12;
      }else{
        length = newData.length % 12;
      }
      productsInputFn(idx, length);
    }else{
      el.classList.remove('current-page');
    }
  })
});
pagerLeftArrow.addEventListener("click", function(){
  currentPageNum--;
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  if(currentPageNum < 0) currentPageNum = 0;
  pagerBtnLi.forEach((el, idx)=>{
    if(idx == currentPageNum){
      el.classList.add('current-page');
      if(idx%5 == 4){
        for(hidepager of pagerBtnLi){
          hidepager.classList.add('hide');
        }
        for(let i=0; i<5;i++){
          pagerBtnLi[parseInt(idx/5)+i].classList.remove('hide');
        }
      }
      productsLiHtml='';
      let length = 0;
      if(parseInt(newData.length / 12) - idx > 0){
        length = 12;
      }else{
        length = newData.length % 12;
      }
      productsInputFn(idx, length);
    }else{
      el.classList.remove('current-page');
    }
  })
});
pagerRightArrow.addEventListener("click", function(){
  currentPageNum++;
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  if(currentPageNum >= pagerBtnLi.length) currentPageNum = pagerBtnLi.length - 1;
  pagerBtnLi.forEach((el, idx)=>{
    if(idx == currentPageNum){
      el.classList.add('current-page');
      if(idx%5 == 0){
        for(hidepager of pagerBtnLi){
          hidepager.classList.add('hide');
        }
        for(let i=0; i<pagerBtnLi.length-idx;i++){
          pagerBtnLi[idx+i].classList.remove('hide');
        }
      }
      productsLiHtml='';
      let length = 0;
      if(parseInt(newData.length / 12) - idx > 0){
        length = 12;
      }else{
        length = newData.length % 12;
      }
      productsInputFn(idx, length);
    }else{
      el.classList.remove('current-page');
    }
  })
});
pagerBigLeftArrow.addEventListener('click', function(){
  currentPageNum = 0;
  pagerBtnHideFn(currentPageNum);
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  for(let i =0; i<pagerBtnLi.length;i++){
    pagerBtnLi[i].classList.remove('current-page');
  }
  pagerBtnLi[0].classList.add('current-page');
  productsLiHtml = '';
  let length = 0;
  if(parseInt(newData.length / 12) > 0){
    length = 12;
  }else{
    length = newData.length % 12;
  }
  productsInputFn(0, length);
});
pagerBigRightArrow.addEventListener('click', function(){
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  currentPageNum = pagerBtnLi.length-1;
  if(pagerBtnLi.length>=5){
    for(hidepager of pagerBtnLi){
      hidepager.classList.add('hide');
    }
    for(let i=0;i<5;i++){
      pagerBtnLi[pagerBtnLi.length-5+i].classList.remove('hide');
    }
  }
  for(inActiveBtn of pagerBtnLi){
    inActiveBtn.classList.remove('current-page');
  }
  pagerBtnLi[currentPageNum].classList.add('current-page');
  productsLiHtml = '';
  let length = 0;
  if(parseInt(newData.length / 12) - currentPageNum > 0){
    length = 12;
  }else{
    length = newData.length % 12;
  }
  productsInputFn(currentPageNum, length);
});
