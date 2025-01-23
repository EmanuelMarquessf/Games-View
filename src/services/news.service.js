import { newsApiKey, baseUrl } from "../config/config";

export function fetchDataNews() {
  const data = fetch(
    `https://newsapi.org/v2/everything?q=videogame&language=en&from=2025-01-01&pageSize=10&sortBy=publishedAt&totalResults=10&apiKey=${newsApiKey}`
  ).then((response) => response.json());

  console.log(data)
  return data;
}

