import React, { useState } from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";

function Header({ children }) {
  return (
    <div id="header" className="flex flex-col md:flex-row gap-10 bg-darkColdBlue-600 w-full py-4 text-xl font-medium items-center justify-between md:px-20 xl:px-48 border-b-2 border-darkColdBlue-400 z-50">
      <NavLink to="/"><img className="w-32" src="/logo2.svg" alt="" /></NavLink>
      <ul className="flex gap-10 items-center text-lightColdBlue-100">

        <li>
          <NavLink to="">Game</NavLink>
        </li>
        <div className="w-[2px] h-5 bg-lightColdBlue-200"></div>
        <li>
          <NavLink to="/genre">Genre</NavLink>
        </li>
      </ul>
      <ul className="flex flex-row items-center justify-center gap-2  text-lightColdBlue-100">
        <li className="flex items-center">{children}</li>
      </ul>
    </div>
  );
}

export default Header;
