import React from "react";
import GameCard from "../gameCard/GameCard";

function GameSectionCarousel({ title, quant, gamesData, releases }) {
  return (
    <div className="flex flex-col gap-8 py-10 select-none">
      <h1 className="text-darkColdBlue-60 font-roboto text-3xl font-bold">
        {title}
      </h1>
      {gamesData && (
        <div className="flex overflow-x-auto gap-8 py-4 z-10">
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

export default GameSectionCarousel;
