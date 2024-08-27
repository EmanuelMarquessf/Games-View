import React from "react";
import { NavLink } from "react-router-dom";
import GenreTag from "./GenreTag";
import PlatformIcon from "./PlatformIcon";

function GameCard({ gId, gName, gBackGround, gGenres, gPlatforms, gStores }) {
  return (
    <NavLink to={`${gId}`} className="bg-darkColdBlue-500 rounded-xl cursor-pointer">
      {gBackGround && (
        <div
          className="w-full h-48 bg-cover bg-center rounded-t-md"
          style={{ backgroundImage: `url(${gBackGround})` }}
        ></div>
      )}
      <div className="flex flex-col gap-4 text-lightColdBlue-100 m-4">
        <div className="flex gap-1">
          {gPlatforms.map((platform, index) => (
            <PlatformIcon key={index} platform={platform}/>
          ))}
        </div>
        <span className="font-roboto font-medium text-xl">{gName}</span>
        <div className="flex gap-1">
          {gGenres.map((genre, index) => (
            <GenreTag key={index} genre={genre.name} />
          ))}
        </div>
      </div>
    </NavLink>
  );
}

export default GameCard;