import React from "react";
import { formatDate } from '../../utils/javascript'

function NewsCard({ index, title, description, link, image, author, date }) {

  function gridConfig(index){
    if(index === 0){
      return ('row-span-1 md:row-span-3  md:col-span-3 ')
    }
    else if(index === 1){
      return ('col-span-1 lg:col-span-2 row-span-2 lg:row-span-1')
    }
    else if(index >= 2 && index <=3){
      return ('col-span-1 row-span-2 lg:row-start-2')
    }
    else{
      return 'md:aspect-video'
    }
  }

  if(title){
    return (
      <a className={`flex flex-col justify-end bg-cover bg-center rounded-xl opacity-75 hover:scale-105 hover:opacity-100 transition-all duration-300 ease-in-out aspect-[16/12]  md:aspect-auto ${gridConfig(index)} `} href={link} target="_blank" style={{ backgroundImage: `url(${image})` }}>
        
        <div className="flex flex-col gap-2 justify-center w-full rounded-b-lg px-4 py-2 bg-darkColdBlue-500 opacity-95">
          <h1
            className={`w-full text-darkColdBlue-60 font-semibold line-clamp-2 font-poppins ${
              index === 0
                ? "text-lg md:text-3xl"
                : index === 1
                ? "text-lg lg:text-2xl"
                : "text-lg"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-darkColdBlue-70 line-clamp-1 opacity-70 font-roboto ${
              index === 0 ? "text-lg" : "text-md"
            }`}
          >
            {description}
          </p>
          <div className="flex justify-between text-darkColdBlue-200 font-extrabold font-roboto  ">
            <span className="">{author}</span>
            <span>{formatDate(date)}</span>
          </div>
        </div>
      </a>
    );
  }
  else{
    return (
      <div className={`flex flex-col justify-end bg-cover bg-center rounded-xl opacity-75 hover:scale-105 hover:opacity-100 transition-all duration-300 ease-in-out aspect-[16/12] md:aspect-auto ${gridConfig(index)}` }>
        
        <div className="flex flex-col gap-2 justify-center w-full rounded-b-lg px-4 py-2 bg-darkColdBlue-500 opacity-95 h-full">
          <h1
            className={`w-full text-darkColdBlue-60 font-semibold line-clamp-2 font-poppins ${
              index === 0
                ? "text-lg md:text-3xl"
                : index === 1
                ? "text-lg lg:text-2xl"
                : "text-lg"
            }`}
          >
            Loading...
          </h1>
        </div>
      </div>
    );
  }
}

export default NewsCard;
