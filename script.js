let myIndex = 0;
const mobileMenu = document.querySelector(".page-header__mobile");
const mobileMenuIcon = document.querySelector(".fa-bars");
const searchPanel = document.querySelector(".search");
const searchForm = document.querySelector(".search__form");
const searchInput = document.querySelector(".search__input");
const searchSubmit = document.querySelector(".search__submit");
const searchClose = document.querySelector(".search__close");
const searchIcon = document.querySelector(".page-header__search");
const bodyElem = document.querySelector(".page");
const nav = document.querySelector(".page-header__nav");

// Search panel
searchIcon.addEventListener("click", () => {
  bodyElem.classList.add("page--overflow-hidden");
  searchPanel.classList.add("search--active");
  searchInput.focus();
});

searchSubmit.addEventListener("click", () => {
  searchForm.submit();
});

searchClose.addEventListener("click", () => {
  bodyElem.classList.remove("page--overflow-hidden");
  searchPanel.classList.remove("search--active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 767) {
    bodyElem.classList.remove("page--overflow-hidden");
    searchPanel.classList.remove("search--active");
  }
});

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