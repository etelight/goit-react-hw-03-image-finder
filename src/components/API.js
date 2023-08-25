import axios from 'axios';
import { notifyDataError } from './Notify/Notify';

const BASIC_URL = 'https://pixabay.com/api/';
const API_KEY = '38315797-becda47052aa6d2c600a493b9';

export async function fetchImages({ correctQuery, page }) {
  const params = new URLSearchParams({
    key: `${API_KEY}`,
    q: `${correctQuery}`,
    image_type: 'photo',
    orientation: 'horizontal',
    page: `${page}`,
    per_page: 12,
  });
  try {
    const response = await axios.get(`${BASIC_URL}?${params}`);

    return response.data.hits;
  } catch (error) {
    notifyDataError(error);

    return [];
  }
}
