import React, { useEffect } from "react";
import GameCard from "./gameCard/GameCard.jsx";
import { NavLink } from "react-router-dom";

function GameSection({title, filter, quant, gamesData, releases}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <h1 className="text-darkColdBlue-60 font-roboto text-3xl font-semibold capitalize">{title.replaceAll('-', ' ')}</h1>
        <NavLink to={`filter/${filter}`} className="bg-darkColdBlue-400 px-2 py-1  font-poppins text-xs text-darkColdBlue-90 rounded-md uppercase font-medium">view more</NavLink>
      </div>
      {gamesData && (
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 items-center gap-8">
          {gamesData.slice(0, quant).map(
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
