import React, { useEffect, useState } from 'react'
import Head from '../components/Head';

import Carousel from '../components/Carousel';
import { useParams } from 'react-router-dom';

import { fetchGameData, fetchGameScreenshots } from "../services/rawg.service";


function GamePage() {
  const [gameData, setGameData] = useState([])
  const params = useParams();
  const gameId = params.id;

  
  async function fetchData() {
    const data = await fetchGameData(gameId);
    const dataScreens = await fetchGameScreenshots(gameId)

    const gameObject = {...data, screenshots: dataScreens.results}
    setGameData(gameObject)
  }

  async function fetchScreens() {
    const data = await fetchGameScreenshots(gameId)

    const gameObject = {...gameData, screenshots: data}
    setGameData({gameObject})
  }


  useEffect(() => {
    fetchData();
    fetchScreens();
  },[gameId])

  // useEffect(() => {
  //   console.log(gameData)
  // },[gameData])

  return (
    <div className=''>
      {gameData && (
        <div className='flex gap-8 justify-between'>
          <Head title={gameId} description={gameId}/>
          <div className='bg-darkColdBlue-500 p-4 flex-1'>
            <div>
              <h1 className='text-lightColdBlue-100 font-poppins text-3xl font-semibold'>{gameData.name}</h1>
              <span>{gameData.rating}</span>
            </div>
            {gameData.screenshots && (<Carousel screenshots={gameData.screenshots}/>)}
            <p>{gameData.description_raw}</p>
          </div>
            {/* <div className='w-[350px] h-[450px] bg-cover bg-center' style={{backgroundImage: `url(${gameData.background_image})`}}></div> */}
          <div>
            <img className='w-[400px]' src={gameData.background_image} alt="" />

          </div>
        </div>
      )}
    </div>
  )
}

export default GamePage