let profileBtn = document.querySelector('#js-profileBtn');
let productBtn = document.querySelector('#js-productBtn');
let profile = document.querySelector('#js-profile');
let product = document.querySelector('#js-product');

// window.addEventListener('load', function(){
//   profileBtn.classList.add('js-on');
//   profile.classList.add('js-on');
// });

window.addEventListener('load', function(){
  productBtn.classList.add('js-on');
  product.classList.add('js-on');
});

profileBtn.addEventListener('click', function(){
  if(this.classList.contains('js-on')) {
    return;
  } else {
    this.classList.add('js-on');
    productBtn.classList.remove('js-on');
    profile.classList.add('js-on');
    product.classList.remove('js-on');
  }
});

productBtn.addEventListener('click', function(){
  if(this.classList.contains('js-on')) {
    return;
  } else {
    this.classList.add('js-on');
    profileBtn.classList.remove('js-on');
    product.classList.add('js-on');
    profile.classList.remove('js-on');
  }
});