import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.getElementById('gallery');
const loaderEl = document.getElementById('loader');

// Create SimpleLightbox instance
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Creates gallery markup from images array and appends to gallery container.
 * Refreshes SimpleLightbox after adding new elements.
 * @param {Array} images - Array of image objects from Pixabay API
 */
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery__item">
          <a class="gallery__link" href="${largeImageURL}">
            <img
              class="gallery__img"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"
            />
          </a>
          <div class="gallery__info">
            <div class="gallery__stat">
              <span class="gallery__stat-label">Likes</span>
              <span class="gallery__stat-value">${likes.toLocaleString()}</span>
            </div>
            <div class="gallery__stat">
              <span class="gallery__stat-label">Views</span>
              <span class="gallery__stat-value">${views.toLocaleString()}</span>
            </div>
            <div class="gallery__stat">
              <span class="gallery__stat-label">Comments</span>
              <span class="gallery__stat-value">${comments.toLocaleString()}</span>
            </div>
            <div class="gallery__stat">
              <span class="gallery__stat-label">Downloads</span>
              <span class="gallery__stat-value">${downloads.toLocaleString()}</span>
            </div>
          </div>
        </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

/**
 * Clears all content from the gallery container.
 */
export function clearGallery() {
  galleryEl.innerHTML = '';
}

/**
 * Shows the loading indicator.
 */
export function showLoader() {
  loaderEl.classList.add('is-visible');
}

/**
 * Hides the loading indicator.
 */
export function hideLoader() {
  loaderEl.classList.remove('is-visible');
}
