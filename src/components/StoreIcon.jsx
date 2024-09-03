import React from "react";

function StoreIcon({ store }) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`https://${store.domain}`}
      className="p-2 flex gap-2 items-center bg-darkColdBlue-400 hover:bg-darkColdBlue-300 transition-colors rounded-sm text-darkColdBlue-60 font-medium"
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
