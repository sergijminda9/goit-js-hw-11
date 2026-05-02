import axios from 'axios';

// 🔑 Встав свій ключ з https://pixabay.com/api/docs/
const API_KEY = '48899604-37cbed17c7cf8a35a7e9d39d8';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
      },
    })
    .then(response => response.data);
}
