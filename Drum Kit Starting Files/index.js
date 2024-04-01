// document.querySelector("button").addEventListener("click" , function(){
//     alert("Hi this is alert");
// });

var boxs = document.querySelectorAll(".drum").length;

for (var i = 0; i < boxs; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttoninnerHtml = this.innerHTML;
    band(buttoninnerHtml);
    buttonAnimation(buttoninnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  band(event.key);
  buttonAnimation(event.key);
});

function band(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 120);
}
