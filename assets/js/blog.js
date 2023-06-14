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

// click open close aside
var isTablet = false; // Biến để theo dõi trạng thái responsive
var isTablet2 = false; 
var isTablet3 = false; 
var isTablet4 = false; 
var content1 = document.getElementById('content-text');
var content2 = document.getElementById('content-text2');
var content3 = document.getElementById('content-text3');
var content4 = document.getElementById('content-text4');
var i1 = document.getElementById('i1');
var i2 = document.getElementById('i2');
var i3 = document.getElementById('i3');
var i4 = document.getElementById('i4');

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 1023) {
  isTablet = true;
  content1.style.display = 'none'; 
}

// Đăng ký sự kiện resize để xử lý responsive
window.addEventListener('resize', function() {
  if (window.innerWidth <= 1023) {
    if (!isTablet) {
      isTablet = true;
      content1.style.display = 'none';
    }
  } else {
    if (isTablet) {
      isTablet = false;
      content1.style.display = 'block'; 
    }
  }
});


function openText1(){
  if(isTablet){
    if(content1.style.display === 'none'){
      content1.style.display = 'block';
      i1.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      content1.style.display = 'none';
      i1.className = "fa-solid fa-chevron-down";
    }
  }
}

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 1023) {
  isTablet2 = true;
  content2.style.display = 'none'; 
}

// Đăng ký sự kiện resize để xử lý responsive
window.addEventListener('resize', function() {
  if (window.innerWidth <= 1023) {
    if (!isTablet2) {
      isTablet2 = true;
      content2.style.display = 'none'; 
    }
  } else {
    if (isTablet2) {
      isTablet2 = false;
      content2.style.display = 'block';
    }
  }
});

function openText2(){
  if(isTablet2){
    if(content2.style.display === 'none'){
      content2.style.display = 'block';
      i2.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      content2.style.display = 'none';
      i2.className = "fa-solid fa-chevron-down";
    }
  }
}

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 1023) {
  isTablet3 = true;
  content3.style.display = 'none'; 
}

window.addEventListener('resize', function() {
  if (window.innerWidth <= 1023) {
    if (!isTablet3) {
      isTablet3 = true;
      content3.style.display = 'none';
    }
  } else {
    if (isTablet3) {
      isTablet3 = false;
      content3.style.display = 'block'; 
    }
  }
});

function openText3(){
  if(isTablet3){
    if(content3.style.display === 'none'){
      content3.style.display = 'block';
      i3.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      content3.style.display = 'none';
      i3.className = "fa-solid fa-chevron-down";
    }
  }
}

if (window.innerWidth <= 1023) {
  isTablet4 = true;
  content4.style.display = 'none'; 
}

window.addEventListener('resize', function() {
  if (window.innerWidth <= 1023) {
    if (!isTablet4) {
      isTablet4 = true;
      content4.style.display = 'none'; 
    }
  } else {
    if (isTablet4) {
      isTablet4 = false;
      rated.style.display = 'block'; 
    }
  }
});

function openText4(){
  if(isTablet4){
    if(content4.style.display === 'none'){
      content4.style.display = 'block';
      i4.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      content4.style.display = 'none';
      i4.className = "fa-solid fa-chevron-down";
    }
  }
}