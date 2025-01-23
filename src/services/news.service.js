import { newsApiKey, baseUrl } from "../config/config";

export function fetchDataNews() {
  const data = fetch(
    `https://newsdata.io/api/1/news?apikey=${newsApiKey}&q=videogames&language=en&category=entertainment&size=4`
  ).then((response) => response.json());

  console.log(data)
  return data;
}

