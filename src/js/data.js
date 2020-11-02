const APIKEY = process.env.APIKEY;
let phoneScreen = window.matchMedia("(max-width: 480px)");

// REQUEST
const request = {
  baseurl: "https://api.themoviedb.org/3/movie",
  imgpath: "https://image.tmdb.org/t/p/original",
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
  fetchPopularMovie: `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US`,
  fetchUpcomingMovie: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US`,
  fetchSearchMovie: `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=`,
  fetchTrailer: "https://api.themoviedb.org/3/movie/",
};

// SECTION COMPONENT TO ADD MOVIE
const UIComponents = {
  TopRated: ".TopRated",
  PopularMovie: ".PopularMovie",
  UpcomingMovie: ".UpcomingMovie",

  SectionMovie: "container__section-movie",
  SearchContainer: "SearchContainer",

  container: ".container",
  prev: ".prev",
  next: ".next",
  submenu_navigation: ".submenu-container-with-navigation",
  btn_hamburger: ".btn-hamburger",

  search: "#search",
};

export { APIKEY, phoneScreen, request, UIComponents };
