
var drumkitLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumkitLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
  });
}
