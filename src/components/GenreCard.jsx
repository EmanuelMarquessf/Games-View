import React from "react";

function GenreCard({genre}) {
  return (
    <span className="text-center text-lightColdBlue-100 bg-lightColdBlue-800 p-2 rounded-md text-sm lowercase font-roboto font-medium">
      {genre}
    </span>
  );
}

export default GenreCard;
