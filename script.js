let myIndex = 0;
const mobileMenu = document.querySelector(".page-header__mobile");
const mobileMenuIcon = document.querySelector(".fa-bars")
const nav = document.querySelector(".page-header__nav")

// Mobile menu
mobileMenu.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (mobileMenuIcon.classList.contains("fa-bars")) {
    mobileMenuIcon.classList.remove("fa-bars");
    mobileMenuIcon.classList.add("fa-xmark");
  }
  else {
    mobileMenuIcon.classList.remove("fa-xmark");
    mobileMenuIcon.classList.add("fa-bars");
  }
});

// Automatic Slideshow
carousel();

function carousel() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hide");  
  }
  
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }    
  
  slides[myIndex-1].classList.remove("hide"); 
  
  setTimeout(carousel, 5000);
}
