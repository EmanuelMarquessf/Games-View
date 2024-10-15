import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

function Carousel({ screenshots }) {

  const [selectedScreen, setSelectedScreen] = useState(0);

  function slidePrev() {
    if (selectedScreen < 1) {
      setSelectedScreen(screenshots.length-3);
    } else {
      setSelectedScreen(selectedScreen - 1);
    }
  }

  function slideNext() {
    if (selectedScreen > 2) {
      setSelectedScreen(0);
    } else {
      setSelectedScreen(selectedScreen + 1);
    }
  }
  if(screenshots.length === 0) return null
  return (
    <section className="flex flex-col gap-2 overflow-hidden h-auto">
      <div className="flex transition-transform duration-300 ease-in-out">
        {screenshots && (
          <div className="bg-cover w-full h-[200px] md:h-[400px] lg:h-[450px] lg:min-h-[450px] xl:min-h-[500px] rounded-md z-0 bg-center" style={{backgroundImage: `url(${screenshots[selectedScreen].image}`}}> </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="text-lightColdBlue-100 font-extrabold"
          onClick={slidePrev}
        >
          <ChevronLeft size={40} />
        </button>
        <div className="grid grid-flow-col items-center justify-center gap-5 overflow-hidden h-20 md:h-32 w-full px-2 ">
          {screenshots.slice(0, 4).map((screen, index) => (

            <div
              key={screen.id}
              onClick={() => setSelectedScreen(index)}
              style={{
                backgroundImage: `url(${screen.image})`,
              }}
              className={`w-12 md:w-36 lg:w-28 2xl:w-44 h-12 md:h-24 bg-cover bg-center justify-center cursor-pointer rounded-md z-0 ${
                selectedScreen === index ? " border-lightColdBlue-600  border-4 box-content scale-110" : "filter grayscale opacity-60"
              }`}
            ></div>
          ))}
        </div>
        <button
          className="text-lightColdBlue-100"
          onClick={() => slideNext()}
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
}

export default Carousel;
