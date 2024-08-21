import { apiKey, baseUrl } from "../config/config";

export function fetchData() {
  const data = fetch(
    `${baseUrl}games?key=${apiKey}`
  ).then((response) => response.json());
  return data;
}
