import { apiKey, baseUrl } from "../config/config";

export function fetchData() {
  const data = fetch(
    `${baseUrl}games?key=${apiKey}&ordering=-rating&metacritic=80,100&exclude_additions=true&page_size=9`
  ).then((response) => response.json());
  return data;
}

export function baseFetchData(url) {
  const data = fetch(
    `${baseUrl}games?key=${apiKey}${url}`
  ).then((response) => response.json());
  return data;
}

export function fetchData30Day() {
  const currentDate = new Date();

  const startDate = currentDate.toLocaleDateString('en-CA');
  const finalDate = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-CA');

  const data = fetch(
    `${baseUrl}games?key=${apiKey}&dates=${startDate}.${finalDate}&ordering=-rating`
  ).then((response) => response.json());
  return data;
}

export function fetchDataSearch(textInput) {
  const data = fetch(
    `${baseUrl}games?key=${apiKey}&search=${textInput}&search_precise=false&page_size=5`
  ).then((response) => response.json());
  return data;
}

export function fetchGameData(id) {
  const data = fetch(
    `${baseUrl}games/${id}?key=${apiKey}`
  ).then((response) => response.json());
  return data;
}