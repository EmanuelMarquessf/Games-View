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

  useEffect(() => {
    console.log(gameData)
  },[gameData])

  return (
    <div className=''>
      {gameData && (
        <div className='flex flex-col gap-8'>
          <div className='flex gap-8 justify-between'>
            <Head title={gameId} description={gameId}/>
            <div className='bg-darkColdBlue-500 p-4 flex-1 rounded-sm flex flex-col gap-8'>
              <div className='p-2'>
                <h1 className='text-lightColdBlue-100 font-poppins text-3xl font-semibold'>{gameData.name}</h1>
                {/* <span>{gameData.rating}</span> */}
              </div>
              {gameData.screenshots && (<Carousel screenshots={gameData.screenshots}/>)}
            </div>

              {/* <div className='w-[350px] h-[450px] bg-cover bg-center' style={{backgroundImage: `url(${gameData.background_image})`}}></div> */}
            <div className='bg-darkColdBlue-500 rounded-md'>
              <img className='w-96 rounded-md' src={gameData.background_image} alt="" />

            </div>
          </div>
          <div className='flex flex-col gap-2 bg-darkColdBlue-500 w-full p-4 rounded-md font-roboto'>
            <h2 className='text-lightColdBlue-100 text-xl font-semibold font-poppins'>Description</h2>
            <p className='text-[#cccccc]'>{gameData.description_raw}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default GamePage