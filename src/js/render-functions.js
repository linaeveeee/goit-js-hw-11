import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('#gallery');
let lightbox = null;  

export function renderGallery(images) {
  const markup = images.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
    <a href="${largeImageURL}" class="gallery-item">
      <img src="${webformatURL}" alt="${tags}" />
      <div class="image-info">
        <p><b>Likes</b> ${likes}</p>
        <p><b>Views</b> ${views}</p>
        <p><b>Comments</b> ${comments}</p>
        <p><b>Downloads</b> ${downloads}</p>
      </div>
    </a>
  `).join('');
  
  gallery.innerHTML = markup;

  if (lightbox) {
    lightbox.refresh(); 
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}
