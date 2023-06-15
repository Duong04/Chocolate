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

// slide img
var myIndex = 0;
slideImg();

function slideImg() {
  var i;
  var x = document.getElementById("slide-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slideImg, 2000); // Change image every 2 seconds
}