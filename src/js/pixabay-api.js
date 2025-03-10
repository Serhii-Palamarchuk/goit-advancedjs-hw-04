import axios from 'axios';

const API_KEY = '49211573-98fed09fb52bd65ccaa252580';

export async function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return { hits: [] };
  }
}
