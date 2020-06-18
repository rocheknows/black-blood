setTimeout(function () {
  $(".loader").fadeOut("slow");
}, 4000);

var backgroundImg = [
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
]; //Add more backgrounds to the array
var backgroundCount = 0;

$(function () {
  $("#images").css(
    "background-image",
    "url(" + backgroundImg[backgroundCount] + ")"
  ); //allows a variable for changing background img based in an array, change number in [] to change background...
});

$("#images").on("click", function () {
  backgroundCount++;
  if (backgroundCount > backgroundImg.length - 1)
    $(".main").css("visibility", "visible"),
      $("#images").css("display", "none");
  $("body").css("backgroundColor", "#ffffff");

  $("#images").css(
    "background-image",
    "url(" + backgroundImg[backgroundCount] + ")"
  );
});
