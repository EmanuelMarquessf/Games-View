import { apiKey, baseUrl } from "../config/config";

export function fetchDataPopular() {
  const data = fetch(
    `${baseUrl}games?key=${apiKey}&ordering=-rating&metacritic=80,100&exclude_additions=true`
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
  
  const startDate = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-CA');
  const finalDate = currentDate.toLocaleDateString('en-CA');

  const data = fetch(
    `${baseUrl}games?key=${apiKey}&dates=${startDate},${finalDate}&ordering=-rating`
  ).then((response) => response.json());

  return data;
}

export function fetchNextReleases() {
  const currentDate = new Date();

  const startDate = currentDate.toLocaleDateString('en-CA');
  const finalDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-CA');

  const data = fetch(
    `${baseUrl}games?key=${apiKey}&dates=${startDate},${finalDate}`
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

export function fetchGameScreenshots(id) {
  const data = fetch(
    `${baseUrl}games/${id}/screenshots?key=${apiKey}`
  ).then((response) => response.json());
  return data;
}

export function fetchGameStore(id) {
  const data = fetch(
    `${baseUrl}games/${id}/stores?key=${apiKey}`
  ).then((response) => response.json());
  return data;
}

export function fetchSameSerieGames(id){
  const data = fetch(
    `${baseUrl}games/${id}/game-series?key=${apiKey}`
  ).then((response) => response.json());
  return data;
}


export function fetchGenres(){
  const data = fetch(
    `${baseUrl}genres?key=${apiKey}`
  ).then((response) => response.json());
  return data;
}

export function fetchGamesByGenre(genre){
  const data = fetch(
    `${baseUrl}games?key=${apiKey}&genres=${genre}`
  ).then((response) => response.json());
  return data;
}

export function fetchGamesByTag({tag}){
  const data = fetch(
    `${baseUrl}games?key=${apiKey}&tags=${tag}`
  ).then((response) => response.json());
  return data;
}