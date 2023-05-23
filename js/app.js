let sectionNav = document.querySelectorAll("section");
let NavTag = document.getElementById("navbar_list");
let sectionNavLength = sectionNav.length;
let sectionNavPositions = [];
let prePosition = 0;
let currentPosition = 0;
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

function scrollToSection(sectionID) {
  window.scrollTo(0, sectionID);
}

// build the nav bar
sectionNav.forEach((element, index) => {
  let sectionName = element.getAttribute("data-nav");
  let toOffSection = element.offsetTop + 30;
  let liTag = document.createElement("li");
  liTag.setAttribute("class", "menu_link" + index);
  liTag.innerHTML = `<a onClick="scrollToSection(${toOffSection})">${sectionName}</a>`;
  NavTag.appendChild(liTag);
  //Smooth Scrolling
  liTag.addEventListener("click", function (e) {
    e.preventDefault();
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.addEventListener("scroll", () => {
  currentPosition = this.scrollY;
  // Section Positions
  sectionNavPositions = [];
  sectionNav.forEach((element) =>
    sectionNavPositions.push(element.getBoundingClientRect().top + 50)
  );

  // Adding and removing active sections
  let addIndex = sectionNavPositions.findIndex((element) => element > 0);
  for (let i = 0; i < sectionNavLength; i++) {
    if (addIndex === i) {
      document.querySelector(".menu_link" + addIndex).classList.add("active");
      document
        .querySelector(`#section${addIndex + 1}`)
        .classList.add("current-active-class");
    } else {
      document.querySelector(".menu_link" + i).classList.remove("active");
      document.querySelector(`#section${i + 1}`).removeAttribute("class");
    }
  }
});

//hambuger menu

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

//Get the button
let mybutton = document.getElementById("myBtn"); /*using Let instead of var */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function burgerSwitch(nav) {
  if (nav.className == "open") {
    nav.className = "close";
  } else {
    nav.className = "open";
  }
}
