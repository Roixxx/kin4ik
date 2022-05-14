interface IMovie {
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
}

export { IMovie };
