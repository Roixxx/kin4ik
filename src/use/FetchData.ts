import axios from 'axios';
import store from '@/store';

const config = {
  headers: {
    'X-API-KEY': '17bc2778-ec19-4c92-8a7b-e11508d408a9',
    'Content-Type': 'application/json',
  },
};

export default async function UseFetchData(url: string) {
  store.commit('toggleLoading');
  const response = await axios.get(url, config);
  store.commit('toggleLoading');

  return response.data;
}
