import { request, UIComponents } from "./data.js";
import { truncate } from "./truncate.js";
import { watchTrailer } from "./watchTrailer.js";

// FETCH FROM API
export async function SearchFetchData(containerSection, URL) {
  containerSection.innerHTML = "";
  let SearchContainer = document.createElement("div");
  SearchContainer.classList.add(UIComponents.SearchContainer);
  let response = await fetch(URL);
  let data = await response.json();

  //SCAN EACH ELEMENT
  data.results.forEach((element) => {
    let movieCard = document.createElement("div");
    movieCard.classList.add(UIComponents.SectionMovie);
    if (element.poster_path != null) {
      movieCard.innerHTML = `
      <img class="image" src="${request.imgpath + element.poster_path}">
      <div class="content">
          <h3 class="content__title">${element.original_title}</h3>
          <h5 class="content__description">${truncate(element.overview)}</h5>
          <div class="content__box">
              <div class="content__box-icon">
                  <a>
                      <h5 class="content__box-icon-trailer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                          <p>WATCH MOVIE</p>
                      </h5>
                  </a> 
              </div>
              <div class="content__box-icon">
                  <a>
                      <h5 class="content__box-icon-wishlist">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          <p>ADD TO WISHLIST</p>
                      </h5>
                  </a> 
              </div>
          </div>
  
      </div>
      `;

      // EVENT HANDLER FOR EACH MOVIE TRAILER
      movieCard.addEventListener("click", (e) => {
        if (
          e.target.parentNode.className.includes("content__box-icon-trailer")
        ) {
          watchTrailer(element.id);
        }
      });
      SearchContainer.appendChild(movieCard);
      containerSection.appendChild(SearchContainer);
    }
  });
}
