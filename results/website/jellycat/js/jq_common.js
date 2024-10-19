//header
const navInnerWidth = $('nav .inner').outerWidth();
const navInnerOffset = ($('header').outerWidth() - $('nav .inner').outerWidth()) / 2;
const depth1 = $('.depth1');
const gnb = $('.gnb');
//console.log(depth1[6].offset().left)
//header - gnb width
for(let i = 0; i < gnb.length; i++){
  let gnbWidth = (navInnerWidth - gnb.eq(i).parent().offset().left + navInnerOffset) + "px";
  gnb.eq(i).css("width", gnbWidth);
  gnb.eq(i).css('grid-template-columns', `repeat(${gnb[i].children.length}, minmax(10px, max-content))`)
};
//header - mobile slide menu
$('header .mobile-icon').on('click', function(){
  $('nav').addClass('slide-in');
});
$('.mobile-header img').on('click', function(){
  $('nav').removeClass('slide-in');
});
$('.depth1 img').on('click', function(){
  let speed = 300;
  depth1.find('.gnb').stop().slideUp(speed);
  if($(this).hasClass('gnb-on')){
    $(this).removeClass('gnb-on');
    $(this).attr('alt', '더보기')
    $(this).parent().parent().parent().find('.gnb').stop().slideUp(speed);
  }else{
    $('.depth1 img').removeClass('gnb-on');
    $('.depth1 img').attr('alt', '더보기')
    $(this).addClass('gnb-on');
    $(this).attr('alt', '닫기')
    $(this).parent().parent().parent().find('.gnb').stop().slideDown(speed);
  }
});
