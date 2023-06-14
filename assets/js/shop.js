var cartChild = document.getElementById('cart-child');
var cartInfo = document.getElementById('cart-info');
var cart = true;
  
// Xử lý sự kiện khi nhấp chuột vào nút "Giỏ hàng"
cartChild.addEventListener('click', function() {
    if (cart) {
      cartInfo.style.display = 'block';
      cart = false;
    } else {
      cartInfo.style.display = 'none';
      cart = true;
    }
});


var menu = document.getElementById('menu');
var isMobile = false; // Biến để theo dõi trạng thái responsive

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 767) {
  isMobile = true;
  menu.style.display = 'none'; // Ẩn menu trên thiết bị di động
}

// Đăng ký sự kiện resize để xử lý responsive
window.addEventListener('resize', function() {
  if (window.innerWidth <= 767) {
    if (!isMobile) {
      isMobile = true;
      menu.style.display = 'none'; // Ẩn menu trên thiết bị di động
    }
  } else {
    if (isMobile) {
      isMobile = false;
      menu.style.display = 'block'; // Hiện menu trở lại trên giao diện máy tính
    }
  }
});

function showMenu() {
  if (isMobile) {
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
}

// tinhs price
var price = document.getElementById('price');
var inputPrice = document.getElementById('input-price');
var sum = 0;

price.addEventListener('click', function(){
  sum = price.value * 80;
  inputPrice.innerHTML = "$"+sum;
});

// click open close aside
var isTablet = false; // Biến để theo dõi trạng thái responsive
var isTablet2 = false; 
var isTablet3 = false; 
var isTablet4 = false; 
var categories_child = document.getElementById('categories-child');
var formInput = document.getElementById('form');
var productLink = document.getElementById('product-link');
var rated = document.getElementById('rated');
var i1 = document.getElementById('i1');
var i2 = document.getElementById('i2');
var i3 = document.getElementById('i3');
var i4 = document.getElementById('i4');

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 1023) {
  isTablet = true;
  categories_child.style.display = 'none'; 
}

// Đăng ký sự kiện resize để xử lý responsive
window.addEventListener('resize', function() {
  if (window.innerWidth <= 1023) {
    if (!isTablet) {
      isTablet = true;
      categories_child.style.display = 'none';
    }
  } else {
    if (isTablet) {
      isTablet = false;
      categories_child.style.display = 'block'; 
    }
  }
});


function openContent(){
  if(isTablet){
    if(categories_child.style.display === 'none'){
      categories_child.style.display = 'block';
      i1.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      categories_child.style.display = 'none';
      i1.className = "fa-solid fa-chevron-down";
    }
  }
}

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 1023) {
  isTablet2 = true;
  formInput.style.display = 'none'; 
}

// Đăng ký sự kiện resize để xử lý responsive
window.addEventListener('resize', function() {
  if (window.innerWidth <= 1023) {
    if (!isTablet2) {
      isTablet2 = true;
      formInput.style.display = 'none'; 
    }
  } else {
    if (isTablet2) {
      isTablet2 = false;
      formInput.style.display = 'block';
    }
  }
});

function openInput(){
  if(isTablet2){
    if(formInput.style.display === 'none'){
      formInput.style.display = 'block';
      i2.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      formInput.style.display = 'none';
      i2.className = "fa-solid fa-chevron-down";
    }
  }
}

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 1023) {
  isTablet3 = true;
  productLink.style.display = 'none'; 
}

window.addEventListener('resize', function() {
  if (window.innerWidth <= 1023) {
    if (!isTablet3) {
      isTablet3 = true;
      productLink.style.display = 'none';
    }
  } else {
    if (isTablet3) {
      isTablet3 = false;
      productLink.style.display = 'block'; 
    }
  }
});

function openProduct(){
  if(isTablet3){
    if(productLink.style.display === 'none'){
      productLink.style.display = 'block';
      i3.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      productLink.style.display = 'none';
      i3.className = "fa-solid fa-chevron-down";
    }
  }
}

if (window.innerWidth <= 1023) {
  isTablet4 = true;
  rated.style.display = 'none'; 
}

window.addEventListener('resize', function() {
  if (window.innerWidth <= 1023) {
    if (!isTablet4) {
      isTablet4 = true;
      rated.style.display = 'none'; 
    }
  } else {
    if (isTablet4) {
      isTablet4 = false;
      rated.style.display = 'block'; 
    }
  }
});

function openRated(){
  if(isTablet4){
    if(rated.style.display === 'none'){
      rated.style.display = 'block';
      i4.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      rated.style.display = 'none';
      i4.className = "fa-solid fa-chevron-down";
    }
  }
}

