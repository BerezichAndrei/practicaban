const prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  slides = document.querySelectorAll(".slide");
function Burger(x) {
  if (x.classList.toggle("change")) openNav();
  else {
    closeNav();
  }
}
function openNav() {
  document.querySelector(".sidenav").style.display = "flex";
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
let index = 0;
const ActiveSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};
const prepareCurrentSlide = (ind) => {
  ActiveSlide(index);
};
const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};
const prevSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};
setInterval(nextSlide, 3000);
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

window.onload = function(){
  window.setInterval(function(){
  var now = new Date();
  var clock = document.getElementById("clock");
  clock.innerHTML = now.toLocaleTimeString();
  },1000);
};

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

const progress = document.querySelector("progress")

const handleScroll = () => {
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop
  const offsetHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = windowScroll / offsetHeight
  progress.value = scrolled
}

window.addEventListener("scroll", handleScroll)




let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
}
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};


