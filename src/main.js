import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Empty field',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Not found',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 5000,
        });
        return;
      }

      createGallery(data.hits);

      iziToast.success({
        title: 'Done',
        message: `Found ${data.totalHits.toLocaleString()} images. Showing ${data.hits.length}.`,
        position: 'topRight',
        timeout: 3000,
      });
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Request error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        timeout: 5000,
      });
    })
    .finally(() => {
      hideLoader();
    });
}
