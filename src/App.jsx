import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./services/rawg.service";
import GameCard from "./components/gameCard/GameCard";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [gamesData, setGamesData] = useState([]);

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
    <div className="flex flex-row">
      <Header />
      <div className="flex flex-col gap-20 my-10">
        <Search />

        {gamesData && (
          <div className="grid grid-cols-4 gap-5 ml-96 mr-36">
            {gamesData.map(
              (game) =>
                game.background_image && (
                  <GameCard
                    key={game.id}
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

export default App;
