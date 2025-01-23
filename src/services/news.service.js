import { newsApiKey, baseUrl } from "../config/config";

export function fetchDataNews(quant) {
  const data = fetch(
    `https://newsdata.io/api/1/news?apikey=${newsApiKey}&q=videogames&language=en,pt,es&category=entertainment&size=${quant}`
  ).then((response) => response.json());

  console.log(data)
  return data;
}

