import React from "react";
import { NavLink } from "react-router-dom";

function GenreCard({genre}) {
  return (
    <NavLink to={`/genre/${genre.slug}`} className="text-center text-lightColdBlue-100 bg-lightColdBlue-800 p-2 rounded-md text-sm lowercase font-roboto font-medium">
      {genre.name}
    </NavLink>
  );
}

export default GenreCard;
