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
    const url = baseFetch(type, obj);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching games: ${type}`, error);
    throw error;
  }
}
