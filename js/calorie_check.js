$(function(){
  let selectBtns = $('.js-selectBtn');
  $('.js-selectBtn').on('click', function(){
    $('.js-on').removeClass('js-on');
    $(this).addClass('js-on');
    let index = selectBtns.index(this);
    $('.mainItem').removeClass('js-show').eq(index).addClass('js-show');
  });
});