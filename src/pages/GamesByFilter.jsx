import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { fetchDataBase } from "../services/rawg.service";
import GameCard from '../components/gameCard/GameCard.jsx';


function GamesByFilter() {
  const params = useParams();
  const filterType = Object.keys(params);

  let filter;
  const [gamesData, setGamesData] = useState([]);
  const [title, setTitle] = useState('');
  const [released, setReleased] = useState(false);

  async function fetchData() {
    let data;

    if(filterType[0] == 'filter'){
      filter = params.filter
      switch (filter) {
        case 'releases':
          data = await fetchDataBase("releases");
          setReleased(true);
          setTitle('Releases Games')
          break;
        case 'released':
          data = await fetchDataBase("date30");
          setReleased(true);
          setTitle('Released Games')
          break;
        case 'popular':
          data = await fetchDataBase("popular");
          setTitle('Popular Games')
          break;
      }
    }
    else if(filterType[0] == 'genre'){
      filter = params.genre
      setTitle(`${filter} Games`)
      data = await fetchDataBase('byGenre', filter);
    }
    else if(filterType[0] == 'byTag'){
      filter = params.tag
      setTitle(`${filter} Games`)
      data = await fetchDataBase("byTag", filter);
    }

    setGamesData(data.results)
  }

  useEffect(() => {
    fetchData()
  },[gamesData])

  useEffect(() => {
    // console.log(filter)
  }, [filter])

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-darkColdBlue-60 font-roboto text-3xl font-semibold capitalize">{title}</h1>
      {gamesData && (
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-8">
          {gamesData.map(
            (game) =>
              game.background_image && (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.name}
                  backGround={game.background_image}
                  genres={game.genres}
                  platforms={game.parent_platforms}
                  stores={game.stores}
                  released={game.released}
                  releases={released}
                />
              )
          )}
        </div>
      )}
    </div>
  )
}

export default GamesByFilter