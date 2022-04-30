export default function PaginationRender(current: any, total: any, device: string) {
  let center = [current - 2, current - 1, current, current + 1, current + 2];

  if (device === 'xs') {
    center = [current - 1, current, current + 1];
  }

  const filteredCenter = center.filter((p) => p > 1 && p < total);
  const includeThreeLeft = current === 5;
  const includeThreeRight = current === total - 4;
  const includeLeftDots = current > 5;
  const includeRightDots = current < total - 4;

  if (device !== 'xs') {
    if (includeThreeLeft) filteredCenter.unshift(2);
    if (includeThreeRight) filteredCenter.push(total - 1);

    if (includeLeftDots) filteredCenter.unshift('...');
    if (includeRightDots) filteredCenter.push('...');
  }

  return [1, ...filteredCenter, total];
}
