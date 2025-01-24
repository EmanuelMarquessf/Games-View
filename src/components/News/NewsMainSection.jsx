import React, { children, useState } from "react";
import NewsCard from "./NewsCard";
import { NavLink } from "react-router-dom";

function NewsMainSection({ newsData, error, children }) {
  if (error)
    return (
      <div className="flex flex-col gap-8 aspect-[16/7]">
        <div className="flex justify-between items-end">
          <h1 className="text-darkColdBlue-60 font-poppins text-3xl font-semibold capitalize">
            Last Games News
          </h1>
          <NavLink
            to={`news`}
            className="bg-darkColdBlue-400 px-2 py-1 font-poppins text-xs text-darkColdBlue-90 rounded-md uppercase font-medium"
          >
            view more
          </NavLink>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center  bg-darkColdBlue-500 h-full">
          {children}
          <span className="font-roboto text-darkColdBlue-60 text-lg font-bold">API indisponivel!</span>
        </div>
      </div>
    );
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <h1 className="text-darkColdBlue-60 font-poppins text-3xl font-semibold capitalize">
          Last Games News
        </h1>
        <NavLink
          to={`news`}
          className="bg-darkColdBlue-400 px-2 py-1  font-poppins text-xs text-darkColdBlue-90 rounded-md uppercase font-medium"
        >
          view more
        </NavLink>
      </div>
      <div className="grid md:grid-rows-5 grid-flow-row lg:grid-rows-2   lg:grid-flow-col gap-8 md:aspect-[16/12] lg:aspect-[16/7] font-roboto ">
        {newsData?.slice(0, 4).map((news, index) => (
          <NewsCard
            key={index}
            index={index}
            title={news.title}
            description={news.description}
            link={news.link}
            image={news.image_url}
            author={news.creator}
            date={news.pubDate}
          ></NewsCard>
        ))}
      </div>
    </div>
  );
}

export default NewsMainSection;
