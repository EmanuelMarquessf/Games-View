import React from "react";
import { NavLink } from "react-router-dom";

function Tag({ tag }) {
  return (
    <NavLink to={`/tag/${tag.slug}`}
      className="text-darkColdBlue-70 hover:text-darkColdBlue-60 bg-darkColdBlue-400 hover:bg-darkColdBlue-300 py-1 px-2 rounded-full text-xs lowercase font-roboto font-medium overflow-hidden text-nowrap text-ellipsis min-w-[5ch] max-w-[12ch]"
      title={tag.name}
    >
      {tag.name}
    </NavLink>
  );
}

export default Tag;
