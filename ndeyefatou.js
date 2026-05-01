new Typed("#type", {
  strings: ["Ndeye Fatou Mbaye", "Developer", "Intern"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});
// fin de l'animation

// pour que le navbar soit fixe est change de couleur dans les autres sections
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-white", "shadow-lg");
    navbar.classList.remove("text-white");
  } else {
    navbar.classList.remove("bg-white", "shadow-lg");
    navbar.classList.add("text-white");
  }
});