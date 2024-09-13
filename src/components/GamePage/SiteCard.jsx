import React from "react";

function SiteCard({ url, text, slug }) {
  if(url=='') return null
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`${url}`}
      className="p-2 flex gap-2 items-center bg-darkColdBlue-400 rounded-md text-darkColdBlue-60 font-medium hover:bg-darkColdBlue-300 transition-colors"
    >
      <img
        className="w-8 h-8 text-darkColdBlue-60"
        src={`./Plataforms/${slug}.svg`}
        alt={text}
        title={text}
      />
      <span>{text}</span>
    </a>
  );
}

export default SiteCard;
