import { useEffect, useState } from "react";
import { fetchDataPopular, fetchData30Day, fetchNextReleases} from "../services/rawg.service";
import { fetchDataNews } from "../services/news.service.js";
import Head from "../components/Head";
import GameSection from "../components/GameSection.jsx";
import NewsMainSection from "../components/NewsMainSection.jsx";

function Home() {
  const [popularGamesData, setPopularGamesData] = useState([]);
  const [releasedGamesData, setReleasedGamesData] = useState([]);
  const [nextReleasesGamesData, setNextReleasesGamesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newsData, setNewsData] = useState([]);


  useEffect(() => {
    setLoading(true)
    async function fetchGameData() {
      try {
        const [releasesResponse, releasedResponse, popularResponse ] = await Promise.all([fetchNextReleases(), fetchData30Day(), fetchDataPopular()]);
  
        setNextReleasesGamesData(releasesResponse.results);
        setReleasedGamesData(releasedResponse.results);
        setPopularGamesData(popularResponse.results);

      } catch (error) {
        console.error("Erro ao buscar os dados dos jogos:", error);
      }
    }
    async function fetchNewsData() {
      try {
        const data = await fetchDataNews()

        setNewsData(data.articles)
  
      } catch (error) {
        console.error("Erro ao buscar os dados dos jogos:", error);
      }
    }

    fetchGameData();
    fetchNewsData();

    setTimeout(() => {
      setLoading(false)

    }, 1000);
  }, []);


  
  if(loading) return null
  return (
    <>
      <Head title="Home" description="description"/>
      <div className="flex flex-col gap-20">
        <NewsMainSection newsData={newsData} />
        <GameSection title="Releases Games" filter="releases" quant={4} gamesData={nextReleasesGamesData} releases={true}/>
        <GameSection title="Released Games" filter="released" quant={4} gamesData={releasedGamesData} releases={true}/>
        <GameSection title="Popular Games" filter="popular" quant={4} gamesData={popularGamesData} releases={false}/>
      </div>
    </>
  );
}

export default Home;
