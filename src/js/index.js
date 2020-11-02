// USED PROCEDURAL PROGRAMMING

import { phoneScreen, request, UIComponents } from "./data.js";
import { FetchData } from "./FetchData.js";
import { SearchFetchData } from "./SearchFetchData.js";
import { plusSlides } from "./banner.js";

//BANNER < > WHEN PRESSED
document.querySelector(UIComponents.prev).addEventListener("click", () => {
  plusSlides(-1);
});

document.querySelector(UIComponents.next).addEventListener("click", () => {
  plusSlides(1);
});

//SEARCH MOVIE EVENT LISTENER
document
  .querySelector(UIComponents.search)
  .addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      let searchData = document.querySelector(UIComponents.search).value;
      let newURL = request.fetchSearchMovie + searchData;
      getSearchResults(newURL);
      document.querySelector(UIComponents.search).value = "";
    }
  });

// BTN HAMBURGER ON PRESSED FOR 480PX DEVICES
document.querySelector(UIComponents.submenu_navigation).style.display = "none";
document
  .querySelector(UIComponents.btn_hamburger)
  .addEventListener("click", (e) => {
    let submenu = document.querySelector(UIComponents.submenu_navigation);
    if (phoneScreen.matches) {
      if (submenu.style.display === "none") {
        submenu.style.display = "block";
      } else {
        submenu.style.display = "none";
      }
    }
  });

// GET TOP RATED MOVIES
async function getTopRated() {
  let containerSection = document.querySelector(UIComponents.TopRated);
  FetchData(containerSection, request.fetchTopRated);
}

// GET POPULAT MOVIES
async function getPopularMovie() {
  let containerSection = document.querySelector(UIComponents.PopularMovie);
  FetchData(containerSection, request.fetchPopularMovie);
}

//GET UPCOMING MOVIES
async function getUpcomingMovie() {
  let containerSection = document.querySelector(UIComponents.UpcomingMovie);
  FetchData(containerSection, request.fetchUpcomingMovie);
}

// GET USER SEARCH REALTED MOVIES
async function getSearchResults(newURL) {
  let containerSection = document.querySelector(UIComponents.container);
  SearchFetchData(containerSection, newURL);
}

//LOAD AT START
getTopRated();
getPopularMovie();
getUpcomingMovie();
console.log("Server running ...");
