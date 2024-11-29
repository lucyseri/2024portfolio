//products data
const Rawdata = [
  {img: 'img/product/amuseables4.jpg', name: '[어뮤저블]할로윈 - 뱀파이어 가지', price: '42450', rank: '25', date: '20241031'},
  {img: 'img/product/amuseables5.jpg', name: '[어뮤저블]할로윈 - 소프트 펌킨', price: '42450', rank: '24', date: '20241031'},
  {img: 'img/product/amuseables6.jpg', name: '[어뮤저블]스낵바 - 샌드위치', price: '45850', rank: '15', date: '20230101'},
  {img: 'img/product/amuseables7.jpg', name: '[어뮤저블]스낵바 - 소프트 콘 바닐라 아이스크림', price: '42850', rank: '16', date: '20230101'},
  {img: 'img/product/amuseables8.jpg', name: '[어뮤저블]스낵바 - 비타민 에너지 쥬스', price: '42850', rank: '17', date: '20230101'},
  {img: 'img/product/amuseables9.jpg', name: '[어뮤저블]스낵바 - 핫도그', price: '45850', rank: '18', date: '20230101'},
  {img: 'img/product/amuseables10.jpg', name: '[어뮤저블]디저트 카페 - 우롱 버블티', price: '42850', rank: '27', date: '20230201'},
  {img: 'img/product/amuseables11.jpg', name: '[어뮤저블]스낵바 - 타코', price: '45850', rank: '28', date: '20230101'},
  {img: 'img/product/amuseables12.jpg', name: '[어뮤저블]디저트 카페 - 테이크아웃 라떼', price: '44850', rank: '29', date: '20230201'},
  {img: 'img/product/amuseables13.jpg', name: '[어뮤저블]스낵바 - 팝콘', price: '34850', rank: '26', date: '20230101'},
  {img: 'img/product/amuseables14.jpg', name: '[어뮤저블]스낵바 - 치즈버거', price: '45850', rank: '11', date: '20230101'},
  {img: 'img/product/amuseables15.jpg', name: '[어뮤저블]스낵바 - 마르게리따', price: '45850', rank: '12', date: '20230101'},
  {img: 'img/product/amuseables16.jpg', name: '[어뮤저블]후르츠 앤 배지 - 복숭아', price: '32850', rank: '1', date: '20220101'},
  {img: 'img/product/amuseables17.jpg', name: '[어뮤저블]후르츠 앤 배지 - 아스파라거스', price: '32850', rank: '4', date: '20220101'},
  {img: 'img/product/amuseables18.jpg', name: '[어뮤저블]후르츠 앤 배지 - 브로콜리', price: '35850', rank: '2', date: '20220101'},
  {img: 'img/product/amuseables19.jpg', name: '[어뮤저블]후르츠 앤 배지 - 완두콩', price: '32850', rank: '14', date: '20220101'},
  {img: 'img/product/amuseables20.jpg', name: '[어뮤저블]후르츠 앤 배지 - 체리', price: '32850', rank: '3', date: '20220101'},
  {img: 'img/product/amuseables21.jpg', name: '[어뮤저블]후르츠 앤 배지 - 레몬', price: '32850', rank: '10', date: '20220101'},
  {img: 'img/product/amuseables22.jpg', name: '[어뮤저블]후르츠 앤 배지 - 당근', price: '32850', rank: '5', date: '20220101'},
  {img: 'img/product/amuseables23.jpg', name: '[어뮤저블]후르츠 앤 배지 - 옥수수', price: '32850', rank: '9', date: '20220101'},
  {img: 'img/product/amuseables24.jpg', name: '[어뮤저블]후르츠 앤 배지 - 올리브', price: '32850', rank: '13', date: '20220101'},
  {img: 'img/product/amuseables44.jpg', name: '[어뮤저블]디저트 카페 - 딸기 타르트', price: '48850', rank: '6', date: '20230201'},
  {img: 'img/product/amuseables45.jpg', name: '[어뮤저블]디저트 카페 - 프레첼', price: '45850', rank: '19', date: '20230201'},
  {img: 'img/product/amuseables46.jpg', name: '[어뮤저블]디저트 카페 - 산딸기 돔', price: '48850', rank: '20', date: '20230201'},
  {img: 'img/product/amuseables47.jpg', name: '[어뮤저블]디저트 카페 - 초코 파르페', price: '48850', rank: '7', date: '20230201'},
  {img: 'img/product/amuseables48.jpg', name: '[어뮤저블]디저트 카페 - 를리지외즈', price: '48850', rank: '21', date: '20230201'},
  {img: 'img/product/amuseables49.jpg', name: '[어뮤저블]디저트 카페 - 에클레어', price: '48850', rank: '8', date: '20230201'},
  {img: 'img/product/amuseables50.jpg', name: '[어뮤저블]디저트 카페 - 밀푀유', price: '44850', rank: '22', date: '20230201'},
  {img: 'img/product/amuseables51.jpg', name: '[어뮤저블]디저트 카페 - 초코 케이크', price: '42850', rank: '23', date: '20230201'},
  {img: 'img/product/amuseables0.jpg', name: '[어뮤저블]디저트 카페 - 티 팟', price: '42850', rank: '31', date: '20230201'}
];
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
  }
}
pagerBtnHideFn(0);
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
  for(let i=0;i<Rawdata.length;i++){
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
  currentPageNum = 0;
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  for(let i =0; i<pagerBtnLi.length;i++){
    pagerBtnLi[i].classList.remove('current-page');
  }
  pagerBtnLi[0].classList.add('current-page');
  pagerBtnHideFn(0);
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
pagerBigLeftArrow.addEventListener('click', function(e){
  pagerBtnHideFn(0);
  currentPageNum = 0;
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  for(let i =0; i<pagerBtnLi.length;i++){
    pagerBtnLi[i].classList.remove('current-page');
  }
  pagerBtnLi[0].classList.add('current-page');
  productsLiHtml ='';
  let length = 0;
  if(parseInt(newData.length / 12) > 0){
    length = 12;
  }else{
    length = newData.length % 12;
  }
  productsInputFn(0, length);
});
pagerBigRightArrow.addEventListener('click', function(e){
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  if(pagerBtnLi.length>=5){
    for(hidepager of pagerBtnLi){
      hidepager.classList.add('hide');
    }
    for(let i=0;i<5;i++){
      pagerBtnLi[pagerBtnLi.length-5+i].classList.remove('hide');
    }
  }else{
    for(inActiveBtn of pagerBtnLi){
      inActiveBtn.classList.remove('current-page');
    }
    pagerBtnLi[pagerBtnLi.length-1].classList.add('current-page');
  }
  currentPageNum = pagerBtnLi.length-1;
  for(let i =0; i<pagerBtnLi.length;i++){
    pagerBtnLi[i].classList.remove('current-page');
  }
  pagerBtnLi[pagerBtnLi.length-1].classList.add('current-page');
  productsLiHtml='';
  let length = 0;
  if(parseInt(newData.length / 12) - currentPageNum > 0){
    length = 12;
  }else{
    length = newData.length % 12;
  }
  productsInputFn(currentPageNum, length);
});