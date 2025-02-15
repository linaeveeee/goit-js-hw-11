import axios from 'axios';

const API_KEY = '48830775-40ff68ea61f2bc47ba43ee541';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(searchText) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchText,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
      }
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching data from Pixabay API:', error);
      throw error;
    });
}
