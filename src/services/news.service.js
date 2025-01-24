import { newsApiKey, baseUrl } from "../config/config";

export async function fetchDataNews(quant) {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${newsApiKey}&q=videogame OR games OR nintendo OR playstation OR xbox NOT esporte&language=en,pt,es&category=entertainment&size=${quant}`
    )
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching news:", error);
    throw error;
  }
}
