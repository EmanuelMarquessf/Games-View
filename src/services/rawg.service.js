import { apiKey, baseUrl } from "../config/config";
import { calcData, calcDataReleases } from "../utils/javascript.js"

function baseFetch(fetchType, info) {
  const today = new Date();
  let url = '';

  switch (fetchType) {
    case 'popular':
      url = `${baseUrl}games?key=${apiKey}&ordering=-rating&metacritic=80,100&exclude_additions=true`;
      break;
    case 'date30':
      url = `${baseUrl}games?key=${apiKey}&dates=${calcData(today)},${today.toLocaleDateString("en-CA")}&ordering=-rating`;
      break;
    case 'releases':
      url = `${baseUrl}games?key=${apiKey}&dates=${today.toLocaleDateString("en-CA")},${calcDataReleases(today.toLocaleDateString("en-CA"))}`;
      break;
    case 'search':
      url = `${baseUrl}games?key=${apiKey}&search=${info}&search_precise=false&page_size=5`;
      break;
    case 'game':
      url = `${baseUrl}games/${info}?key=${apiKey}`;
      break;
    case 'screenshot':
      url = `${baseUrl}games/${info}/screenshots?key=${apiKey}`;
      break;
    case 'store':
      url = `${baseUrl}games/${info}/stores?key=${apiKey}`;
      break;
    case 'sameSerie':
      url = `${baseUrl}games/${info}/game-series?key=${apiKey}`;
      break;
    case 'byGenre':
      url = `${baseUrl}games?key=${apiKey}&genres=${info}`;
      break;
    case 'byTag':
      url = `${baseUrl}games?key=${apiKey}&tags=${info}`;
      break;
    case 'genres':
      url = `${baseUrl}genres?key=${apiKey}`;
      break;
    default:
      console.error(`Tipo de fetch "${fetchType}" não suportado.`);
  }

  return url;
}



export async function fetchDataBase(type, obj) {
  try {
    const url = baseFetch(type, obj); // Constrói a URL
    const response = await fetch(url); // Faz a requisição

    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json(); // Processa a resposta como JSON
    return data; // Retorna os dados

  } catch (error) {
    console.error(`Error fetching games: ${type}`, error);
    throw error; // Repassa o erro para ser tratado externamente, se necessário
  }
}

export function fetchDataPopular() {
  const data = fetch(
    `${baseUrl}games?key=${apiKey}&ordering=-rating&metacritic=80,100&exclude_additions=true`
  ).then((response) => response.json());

  const currentDate = new Date();
  currentDate = currentDate.toLocaleDateString("en-CA");
  const finalData = calcData(currentDate);
  console.log(finalData)

  return data;
}

export function baseFetchData(url) {
  const data = fetch(`${baseUrl}games?key=${apiKey}${url}`).then((response) =>
    response.json()
  );
  return data;
}

export function fetchData30Day() {
  const currentDate = new Date();

  const startDate = new Date(
    currentDate.getTime() - 30 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-CA");
  const finalDate = currentDate.toLocaleDateString("en-CA");

  const data = fetch(
    `${baseUrl}games?key=${apiKey}&dates=${startDate},${finalDate}&ordering=-rating`
  ).then((response) => response.json());

  return data;
}

export function fetchNextReleases() {
  const currentDate = new Date();

  const startDate = currentDate.toLocaleDateString("en-CA");
  const finalDate = new Date(
    currentDate.getTime() + 30 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-CA");

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
  const data = fetch(`${baseUrl}games/${id}?key=${apiKey}`).then((response) =>
    response.json()
  );
  return data;
}

export function fetchGameScreenshots(id) {
  const data = fetch(`${baseUrl}games/${id}/screenshots?key=${apiKey}`).then(
    (response) => response.json()
  );
  return data;
}

export function fetchGameStore(id) {
  const data = fetch(`${baseUrl}games/${id}/stores?key=${apiKey}`).then(
    (response) => response.json()
  );
  return data;
}

export function fetchSameSerieGames(id) {
  const data = fetch(`${baseUrl}games/${id}/game-series?key=${apiKey}`).then(
    (response) => response.json()
  );
  return data;
}

export function fetchGenres() {
  const data = fetch(`${baseUrl}genres?key=${apiKey}`).then((response) =>
    response.json()
  );
  return data;
}

export function fetchGamesByGenre(genre) {
  const data = fetch(`${baseUrl}games?key=${apiKey}&genres=${genre}`).then(
    (response) => response.json()
  );
  return data;
}

export function fetchGamesByTag({ tag }) {
  const data = fetch(`${baseUrl}games?key=${apiKey}&tags=${tag}`).then(
    (response) => response.json()
  );
  return data;
}
