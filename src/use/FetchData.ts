import axios from 'axios';
import store from '@/store';
// 17bc2778-ec19-4c92-8a7b-e11508d408a9
// 408fe1bc-9074-4b3a-ac4e-1229dad016ea
const config = {
  headers: {
    'X-API-KEY': '17bc2778-ec19-4c92-8a7b-e11508d408a9',
    'Content-Type': 'application/json',
  },
};

export default async function UseFetchData(url: string, settings?: {loading: boolean}) {
  if (settings?.loading) store.commit('toggleLoading');
  const response = await axios.get(url, config);
  if (settings?.loading) store.commit('toggleLoading');

  return response.data;
}
