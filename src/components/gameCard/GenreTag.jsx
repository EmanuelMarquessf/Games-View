import React from "react";
import { NavLink } from "react-router-dom";

function cardPlataform({ genre }) {
  return (
    <NavLink to={`/genre/${genre.slug}`}
      className="text-darkColdBlue-70 hover:text-darkColdBlue-60 bg-darkColdBlue-300 hover:bg-darkColdBlue-200 py-1 px-2 rounded-full text-xs lowercase font-roboto font-medium overflow-hidden text-nowrap text-ellipsis min-w-[5ch] max-w-[12ch]"
      title={genre.name}
    >
      {genre.name}
    </NavLink>
  );
}

export default cardPlataform;
