export default function useFilmLength(minutes: number) {
  if (minutes < 60) return `${minutes} мин`;

  const length = (minutes / 60).toFixed(2).toString().split('.');
  const hours = length[0];
  const min = +length[1] < 60 ? length[1] : (+length[1] * 0.01 * 60).toFixed(0);

  return `${hours} ч ${min} мин`;
}
