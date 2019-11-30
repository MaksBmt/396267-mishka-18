var popup = document.querySelector(".modal-size");
var overlay = document.querySelector(".modal-overlay");
var list = document.querySelectorAll(".product__cart--modal");

if (list) {
  for (var f = 0; f < list.length; f++) {
    list[f].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      overlay.classList.add("modal-show");
    });
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
}
