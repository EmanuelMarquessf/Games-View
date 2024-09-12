import { useEffect, useState } from "react";
import { fetchData, fetchData30Day, fetchNextReleases} from "../services/rawg.service";
import Head from "../components/Head";
import GameSection from "../components/gameSection";

function Home() {
  const [popularGamesData, setPopularGamesData] = useState([]);
  const [releasedGamesData, setReleasedGamesData] = useState([]);
  const [nextReleasesGamesData, setNextReleasesGamesData] = useState([]);

  useEffect(() => {
    async function fetchGameData() {
      try {
        const [releasesResponse, releasedResponse, popularResponse ] = await Promise.all([fetchNextReleases(), fetchData30Day(), fetchData()]);
  
        setNextReleasesGamesData(releasesResponse.results);
        setReleasedGamesData(releasedResponse.results);
        setPopularGamesData(popularResponse.results);

      } catch (error) {
        console.error("Erro ao buscar os dados dos jogos:", error);
      }
    }
    fetchGameData();
  }, []);

  return (
    <>
      <Head title="Home" description="description"/>
      <div className="flex flex-col gap-20">
        <GameSection title="Releases Games" quant={5} gamesData={nextReleasesGamesData} releases={true}/>
        <GameSection title="Popular Games" quant={5} gamesData={popularGamesData} releases={false}/>
        <GameSection title="Released Games" quant={5} gamesData={releasedGamesData} releases={false}/>
      </div>
    </>
  );
}

export default Home;
