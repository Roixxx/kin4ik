interface MovieI {
  countries: [{ country: string }],
  genres: [{ genre: string }],
  rating: number,
  ratingKinopoisk: number,
  kinopoiskId: number,
  filmId: number,
  nameRu: string,
  nameEn: string,
  nameOriginal: string,
  posterUrlPreview: string,
  year: string,
  filmLength: string | number,
  coverUrl: string,
  description: string,
  slogan: string,
}

interface VideoI {
  name: string,
  site: string,
  url: string,
}

interface similarMovie {
  filmId: number,
  nameRu: string,
  nameEn: string,
  nameOriginal: string,
  posterUrl: string,
  posterUrlPreview: string,
  relationType: string
}

export { MovieI, VideoI, similarMovie };
