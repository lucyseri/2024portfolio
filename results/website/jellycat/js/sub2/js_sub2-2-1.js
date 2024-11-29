//products data
const Rawdata = [
  {img: 'img/product/animals0.jpg', name: '[애니멀]할로윈 - 곰도리', price: '42450', rank: '25', date: '20241031'},
  {img: 'img/product/animals1.jpg', name: '[애니멀]할로윈 - 뱀파이어 개구리', price: '42450', rank: '24', date: '20241031'},
  {img: 'img/product/animals2.jpg', name: '[애니멀]할로윈 - 거미', price: '45850', rank: '15', date: '20230101'},
  {img: 'img/product/animals3.jpg', name: '[애니멀]할로윈 - 베이비 박쥐', price: '42850', rank: '16', date: '20230101'},
  {img: 'img/product/animals4.jpg', name: '[애니멀]할로윈 - 펌킨 버니', price: '42850', rank: '17', date: '20230101'},
  {img: 'img/product/animals5.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 하트 버니', price: '45850', rank: '18', date: '20201001'},
  {img: 'img/product/animals6.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 체리 버니', price: '42850', rank: '27', date: '20191001'},
  {img: 'img/product/animals7.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 핑크 버니', price: '45850', rank: '28', date: '20191001'},
  {img: 'img/product/animals8.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 페일핑크 버니', price: '44850', rank: '29', date: '20191001'},
  {img: 'img/product/animals9.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 플라워 패치 베이지 버니', price: '34850', rank: '26', date: '20201212'},
  {img: 'img/product/animals10.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 플라워 패치 핑크 버니', price: '45850', rank: '11', date: '20201212'},
  {img: 'img/product/animals11.jpg', name: '[애니멀]베쉬풀 버니즈 - 소프트 플라워 페치 페일퍼플 버니', price: '45850', rank: '12', date: '20201212'},
  {img: 'img/product/animals12.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 트리 버니', price: '32850', rank: '1', date: '20201001'},
  {img: 'img/product/animals13.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 당근 버니', price: '32850', rank: '4', date: '20201001'},
  {img: 'img/product/animals14.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 연필 버니', price: '35850', rank: '2', date: '20201001'},
  {img: 'img/product/animals15.jpg', name: '[애니멀]북극 라이프 - 아기 황제 펭귄', price: '32850', rank: '14', date: '20220101'},
  {img: 'img/product/animals16.jpg', name: '[애니멀]북극 라이프 - 북극곰', price: '32850', rank: '3', date: '20220101'},
  {img: 'img/product/animals17.jpg', name: '[애니멀]북극 라이프 - 북극여우', price: '32850', rank: '10', date: '20220101'},
  {img: 'img/product/animals18.jpg', name: '[애니멀]북극 라이프 - 락호퍼 펭귄', price: '32850', rank: '5', date: '20220101'},
  {img: 'img/product/animals19.jpg', name: '[애니멀]북극 라이프 - 마카로니 펭귄', price: '32850', rank: '9', date: '20220101'},
  {img: 'img/product/animals20.jpg', name: '[애니멀]북극 라이프 - 첫째 아기 펭귄', price: '32850', rank: '13', date: '20220101'},
  {img: 'img/product/animals21.jpg', name: '[애니멀]북극 라이프 - 둘째 아기 펭귄', price: '48850', rank: '6', date: '20220101'},
  {img: 'img/product/animals22.jpg', name: '[애니멀]북극 라이프 - 셋째 아기 펭귄', price: '45850', rank: '19', date: '20220101'},
  {img: 'img/product/animals23.jpg', name: '[애니멀]오션 라이프 - 문어', price: '48850', rank: '20', date: '20220101'},
  {img: 'img/product/animals24.jpg', name: '[애니멀]오션 라이프 - 혹등고래', price: '48850', rank: '7', date: '20220101'},
  {img: 'img/product/animals25.jpg', name: '[애니멀]오션 라이프 - 향고래', price: '48850', rank: '21', date: '20220101'},
  {img: 'img/product/animals26.jpg', name: '[애니멀]오션 라이프 - 게', price: '48850', rank: '8', date: '20220101'},
  {img: 'img/product/animals27.jpg', name: '[애니멀]오션 라이프 - 돌고래', price: '44850', rank: '22', date: '20220101'},
  {img: 'img/product/animals28.jpg', name: '[애니멀]오션 라이프 - 가재', price: '42850', rank: '23', date: '20220101'},
  {img: 'img/product/animals29.jpg', name: '[애니멀]오션 라이프 - 랍스터', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals30.jpg', name: '[애니멀]오션 라이프 - 홍합', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals31.jpg', name: '[애니멀]오션 라이프 - 조개', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals32.jpg', name: '[애니멀]오션 라이프 - 새우', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals33.jpg', name: '[애니멀]오션 라이프 - 베이비 그레이 문어', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals34.jpg', name: '[애니멀]오션 라이프 - 매너티', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals35.jpg', name: '[애니멀]오션 라이프 - 시팅 랍스터', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals36.jpg', name: '[애니멀]오션 라이프 - 시팅 크랩', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals37.jpg', name: '[애니멀]오션 라이프 - 시팅 새우', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals38.jpg', name: '[애니멀]오션 라이프 - 복어', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals39.jpg', name: '[애니멀]오션 라이프 - 아귀', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals40.jpg', name: '[애니멀]오션 라이프 - 라이온피쉬', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals41.jpg', name: '[애니멀]오션 라이프 - 진주', price: '42850', rank: '31', date: '20220101'},
  {img: 'img/product/animals42.jpg', name: '[애니멀스]농장 라이프 - 아기 오리', price: '45584', rank: '7', date: '20240101'},
  {img: 'img/product/animals43.jpg', name: '[애니멀스]농장 라이프 - 오리 가족', price: '45586', rank: '9', date: '20240101'},
  {img: 'img/product/animals44.jpg', name: '[애니멀스]농장 라이프 - 닭', price: '45585', rank: '11', date: '20240101'},
  {img: 'img/product/animals45.jpg', name: '[애니멀스]농장 라이프 - 양', price: '45587', rank: '13', date: '20240101'},
  {img: 'img/product/animals46.jpg', name: '[애니멀스]농장 라이프 - 소', price: '45588', rank: '15', date: '20240101'},
  {img: 'img/product/animals47.jpg', name: '[애니멀스]농장 라이프 - 염소', price: '45590', rank: '17', date: '20240101'},
  {img: 'img/product/animals48.jpg', name: '[애니멀스]농장 라이프 - 조랑말', price: '45589', rank: '19', date: '20240101'},
  {img: 'img/product/animals49.jpg', name: '[애니멀스]농장 라이프 - 아기 돼지', price: '45280', rank: '21', date: '20240101'},
  {img: 'img/product/animals50.jpg', name: '[애니멀스]농장 라이프 - 아기 양', price: '45550', rank: '23', date: '20240101'},
  {img: 'img/product/animals51.jpg', name: '[애니멀스]컬러풀 버그 - 노랑 나비', price: '45550', rank: '23', date: '20210101'},
  {img: 'img/product/animals52.jpg', name: '[애니멀스]컬러풀 버그 - 아기 개미', price: '45550', rank: '23', date: '20210101'},
  {img: 'img/product/animals53.jpg', name: '[애니멀스]컬러풀 버그 - 알록달록 애벌레', price: '45550', rank: '23', date: '20210101'},
  {img: 'img/product/animals54.jpg', name: '[애니멀스]컬러풀 버그 - 분홍 나비', price: '45550', rank: '23', date: '20210101'},
  {img: 'img/product/animals55.jpg', name: '[애니멀스]컬러풀 버그 - 애벌레', price: '45550', rank: '23', date: '20210101'},
  {img: 'img/product/animals56.jpg', name: '[애니멀스]컬러풀 버그 - 아기 꿀벌', price: '45550', rank: '23', date: '20210101'},
  {img: 'img/product/animals57.jpg', name: '[애니멀스]컬러풀 버그 - 달팽이', price: '45550', rank: '23', date: '20210101'},
  {img: 'img/product/animals58.jpg', name: '[애니멀스]컬러풀 버그 - 파랑 나비', price: '45550', rank: '23', date: '20210101'},
  {img: 'img/product/animals59.jpg', name: '[애니멀스]컬러풀 버그 - 무당벌레', price: '45550', rank: '23', date: '20210101'},
  {img: 'img/product/animals60.jpg', name: '[애니멀스]컬러풀 버그 - 꿀벌', price: '45550', rank: '23', date: '20210101'}
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