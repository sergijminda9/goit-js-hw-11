import axios from 'axios';

const API_KEY = 'YOUR_PIXABAY_API_KEY'; // 🔑 Replace with your Pixabay API key
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
