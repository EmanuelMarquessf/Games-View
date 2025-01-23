import React from "react";

function StoreIcon({ store, url }) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`${url}`}
      className="p-2 flex gap-2 items-center bg-darkColdBlue-400 hover:bg-darkColdBlue-300 transition-colors rounded-md text-darkColdBlue-60 font-medium select-none"
    >
      <img
        className="w-8 h-8"
        src={`./Plataforms/${store.slug}.svg`}
        alt={store.name}
        title={store.name}
      />
      <span>{store.name}</span>
    </a>
  );
}

export default StoreIcon;
