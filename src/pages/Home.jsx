import { useEffect, useState } from "react";
import { fetchData, fetchDataSearch, fetchData30Day } from "../services/rawg.service";
import GameCard from "../components/gameCard/GameCard";

function Home() {
  const [gamesData, setGamesData] = useState([]);

  fetchData30Day();

  useEffect(() => {
    async function fetch() {
      const data = await fetchData();
      setGamesData(data.results);
    }
    fetch();
  }, []);

  useEffect(() => {
    console.log(gamesData);
  }, [gamesData]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-20 my-10">
        {gamesData && (
          <div className="grid grid-cols-3 gap-8 mx-40 my-20 ">
            {gamesData.map(
              (game) =>
                game.background_image && (
                  <GameCard
                    key={game.id}
                    gId={game.id}
                    gName={game.name}
                    gBackGround={game.background_image}
                    gGenres={game.genres}
                    gPlatforms={game.parent_platforms}
                    gStores={game.stores}
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
