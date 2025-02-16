import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('#search-input'),
  loader: document.querySelector('#loader'),
  gallery: document.querySelector('#gallery'),
};

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function handleFormSubmit(e) {
  e.preventDefault();
  const searchText = refs.input.value.trim();

  if (!searchText) {
    iziToast.error({
      title: 'Error',
      message: 'Oops! You forgot to enter a search term.',
      position: 'topRight',
      timeout: 2000,
    });
    return;
  }

  showLoader();

  refs.gallery.innerHTML = '';

  fetchImages(searchText)
    .then(images => {
      hideLoader();

      if (images.length === 0) {
        iziToast.info({
          title: 'Oops!',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 3000,
        });
      } else {
        renderGallery(images);
      }
    })
    .catch(() => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong! Please try again later.',
        position: 'topRight',
        timeout: 3000,
      });
    });
}

refs.form.addEventListener('submit', handleFormSubmit);
