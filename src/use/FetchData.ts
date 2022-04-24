import axios from 'axios';

const config = {
  headers: {
    'X-API-KEY': '17bc2778-ec19-4c92-8a7b-e11508d408a9',
    'Content-Type': 'application/json',
  },
};

export default function FetchData(url: string) {
  return axios.get(url, config)
    .then((res) => {
      console.log('Data fetched: ', res.data);
      return res.data;
    });
}
