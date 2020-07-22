setTimeout(function () {
  $(".loader").fadeOut("slow");
}, 4000);

var images = [
  "img/1.jpg",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/5.jpg",
  "img/4.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
  "img/19.jpg",
  "img/20.jpg",
  "img/21.jpg",
  "img/22.jpg",
];

var step = 0;
// set first image src after page loads

function changeImage() {
  // exit if no images, or step = number of items in array (4)
  document.querySelector("#images").src = images[step];
  step++;

  if (step == images.length + 1) {
    document.querySelector("#images").style.visibility = "hidden";
    document.querySelector(".main").style.display = "grid";
    //document.querySelector("body").style.overflow = "auto";
  }
}

changeImage();

document.getElementById("images").addEventListener("touchend", changeImage());
