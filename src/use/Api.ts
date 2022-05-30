const entry = 'https://kinopoiskapiunofficial.tech/api/v1';
const entryV2 = 'https://kinopoiskapiunofficial.tech/api/v2.2';

interface apiItemI {
  url: string,
  title?: string,
  query?: string,
}

interface apiI {
  [someKey: string]: {
    [someKey: string]: apiItemI
  }
}

const Api: apiI = {

  movies: {
    top250: {
      url: `${entryV2}/films/top/`,
      title: 'Топ 250',
    },
    popular: {
      url: `${entryV2}/films/`,
      title: 'Популярыне фильмы',
      query: 'type=FILM',
    },
    singleMovie: {
      url: `${entryV2}/films/`,
    },
  },

  singleMovie: {
    main: {
      url: `${entryV2}/films/`,
    },

    staff: {
      url: `${entry}/staff/`,
    },
  },
};

export { Api, apiItemI };
