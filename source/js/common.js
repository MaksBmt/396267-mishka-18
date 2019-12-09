var popup = document.querySelector(".modal-size");
var overlay = document.querySelector(".modal-overlay");
var list = document.querySelectorAll(".product__cart--modal");
var id = 0;
let inputZakaz = document.querySelector(".form__input--name-zakaz");
let form = document.querySelector(".modal-size__form");
var navTop = document.querySelector('.nav-menu');
var navTopToggle = document.querySelector('.nav-menu__button');

if (navTop) {
  navTop.classList.remove('nav-menu--nojs');
}

if (navTopToggle) {
  navTopToggle.addEventListener('click', function () {
    if (navTop) {
      if (navTop.classList.contains('nav-menu--closed')) {
        navTop.classList.remove('nav-menu--closed');
        navTop.classList.add('nav-menu--opened');
      } else {
        navTop.classList.add('nav-menu--closed');
        navTop.classList.remove('nav-menu--opened');
      }
    }
  });
}

let formSize = document.forms[0]; /*по идеи должно работать и именем формы, но нет - дает ошибку */
let inputSize = formSize.elements.size;

if (list) {
  for (var f = 0; f < list.length; f++) {
    list[f].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      overlay.classList.add("modal-show");
      id = this.dataset.value;
      inputZakaz.value = id;
      console.log(inputZakaz.value);
    });
  }
  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
      }
    }
  });
}

if (inputZakaz) {
  form.onsubmit = function (evt) {
    console.log("форма отправлена");
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
    console.log(inputSize.value);
    alert('Вы заказали товар: ' + inputZakaz.value + ' размером ' + inputSize.value);
  };
}
