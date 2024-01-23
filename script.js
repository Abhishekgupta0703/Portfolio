function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change-nav");
  document.getElementById("menu-bg").classList.toggle("change-bg");

}
function remove() {
  document.getElementById("menu-bar").classList.remove("change");
  document.getElementById("nav").classList.remove("change-nav");
  document.getElementById("menu-bg").classList.remove("change-bg");
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < (windowHeight - elementVisible)) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none"
});
