import { Section, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

function Carousel({ screenshots }) {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  const [selectedScreen, setSelectedScreen] = useState(0);

  useEffect(() => {
    console.log(screenshots[0].image);
  }, [screenshots]);

  function slidePrev() {
    if (selectedScreen < 1) {
      setSelectedScreen(4);
    } else {
      setSelectedScreen(selectedScreen - 1);
    }
  }

  function slideNext() {
    if (selectedScreen > 3) {
      setSelectedScreen(0);
    } else {
      setSelectedScreen(selectedScreen + 1);
    }
  }

  return (
    <section className=" flex flex-col gap-2 overflow-hidden">
      <div className="flex transition-transform duration-300 ease-in-out">
        {screenshots && (
          <img
            className="w-full"
            src={screenshots[selectedScreen].image}
            alt=""
          />
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="text-lightColdBlue-100 font-extrabold"
          onClick={slidePrev}
        >
          <ChevronLeft size={40} />
        </button>
        <div className="grid grid-flow-col items-center justify-between overflow-hidden h-32 w-full px-2">
          {screenshots.slice(0, 5).map((screen, index) => (

            <div
              key={screen.id}
              onClick={() => setSelectedScreen(index)}
              style={{
                backgroundImage: `url(${screen.image})`,
              }}
              className={`w-44 h-24 bg-cover bg-center justify-center cursor-pointer ${
                selectedScreen === index ? " border-lightColdBlue-600 rounded-sm border-4 box-content scale-110" : "filter grayscale opacity-60"
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
