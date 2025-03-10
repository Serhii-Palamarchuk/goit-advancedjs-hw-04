import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('#load-more');

let query = '';
let page = 1;
const perPage = 15;

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = event.target.search.value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query!' });
    return;
  }

  loader.style.display = 'block';
  gallery.innerHTML = '';
  loadMoreBtn.style.display = 'none';
  page = 1;

  const data = await fetchImages(query, page, perPage);
  loader.style.display = 'none';

  if (data.hits.length === 0) {
    iziToast.warning({
      title: 'No Results',
      message: 'No images found!',
      position: 'center',
    });
  } else {
    renderGallery(data.hits);
    loadMoreBtn.style.display = 'block';
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  loader.style.display = 'block';

  const data = await fetchImages(query, page, perPage);
  loader.style.display = 'none';

  if (data.hits.length === 0 || page * perPage >= data.totalHits) {
    loadMoreBtn.style.display = 'none';
    iziToast.info({
      title: 'End',
      message: `We're sorry, but you've reached the end of search results.`,
    });
  } else {
    renderGallery(data.hits, true);
    window.scrollBy({
      top:
        document.querySelector('.gallery-item').getBoundingClientRect().height *
        2,
      behavior: 'smooth',
    });
  }
});
