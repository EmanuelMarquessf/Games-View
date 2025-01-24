import React, { useEffect, useState } from 'react'
import { fetchDataBase } from '../services/rawg.service'
import GameSection from '../components/GameSection.jsx'
import { useParams } from "react-router-dom";


function GamesByGenre() {
  const params = useParams();
  const genreId = params.genreSlug
  const [gamesData, setGamesData] = useState([])

  async function fetchData() {
    const data = await fetchDataBase("genre", genreId)
    setGamesData(data.results)
  }

  useEffect(() => {
    fetchData();
  },[genreId])

  useEffect(() => {
    // console.log(gamesData)
  },[gamesData])

  return (
    <GameSection title={genreId} quant={20} gamesData={gamesData}/>
  )
}

export default GamesByGenre