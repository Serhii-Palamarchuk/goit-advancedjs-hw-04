import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.search.value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query!' });
    return;
  }

  loader.style.display = 'block';
  gallery.innerHTML = '';

  // В продакшн збірці це не потрібно, але для в цілях демонстрації додаємо паузу, щоб було видно лоадер
  await new Promise(resolve => setTimeout(resolve, 350));

  const data = await fetchImages(query);
  loader.style.display = 'none';

  if (data.hits.length === 0) {
    iziToast.warning({
      title: 'No Results',
      message: 'Sorry, no images found!',
      position: 'center',
    });
  } else {
    renderGallery(data.hits);
  }
});
