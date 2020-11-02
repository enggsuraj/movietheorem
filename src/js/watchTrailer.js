import { APIKEY, request } from "./data.js";

// GET ID OF MOVIE CARD PRESSED
export async function watchTrailer(id) {
  let URL =
    request.fetchTrailer + `${id}?api_key=${APIKEY}&append_to_response=videos`;
  let response = await fetch(URL);
  let data = await response.json();
  let key = data.videos.results[0].key;

  // GENERATE YOUTUBE LINK
  let trailer_link = `https://www.youtube.com/watch?v=${key}`;
  console.log("Trailer Link: " + trailer_link);
  window.open(trailer_link);
}
