import React from "react";
import { NavLink } from "react-router-dom";

import GenreTag from "./GenreTag";
import PlatformIcon from "./PlatformIcon";

import { formatDate } from '../../utils/javascript'

function GameCard({ id, title, backGround, genres, platforms, released, releases }) {
  return (
    <div className="bg-darkColdBlue-500 rounded-xl min-w-[280px] min-h-80 opacity-85 hover:scale-105 hover:opacity-100 transition-all duration-300 ease-in-out select-none">
      {backGround && (
        <NavLink to={`/${id}`}
          className="w-full h-48 bg-cover bg-center rounded-t-md flex items-end justify-end"
          style={{ backgroundImage: `url(${backGround})` }}
        >
          {releases && (<span className="bg-lightColdBlue-700 m-2 px-2 py-1 rounded-lg text-lightColdBlue-100 font-medium text-xs font-roboto">{formatDate(released)}</span>)}
        </NavLink>
      )}
      <div className="flex flex-col gap-4 text-lightColdBlue-100 m-4">
        <div className="flex gap-1">
          {platforms?.map((platform, index) => (
            <PlatformIcon key={index} platform={platform}/>
          ))}
        </div>
        <NavLink to={`/${id}`} title={title} className={`font-roboto font-medium text-xl text-nowrap overflow-hidden overflow-ellipsis`}>{title}</NavLink>
        <div className="flex gap-1">
          {genres?.slice(0, 4).map((genre, index) => (
            <GenreTag key={index} genre={genre} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameCard;