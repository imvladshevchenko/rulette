var wheel = document.getElementById("wheel");
var wheelBtn = document.getElementById("button");
var closePopup = document.getElementById("closePopup");
var firstWrapper = document.getElementById("firstWrapper");
var secondWrapper = document.getElementById("secondWrapper");
var buttonText = document.getElementById("buttonText");
var redirectLink = document.getElementById("redirectLink");

var HREF_LINK = "";

var counter = 0;

function animation() {
  if (counter < 1) {
    if (innerWidth < 500) {
      buttonText.innerHTML = "OK";
    }
    wheel.classList.toggle("step-1");
    wheelBtn.classList.toggle("animation-in-process");
    counter++;
  } else {
    buttonText.innerHTML = "O‘ynash";
    firstWrapper.style.display = "none";
    secondWrapper.style.display = "block";
    wheel.classList.toggle("step-2");
    wheelBtn.classList.toggle("animation-in-process");
    closePopup.style.display = "none";
    redirectLink.href = HREF_LINK;
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
