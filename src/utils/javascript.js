export function calcData(todayData) {
  const date = new Date(todayData);
  const startDate = new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000);

  return startDate.toLocaleDateString("en-CA");
}

export function calcDataReleases(todayData) {
  const date = new Date(todayData);

  const finalDate = new Date(
    date.getTime() + 30 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-CA");

  return finalDate;
}
