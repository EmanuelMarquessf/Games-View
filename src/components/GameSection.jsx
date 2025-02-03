import React from "react";
import GameCard from "./gameCard/GameCard.jsx";
import { NavLink } from "react-router-dom";
import { CircleAlert } from "lucide-react";

function GameSection({ title, filter, quant, gamesData, releases, error }) {
  let date = new Date();

  if(error.includes('games'))
    return (
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-end jus">
          <h1 className="text-darkColdBlue-60 font-poppins text-3xl font-semibold capitalize">
            {title.replaceAll("-", " ")}
          </h1>
          <NavLink
            to={`filter/${filter}`}
            className="bg-darkColdBlue-400 px-2 py-1  font-poppins text-xs text-darkColdBlue-90 rounded-md uppercase font-medium"
          >
            view more
          </NavLink>
        </div>
        <div className="bg-darkColdBlue-500 rounded-xl min-w-[280px] min-h-80 flex flex-col items-center justify-center gap-4">
          <CircleAlert color="#F3F6FF" width="70px" height="70px"/>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl text-darkColdBlue-70 font-extrabold font-poppins">API Indisponivel :( </span>
            <span className="text-xl text-darkColdBlue-90  font-roboto">Tente novamente mais tarde</span>
          </div>
        </div>
      </div>
    ); else
    return (
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-end">
          <h1 className="text-darkColdBlue-60 font-poppins text-3xl font-semibold capitalize">
            {title.replaceAll("-", " ")}
          </h1>
          <NavLink
            to={`filter/${filter}`}
            className="bg-darkColdBlue-400 px-2 py-1  font-poppins text-xs text-darkColdBlue-90 rounded-md uppercase font-medium"
          >
            view more
          </NavLink>
        </div>
        {gamesData && (
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 items-center gap-8">
            {gamesData
              .slice(0, quant)
              .map(
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
                      releases={releases}
                    />
                  )
              )}
          </div>
        )}
      </div>
    );
}

export default GameSection;
