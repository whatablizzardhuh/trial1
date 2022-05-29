"use strict";
var imageCounter = 1;
showDiv(imageCounter);
function changeImage(m) {
  showDiv((imageCounter = imageCounter + m));
}
function showDiv(n) {
  var i;
  var imageArray = document.getElementsByClassName("mySlides");
  if (n > imageArray.length) {
    imageCounter = 1;
  }
  if (n < 1) {
    imageCounter = imageArray.length;
  }
  for (i = 0; i < imageArray.length; i++) {
    imageArray[i].style.display = "none";
  }
  imageArray[imageCounter - 1].style.display = "block";
}

var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

function myFunction() {
  var x = document.getElementById("nvbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}