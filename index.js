
var drumkitLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumkitLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    alert("Ouch!");
  });
}
