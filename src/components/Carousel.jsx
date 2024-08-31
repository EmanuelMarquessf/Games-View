import { Section } from 'lucide-react'
import React, { useState, useRef, useEffect } from "react";


function Carousel({screenshots}) {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const {width} = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active))
  }, [active])

  function slidePrev(){
    if(active > 0)
    setActive(active - 1)
    else
    setActive(active + screenshots.length - 1)
  };

  function slideNext(){
    if(active < screenshots.length - 1)
    setActive(active + 1)
    else
    setActive(active - screenshots.length + 1)
  };

  return (
    <section className='overflow-hidden'>
      <div ref={contentRef} style={{transform: `translateX(${position}px)`}} className='flex transition-transform duration-300 ease-in-out'>
        {screenshots.map(screen => (
          <div key={screen.id} style={{backgroundImage : `url(${screen.image})`}} className='flex justify-between bg-cover flex-shrink-0 w-full mx-auto my-0 py-40 bg-gray-200 rounded text-center'>
            <button onClick={slidePrev}>Anterior</button>
            <button onClick={slideNext}>Proximo</button>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Carousel