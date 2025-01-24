import React, { useEffect, useState } from 'react'
import { fetchDataBase } from '../services/rawg.service'
import GameSection from '../components/GameSection.jsx'
import { useParams } from "react-router-dom";


function GamesByTag() {
  const params = useParams();
  const tagId = params.tagId
  const [gamesData, setGamesData] = useState([])

  async function fetchData() {
    const data = await fetchDataBase("tag", {tagId})
    setGamesData(data.results)
  }

  useEffect(() => {
    fetchData();
  },[tagId])

  useEffect(() => {
    // console.log(gamesData)
  },[gamesData])

  return (
    <GameSection title={tagId} quant={20} gamesData={gamesData}/>
  )
}

export default GamesByTag