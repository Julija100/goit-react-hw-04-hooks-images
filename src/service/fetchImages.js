const BASE_URL = "https://pixabay.com/api";
const API_KEY = "22385863-ab509129ff5717a9471438652";

export const IMAGES_PER_PAGE = 12;

export function fetchImages (searchQuery, pageNumber) {
  return fetch(
    `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=${IMAGES_PER_PAGE}&key=${API_KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("Sorry..."));
  });
}

