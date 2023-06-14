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
var index = 1;
function slideImg(){
  let img = ['../assets/img/gallery/gallery1.jpg',
              '../assets/img/gallery/gallery2.jpg',
              '../assets/img/gallery/gallery3.jpg',
              '../assets/img/gallery/gallery4.jpg',
              '../assets/img/gallery/gallery5.jpg',
              '../assets/img/gallery/gallery6.jpg',
              '../assets/img/gallery/gallery7.jpg',
              '../assets/img/gallery/gallery8.jpg',
              '../assets/img/gallery/gallery9.jpg',
              '../assets/img/gallery/gallery12.jpg',
              '../assets/img/gallery/gallery13.jpg'
            ];
  document.getElementById('slide-img').src = img[index];
  index++;
  if(index === 11){
    index = 0;
  }
}setInterval(slideImg, 3000)