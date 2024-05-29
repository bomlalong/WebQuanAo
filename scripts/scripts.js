const listImage = document.querySelector('.img_list');
const imgs = document.getElementsByTagName('img');
const btnLeft = document.querySelector('.prev');
const btnRight = document.querySelector('.next');
const length = 3;
let current = 0;

// Hàm chuyển đổi hình ảnh tự động
setInterval(() => {
    if (current == length - 1) {
        current = 0;
    } else {
        current++;
    }
    let width = imgs[current].offsetWidth; // Lấy kích thước thực của hình ảnh hiện tại
    listImage.style.transform = `translateX(${-width * current}px)`;
}, 4000);

// Sự kiện khi nhấn nút chuyển đến hình ảnh tiếp theo
btnRight.addEventListener('click', () => {
    if (current == length - 1) {
        current = 0;
    } else {
        current++;
    }
    let width = imgs[current].offsetWidth; // Lấy kích thước thực của hình ảnh hiện tại
    listImage.style.transform = `translateX(${-width * current}px)`;
});

// Sự kiện khi nhấn nút chuyển đến hình ảnh trước đó
btnLeft.addEventListener('click', () => {
    if (current == 0) {
        current = length - 1;
    } else {
        current--;
    }
    let width = imgs[current].offsetWidth; // Lấy kích thước thực của hình ảnh hiện tại
    listImage.style.transform = `translateX(${-width * current}px)`;
});
