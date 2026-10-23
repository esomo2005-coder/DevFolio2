// navbar background on scroll + back to top button
var nav = document.getElementById("nav");
var toTop = document.getElementById("toTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.classList.add("dark");
    toTop.classList.add("show");
  } else {
    nav.classList.remove("dark");
    toTop.classList.remove("show");
  }
});


var words = ["Designer", "Junior Front-End Developer"];
var typing = document.getElementById("typing");
var wordIndex = 0;
var letter = 0;
var deleting = false;

function type() {
  var word = words[wordIndex];

  if (deleting) {
    letter--;
  } else {
    letter++;
  }

  typing.textContent = word.substring(0, letter);

  var speed = deleting ? 50 : 100;

  if (!deleting && letter == word.length) {
    deleting = true;
    speed = 1500;
  } else if (deleting && letter == 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(type, speed);
}

type();
