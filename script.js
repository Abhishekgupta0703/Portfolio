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
  loader.style.display = "none";
  
  // Trigger social icons animation
  const socialIcons = document.querySelectorAll('.socials a');
  socialIcons.forEach(icon => {
    icon.style.animationPlayState = 'running';
  });
  
  // Trigger line animation
  const line = document.querySelector('.socials .line');
  if (line) {
    line.style.animationPlayState = 'running';
  }
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const submitBtn = this.querySelector('button[type="submit"]');
  
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  // Simulate form submission (replace with actual AJAX call)
  setTimeout(() => {
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.backgroundColor = '#46b953';
    submitBtn.style.borderColor = '#46b953';
    
    // Reset form after 2 seconds
    setTimeout(() => {
      this.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      submitBtn.style.backgroundColor = 'transparent';
      submitBtn.style.borderColor = '#fec86a';
    }, 2000);
  }, 1500);
});
