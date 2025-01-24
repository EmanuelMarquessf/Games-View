import { useEffect, useState } from "react";
import {
  fetchDataPopular,
  fetchData30Day,
  fetchNextReleases,
} from "../services/rawg.service";

import { fetchDataBase } from "../services/rawg.service"
import { fetchDataNews } from "../services/news.service.js";
import Head from "../components/Head";
import GameSection from "../components/GameSection.jsx";
import NewsMainSection from "../components/News/NewsMainSection.jsx";
import { RotateCcw } from "lucide-react";

function Home() {
  const [popularGamesData, setPopularGamesData] = useState([]);
  const [releasedGamesData, setReleasedGamesData] = useState([]);
  const [nextReleasesGamesData, setNextReleasesGamesData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");



  async function fetchAllData() {
    setLoading(true);
    setError("");
  
    try {
      const [popular, released, nextReleases] = await Promise.all([
        fetchDataBase("popular", []),
        fetchDataBase("date30", []),
        fetchDataBase("releases", []),
      ]);
  
      setPopularGamesData(popular?.results);
      setReleasedGamesData(released?.results);
      setNextReleasesGamesData(nextReleases?.results);

    } catch (err) {
      setError("Erro ao carregar os dados. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNewsData() {
    try {
      const data = await fetchDataNews(4);
      if (data.results) {
        setNewsData(data.results);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados das noticias:", error);
      setError(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    setError("");

    fetchNewsData(4);
    fetchAllData();

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-darkColdBlue-60 text-xl">Loading...</p>
      </div>
    );
  }
  return (
    <>
      <Head title="Home" description="description" />
      <div className="flex flex-col gap-20">
        <NewsMainSection newsData={newsData} error={error}>
          <button
            onClick={() => fetchNewsData(4)}
            className="rounded-full bg-darkColdBlue-400 p-2 text-darkColdBlue-60 cursor-pointer"
          >
            <RotateCcw color="white" width={60} height={60} />
          </button>
        </NewsMainSection>
        <GameSection
          title="Releases Games"
          filter="releases"
          quant={4}
          gamesData={nextReleasesGamesData}
          releases={true}         
        />
        <GameSection
          title="Released Games"
          filter="released"
          quant={4}
          gamesData={releasedGamesData}
          releases={true}          
        />
        <GameSection
          title="Popular Games"
          filter="popular"
          quant={4}
          gamesData={popularGamesData}
          releases={false}
          
        />
      </div>
    </>
  );
}

export default Home;
