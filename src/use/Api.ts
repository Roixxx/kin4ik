const entry = 'https://kinopoiskapiunofficial.tech/api/v2.2';

const Api = {
  movies: {
    top250: {
      url: `${entry}/films/top/`,
      title: 'Топ 250',
    },
    popular: {
      url: `${entry}/films/`,
      title: 'Популярыне фильмы',
      query: 'type=FILM',
    },
    singleMovie: {
      url: `${entry}/films/`,
    },
  },
};

interface categoryI {
  url: string,
  title?: string,
  query?: string,
}

export { Api, categoryI };
