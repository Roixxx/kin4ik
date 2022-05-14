import axios from 'axios';
import store from '@/store';
// 17bc2778-ec19-4c92-8a7b-e11508d408a9
const config = {
  headers: {
    'X-API-KEY': '408fe1bc-9074-4b3a-ac4e-1229dad016ea',
    'Content-Type': 'application/json',
  },
};

export default async function UseFetchData(url: string) {
  store.commit('toggleLoading');
  const response = await axios.get(url, config);
  store.commit('toggleLoading');
  console.log(response.data);

  return response.data;
}
