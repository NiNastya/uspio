import '../scss/style.scss'
import axios from 'axios';

AOS.init();

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    lazy: true,
    autoplay: {
        delay: 50000,
        disableOnInteraction: false,
    },
    breakpoints: {
        960: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 1,
        },
    }
});


// Бургер меню
var burgerBtn = document.getElementById('header__burger');
var burgerMenu = document.getElementById('header__menu');
burgerBtn.addEventListener('click', function () {
    burgerMenu.classList.toggle('d-none');
});

// отправка формы 

document.getElementById('subscribe').addEventListener('submit', function (event) {
    // Сделать влидацию формы
    event.preventDefault();
    const formData = new FormData(this);
    axios.post('/public/send.json', formData)
        .then(response => {
            console.log(response.data);
            document.getElementById('btn-form').innerText = response.data.message
            document.getElementById('btn-form').style.background = "#000";
        })
        .catch(error => {
            console.error('Error', error);
        });
});

// Устанавливаем изображение в модальное окно 
var images = document.getElementsByClassName("ModalImg");
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function (event) {
        document.querySelector('.modal-img').src = event.target.currentSrc
    });
}
