import { useEffect, useState } from "react";
import "./App.css";
import { fetchData, fetchDataSearch, fetchData30Day } from "./services/rawg.service";
import GameCard from "./components/gameCard/GameCard";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [gamesData, setGamesData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const [searchInput, setSearchInput] = useState('')

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

  function searchChange(event) {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  
    async function fetch() {
      const data = await fetchDataSearch(inputValue); // Use inputValue aqui
      setSearchData(data.results);
    }
  
    if (inputValue.length > 3) { // Use inputValue aqui também
      fetch();
    } else if(inputValue.length < 3){
      setSearchData([])
    }
  }

  return (
    <div className="flex flex-row">
      <Header />
      <div className="flex flex-col gap-20 my-10">
        <Search searchInput={searchInput} setSearchInput={setSearchInput} onChange={searchChange} searchData={searchData} setSearchData={setSearchData}/>
        {gamesData && (
          <div className="grid grid-cols-3 gap-8 ml-96 mr-36">
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
