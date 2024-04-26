var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "c":
      var tom1 = new Audio("sounds/a.wav");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/bruh.wav");
      tom2.play();
      break;

    case "e":
      var tom3 = new Audio('sounds/d.wav');
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio('sounds/e.wav');
      tom4.play();
      break;

    case "g":
      var snare = new Audio('sounds/f.wav');
      snare.play();
      break;

    case "a":
      var crash = new Audio('sounds/g.wav');
      crash.play();
      break;

    case "b":
      var kick = new Audio('sounds/h.wav');
      kick.play();
      break;

    case "p":
        var baka = new Audio('sounds/j.wav')
        baka.play();
        break;

    case "l":
        var Lol = new Audio('sounds/k.wav')
        Lol.play();
        break;

    case "v":
          var bruh = new Audio('sounds/l.wav')
          bruh.play();
          break;

    case "n":
          var Natt = new Audio('sounds/o.wav')
          Natt.play();
          break;

    case "z":
        var zar = new Audio("sounds/s.wav")
        zar.play();
        break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
