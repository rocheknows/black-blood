var backgroundImg = ["img/1.jpg", "img/2.jpg"]; //Add more backgrounds to the array
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
    $(".main").css("visibility", "visible");
  $("#images").css(
    "background-image",
    "url(" + backgroundImg[backgroundCount] + ")"
  );
});
