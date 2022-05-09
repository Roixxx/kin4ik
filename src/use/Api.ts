const entry = 'https://kinopoiskapiunofficial.tech/api/v2.2';

export default {
  movies: {
    top250: {
      url: `${entry}/films/top/`,
      title: 'Топ 250',
    },
    popular: {
      url: `${entry}/films/`,
      title: 'Популярыне фильмы',
      query: '?type=FILM',
    },
  },
};
