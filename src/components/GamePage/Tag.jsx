import React from "react";

function Tag({ tag }) {
  return (
    <div
      className="text-darkColdBlue-70 hover:text-darkColdBlue-60 bg-darkColdBlue-400 hover:bg-darkColdBlue-300 py-1 px-2 rounded-full text-xs lowercase font-roboto font-medium overflow-hidden text-nowrap text-ellipsis min-w-[5ch] max-w-[12ch]"
      title={tag.name}
    >
      {tag.name}
    </div>
  );
}

export default Tag;
