import React, { useState } from "react";

function NewsMainSection({ newsData }) {
  const [selectedNew, setSelectedNew] = useState(0);

  function formatData(date) {
    const data = new Date(date);
    const formattedDate = data.toLocaleDateString("en-US");

    return formattedDate;
  }

  if (!newsData) return null;
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-darkColdBlue-60 font-poppins text-3xl font-semibold capitalize">
        Last Games News
      </h1>
      <div className="grid md:grid-rows-5 grid-flow-row lg:grid-rows-2   lg:grid-flow-col gap-8 md:aspect-[16/12] lg:aspect-[16/7] font-roboto ">
        {newsData.slice(0, 4).map((news, index) => (
          <a
            href={news.link}
            target="_blank"
            key={index}
            className={`flex flex-col justify-end bg-cover bg-center rounded-xl opacity-75 hover:scale-105 hover:opacity-100 transition-all duration-300 ease-in-out aspect-[16/12] md:aspect-auto ${
              index === 0 ? "row-span-1 md:row-span-3  md:col-span-3 " : index === 1 ? "col-span-1 lg:col-span-2 row-span-2 lg:row-span-1" : index >=2 ? "col-span-1 row-span-2 lg:row-start-2" : "" 
            } `}
            style={{ backgroundImage: `url(${news.image_url})` }}
          >
            <div className={`flex flex-col gap-2 justify-center w-full rounded-b-lg px-4 py-2 bg-darkColdBlue-500 opacity-95 `}>
              <h1
                className={`w-full text-darkColdBlue-60 font-semibold line-clamp-2 font-poppins ${
                  index === 0
                    ? "text-lg md:text-3xl"
                    : index === 1
                    ? "text-lg lg:text-2xl"
                    : "text-lg"
                }`}
              >
                {news.title}
              </h1>
              <p
                className={`text-darkColdBlue-70 line-clamp-1 opacity-70 font-roboto ${
                  index === 0 ? "text-lg" : "text-md"
                }`}
              >
                {news.description}
              </p>
              <div className="flex justify-between text-darkColdBlue-200 font-extrabold font-roboto">
                <span className="">{news.creator}</span>
                <span>{formatData(news.pubDate)}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NewsMainSection;
