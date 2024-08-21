import React from "react";

function cardPlataform({ genre }) {
  return (
    <span
      className="bg-lightColdBlue-800 py-1 px-2 rounded-full text-xs lowercase font-roboto font-medium"
    >
      {genre}
    </span>
  );
}

export default cardPlataform;
