import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { fetchGameData } from "../services/rawg.service";


function GamePage() {
  const [gameData, setGameData] = useState([])
  const params = useParams();
  const gameId = params.id;

  console.log(gameId)

  useEffect(() => {
    async function fetch() {
      const data = await fetchGameData(gameId);
      setGameData(data)
    }
    fetch();
  },[])

  useEffect(() => {
    console.log(gameData)
  },[gameData])

  return (
    <div>
      {gameData && (
        <img src={gameData.background_image} alt="" />
      )}
    </div>
  )
}

export default GamePage