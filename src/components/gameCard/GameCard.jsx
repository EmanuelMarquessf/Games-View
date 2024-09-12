import React from "react";
import { NavLink } from "react-router-dom";
import { baseWebsiteUrl } from "../../config/config";

import GenreTag from "./GenreTag";
import PlatformIcon from "./PlatformIcon";

function GameCard({ id, title, backGround, genres, platforms, released, releases }) {
  return (
    <NavLink to={`${baseWebsiteUrl}${id}`} className="bg-darkColdBlue-500 rounded-xl cursor-pointer w-[280px] h-80">
      {backGround && (
        <div
          className="w-full h-48 bg-cover bg-center rounded-t-md flex items-end justify-end"
          style={{ backgroundImage: `url(${backGround})` }}
        >
          {releases && (<span className="bg-lightColdBlue-700 m-2 px-2 py-1 rounded-lg text-lightColdBlue-100 font-medium text-xs">{released}</span>)}
        </div>
      )}
      <div className="flex flex-col gap-4 text-lightColdBlue-100 m-4">
        <div className="flex gap-1">
          {platforms.map((platform, index) => (
            <PlatformIcon key={index} platform={platform}/>
          ))}
        </div>
        <span className="font-roboto font-medium text-xl text-nowrap overflow-hidden overflow-ellipsis">{title}</span>
        <div className="flex gap-1">
          {genres.map((genre, index) => (
            <GenreTag key={index} genre={genre.name} />
          ))}
        </div>
      </div>
    </NavLink>
  );
}

export default GameCard;