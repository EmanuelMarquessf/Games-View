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
    <div className="flex flex-col">
      <Header> 
        <Search searchInput={searchInput} setSearchInput={setSearchInput} onChange={searchChange} searchData={searchData} setSearchData={setSearchData}/>
      </Header>
      <div className="flex flex-col gap-20 my-10">
        {gamesData && (
          <div className="grid grid-cols-3 gap-8 mx-40 my-20 ">
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
