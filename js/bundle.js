var wheel = document.getElementById("wheel");
var wheelBtn = document.getElementById("button");
var closePopup = document.getElementById("closePopup");

var counter = 0;

function animation() {
  if (counter < 1) {
    wheel.classList.toggle("step-1");
    wheelBtn.classList.toggle("animation-in-process");
    counter++;
  } else {
    wheel.classList.toggle("step-2");
    wheelBtn.classList.toggle("animation-in-process");
    closePopup.style.display = "none";
  }
  function modalPopup() {
    modal.classList.toggle("modal-active");
    overlay.classList.toggle("overlay-active");
  }
  setTimeout(modalPopup, 5500);
}

function closeModal() {
  modal.classList.toggle("modal-active");
  overlay.classList.toggle("overlay-active");
  wheelBtn.classList.toggle("animation-in-process");
}
