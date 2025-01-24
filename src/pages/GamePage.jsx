import React, { useEffect, useState } from "react";
import Head from "../components/Head";

import Carousel from "../components/GamePage/Carousel.jsx";
import GameInfo from "../components/GamePage/GameInfo.jsx";
import GenreCard from "../components/GamePage/GenreCard.jsx";
import Tag from "../components/GamePage/Tag.jsx";
import StoreIcon from "../components/GamePage/StoreIcon.jsx";
import SiteCard from "../components/GamePage/SiteCard.jsx";
import GameSectionCarousel from "../components/GamePage/GameSectionCarousel.jsx";
import { useParams } from "react-router-dom";

import { fetchDataBase } from "../services/rawg.service";

function GamePage() {
  const [gameData, setGameData] = useState([]);
  const [similarGamesData] = useState([]);
  const params = useParams();
  const gameId = params.id;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  async function fetchData() {
    setError(false);

    const data = await fetchDataBase("game", gameId);
    const dataScreens = await fetchDataBase("screenshot", gameId);
    const dataStores = await fetchDataBase("store", gameId);
    const dataSameSerie = await fetchDataBase("sameSerie", gameId);

    const gameObject = {
      ...data,
      screenshots: dataScreens.results,
      storeData: dataStores.results,
      sameSerie: dataSameSerie.results,
    };
    setGameData(gameObject);
  }

  useEffect(() => {
    try {
      setLoading(true);
      fetchData();
    } catch (error) {
      setError(true);
      throw("Fetch error: ", error);
    }
    finally{
      setLoading(false);
    }
    
  }, [gameId]);

  if (error) return (<h1>API Error</h1>);
  return (
    <div className="">
      {gameData && (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col  lg:flex-row gap-8 justify-between">
            <div className="order-2 lg:order-1 bg-darkColdBlue-500 p-4 flex-1 rounded-md flex flex-col gap-8 w-full">
              <div className="hidden lg:block p-2">
                <h1 className="text-lightColdBlue-100 font-poppins text-3xl font-semibold">
                  {gameData.name}
                </h1>
              </div>
              {gameData.screenshots && (
                <Carousel
                  loading={loading}
                  setLoading={setLoading}
                  screenshots={gameData.screenshots}
                />
              )}
            </div>

            
            <div className="order-1 lg:order-2 flex flex-col gap-4 bg-darkColdBlue-500 w-full lg:w-[400px] min-w-[300px] md:min-w-[400px] h-full max-h-[750px] rounded-md overflow-x-hidden overflow-y-auto">
              <img
                className="h-80 md:h-96 lg:h-52 xl:h-96 rounded-t-md object-cover  object-center"
                src={gameData.background_image}
                alt="Game Background"
              />
              <div className="p-2">
                <GameInfo gameData={gameData}></GameInfo>
              </div>
              {gameData.website != "" || gameData.reddit_url != "" ? (
                <div className="grid grid-cols-2 gap-2 items-center  p-2">
                  <SiteCard
                    url={gameData.website}
                    text="Official Website"
                    slug="official"
                  ></SiteCard>
                  <SiteCard
                    url={gameData.reddit_url}
                    text="Reddit"
                    slug="reddit"
                  ></SiteCard>
                </div>
              ) : null}
              <div className="flex flex-col gap-2 p-2">
                <h3 className="uppercase text-lightColdBlue-100 font-semibold font-poppins">
                  Category/Genre
                </h3>
                <div className="w-full flex flex-row gap-2 flex-wrap ">
                  {gameData.genres?.map((genre) => (
                    <GenreCard genre={genre} key={genre.id}></GenreCard>
                  ))}
                </div>
              </div>
              {gameData.stores?.length > 0 && (
                <div className="flex flex-col gap-2 p-2">
                  <h3 className="uppercase text-lightColdBlue-100 font-semibold font-poppins">
                    Stores
                  </h3>
                  <div className="w-full grid md:grid-cols-3  lg:grid-cols-2 gap-2 items-center">
                    {gameData.stores.map((store, index) => (
                      <StoreIcon
                        store={store.store}
                        url={gameData.storeData[index].url}
                        key={store.id}
                      ></StoreIcon>
                    ))}
                  </div>
                </div>
              )}
              {gameData.tags?.length > 0 && (
                <div className="flex flex-col gap-2 p-2">
                  <h3 className="uppercase text-lightColdBlue-100 font-semibold font-poppins">
                    Tags
                  </h3>
                  <div className="w-full flex flex-row gap-1 flex-wrap ">
                    {gameData?.tags.slice(0, 10).map((tag) => (
                      <Tag tag={tag} key={tag.id}></Tag>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-darkColdBlue-500 w-full p-4 rounded-md font-roboto">
            <h2 className="text-lightColdBlue-100 text-xl font-semibold font-poppins w-full">
              Description
            </h2>
            <p className="text-[#cccccc] w-full">{gameData.description_raw}</p>
          </div>
          {gameData?.sameSerie?.length > 0 && (
            <GameSectionCarousel
              title={`More than ${gameData.name}`}
              quant={20}
              gamesData={gameData.sameSerie}
              releases={false}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default GamePage;
