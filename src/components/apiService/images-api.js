import axios from 'axios';

const API_KEY = 'PpeOd9C-FbcOv_onC0y1RkWzwnkcHV7bI7PmEPqsRiY';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  per_page: 15,
  orientation: 'landscape',
};

export const fetchImages = async (query, page) => {
  const res = await axios.get(`search/photos?page=${page}&query=${query}`);
  return res.data;
};
