const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Hi.";
  }, 0);
  setTimeout(() => {
    text.textContent = "नमस्ते |";
    // text.textContent = "guten tag.";
  }, 4000);
  setTimeout(() => {
    text.textContent = "bonjour.";
  }, 8000);
};

// changing button text on hover in JavaScript e

// *Navbar*
const plusIcon = document.querySelector(".plus-icon");
const navTop = document.querySelector(".navbar-top");
const navRight = document.querySelector(".navbar-right");
const faPlus = document.getElementsByClassName("fa-times");
var activeBtn = 0;

let addStyle = function () {
  navTop.style.transform = "translateX(0px)";
  navRight.style.transform = "translateY(0px)";
  plusIcon.classList.add("rotate");
  navRight.classList.add("show"); // Add the "show" class to display the right navbar
  setTimeout(function () {
    plusIcon.classList.remove("rotate");
    plusIcon.classList.add("fa-white");
  }, 2000);
};

let closeStyle = function () {
  plusIcon.classList.add("revrotate");
  navTop.style.transform = "translateX(-100vw)";
  navRight.style.transform = "translateY(-100%)"; // Use percentage value for smooth transition
  plusIcon.classList.remove("fa-white");
  navRight.classList.remove("show"); // Remove the "show" class to hide the right navbar
  setTimeout(function () {
    plusIcon.classList.remove("revrotate");
  }, 2000);
};

var isActive = true;

function reverseRotate() {
  plusIcon.classList.add("rotate");
  setTimeout(function () {
    plusIcon.classList.remove("revrotate");
  }, 2000);
}

plusIcon.addEventListener("click", function () {
  // Add or remove class based on the variable
  if (isActive) {
    addStyle();
    plusIcon.classList.remove("fa-times-rotated");
    reverseRotate(); // Call the reverse rotation function after adding the navbar
  } else {
    closeStyle();
    plusIcon.classList.add("fa-times-rotated");
  }
  // Toggle the variable to switch the class
  isActive = !isActive;
});

// **Portfolio section**

// **Modal Window Section**
const modalContent = document.querySelectorAll(".modal-content-root");
const CloseBtn = document.querySelectorAll(".modal-close-btn");
const overlay = document.querySelector(".modal-image-overlay");
const OpenBtn = document.querySelectorAll(".ps");
const sunBtn = document.querySelector(".fa-sun");
const MOONBtn = document.querySelector(".fa-moon");

function showModal() {
  this.style.display = "block";
}

function hideModal() {
  this.style.display = "none";
}

for (var i = 0; i < modalContent.length; i++) {
  (function (index) {
    OpenBtn[index].addEventListener("click", function () {
      modalContent[index].style.display = "block";
    });
    CloseBtn[index].addEventListener("click", function () {
      modalContent[index].style.display = "none";
    });
  })(i);
}

// Hide the content using the escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    for (var i = 0; i < modalContent.length; i++) {
      if (modalContent[i].style.display === "block") {
        modalContent[i].style.display = "none";
      }
    }
  }
});

// **Email Button section**

function openMailClient() {
  window.location.href = "mailto:Sakshitiwari8707@gmail.com";
}

//  **Dark Mode**

const moonBtn = document.querySelector(".btn-theme");
const navBoth = document.querySelector(".navbar-right");
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;
const navbarTop = document.getElementById("navbar-top");
const navbarRight = document.getElementById("navbar-right");
const btnMail = document.querySelector(".btn-mail");
const footerRoot = document.querySelector(".footer-root");
const footerLink = document.querySelector("a.footer-link");
const faTimesRotated = document.querySelector(".fa-times-rotated");
const Body = document.body;

const lightMode = function () {
  body.classList.toggle("theme-light");
  navbarTop.classList.toggle("theme-light");
  navbarRight.classList.toggle("theme-light");
  footerRoot.classList.toggle("theme-light");
  footerLink.classList.toggle("theme-light");
  faTimesRotated.classList.toggle("theme-light");
  btnMail.classList.toggle("theme-light");
};

textLoad();
setInterval(textLoad, 12000);

const themeLight = document.querySelectorAll(".theme-light");
const portfolioElemSeparator = document.querySelectorAll(
  ".portfolio-elem-separator"
);
const secTextBefore = document.querySelector(".text.sec-text::before");
const portfolioElemOverlay = document.querySelectorAll(
  ".portfolio-elem-overlay.theme-light"
);
const navBar = document.querySelector(
  ".navbar-top.theme-light, .navbar-right.theme-light"
);
const changedBtn = document.querySelector(".fa-moon");
const closeModal = document.querySelector(".close-modal");

const applyLightTheme = function () {
  document.body.style.background = "var(--color-light-bg)";
  text.style.color = "var(--color-light-font)";
  themeLight.forEach((element) => {
    element.style.color = "var(--color-light-font)";
  });
  btnMail.style.background = "var(--color-dark-transparent)";
  btnMail.style.borderColor = "var(--color-light-accent)";

  // Check if portfolioElemOverlay and portfolioElemSeparator are not empty before iterating
  if (portfolioElemOverlay.length > 0) {
    portfolioElemOverlay.forEach((element) => {
      element.style.background = "rgba(0,0,0,0.4)";
    });
  }

  if (portfolioElemSeparator.length > 0) {
    portfolioElemSeparator.forEach((element) => {
      element.style.background = "var(--color-light-font)";
    });
  }

  // Check if modalContent is not empty before iterating
  if (modalContent.length > 0) {
    modalContent.forEach((element) => {
      element.style.backgroundColor = "var(--color-dark-transparent-low)";
    });
  }

  navBar.style.background = "var(--color-light-accent)";
  navBar.style.color = "var(--color-light-accent)";
  navRight.style.background = "var(--color-light-accent)";
};

const applyDarkTheme = function () {
  document.body.style.background = "var(--color-dark-bg)";
  text.style.color = "var(--color-dark-font)";
  themeLight.forEach((element) => {
    element.style.color = "";
  });
  btnMail.style.background = "var(--color-light-transparent)";
  btnMail.style.borderColor = "var(--color-dark-accent)";
  // Check if portfolioElemSeparator is not empty before iterating
  if (portfolioElemSeparator.length > 0) {
    portfolioElemSeparator.forEach((element) => {
      element.style.background = "var(--color-dark-font)";
    });
    // faPlus.style.color = "var(--color-dark-accent)";
  }

  // Check if portfolioElemOverlay is not empty before iterating
  if (portfolioElemOverlay.length > 0) {
    portfolioElemOverlay.forEach((element) => {
      element.style.background = "hsla(0,0%,100%,.4)";
    });
  }

  // Check if modalContent is not empty before iterating
  if (modalContent.length > 0) {
    modalContent.forEach((element) => {
      element.style.backgroundColor = "var(--color-light-transparent-low)";
    });
  }

  navBar.style.background = "var(--color-dark-accent)";
  navRight.style.background = "var(--color-dark-accent)";
  navBar.style.color = "var(--color-dark-accent)";
};

let isThemeActive = false;
moonBtn.addEventListener("click", function () {
  if (isThemeActive) {
    //applying dark theme property
    applyDarkTheme();
    changedBtn.classList.add("fa-moon");
    changedBtn.classList.remove("fa-sun");
    // faPlus.classList.toggle("fa-times");
    plusIcon.style.color = "var(--color-dark-accent)";
    isThemeActive = false;
  } else {
    //applying light theme property
    applyLightTheme();
    changedBtn.classList.add("fa-sun");
    changedBtn.classList.remove("fa-moon");
    plusIcon.style.color = "var(--color-light-accent)";
    isThemeActive = true;
  }
});
