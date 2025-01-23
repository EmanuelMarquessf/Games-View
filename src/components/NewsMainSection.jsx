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
      <div className="grid grid-row-2 grid-flow-col gap-8 aspect-[16/7] font-roboto ">
        {newsData.slice(0, 4).map((news, index) => (
          <a
            href={news.url}
            target="_blank"
            key={index}
            className={`flex flex-col justify-end bg-cover bg-center rounded-xl opacity-75 hover:scale-105 hover:opacity-100 transition-all duration-300 ease-in-out ${
              index === 0 ? "row-span-2 col-span-3" : ""
            } ${index === 1 ? "col-span-2" : ""} ${
              index >= 2 ? "row-start-2 col-span-1" : ""
            }`}
            style={{ backgroundImage: `url(${news.urlToImage})` }}
          >
            <div className="flex flex-col gap-2 w-full rounded-b-lg px-4 py-2 bg-darkColdBlue-500 opacity-95">
              <h1
                className={`w-full text-darkColdBlue-60 font-semibold line-clamp-2 font-poppins ${
                  index === 0
                    ? "text-3xl"
                    : index === 1
                    ? "text-2xl"
                    : "text-md"
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
                <span className="">{news.author}</span>
                <span>{formatData(news.publishedAt)}</span>
              </div>
            </div>
          </a>
        ))}

        {/* <div src={newsData[selectedNew].urlToImage} className="grid grid aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${newsData[selectedNew].urlToImage})`}}> 

</div>
<span>{newsData[selectedNew].title}</span>

{newsData.map((news, index) => (
  <div onClick={() => setSelectedNew(index)}  style={{ backgroundImage: `url(${news.urlToImage})` }}>
    <p>aa</p>
  </div>
))} */}
      </div>
    </div>
  );
}

export default NewsMainSection;
