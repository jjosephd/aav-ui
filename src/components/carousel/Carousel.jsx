import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay } from 'react-icons/fa';
import { useDrag } from '@use-gesture/react';
import { useSprings, animated } from '@react-spring/web';
import carouselData from './carouselData';
import { carouselData2 } from './carouselData';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const getOffset = (i) => {
    const raw = i - currentIndex;
    const half = Math.floor(carouselData.length / 2);
    return ((raw + carouselData.length + half) % carouselData.length) - half;
  };

  const [springs, api] = useSprings(carouselData.length, (i) => {
    const offset = getOffset(i);
    return {
      x: offset * 160,
      scale: offset === 0 ? 1 : 0.9,
      blur: Math.abs(offset) > 2 ? 4 : offset === 0 ? 0 : 2,
      config: { tension: 280, friction: 30 },
    };
  });

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    api.start((i) => {
      const offset = getOffset(i);
      return {
        x: offset * 160,
        scale: offset === 0 ? 1 : 0.9,
        blur: Math.abs(offset) > 2 ? 4 : offset === 0 ? 0 : 2,
      };
    });
  }, [currentIndex, api]);

  const goToIndex = (i) => {
    const bounded = (i + carouselData.length) % carouselData.length;
    setCurrentIndex(bounded);
  };

  const bind = useDrag(
    ({ direction: [dx], velocity: [vx], last }) => {
      if (!last || vx < 0.2) return;
      if (dx < 0) goToIndex(currentIndex + 1);
      if (dx > 0) goToIndex(currentIndex - 1);
    },
    { axis: 'x', threshold: 10 }
  );

  return (
    <div className="flex flex-col carouselData-center w-full">
      <div
        className="relative flex justify-center carouselData-center h-[300px] w-full mt-8"
        {...bind()}
      >
        {springs.map((style, i) => (
          <animated.div
            key={carouselData2[i].id}
            style={{
              transform: style.x.to(
                (x) => `translateX(${x}px) scale(${style.scale.get()})`
              ),
              filter: style.blur.to((b) => `blur(${b}px)`),
              position: 'absolute',
              zIndex: 100 - Math.abs(getOffset(i)),
              transition: 'all 0.4s ease',
            }}
          >
            <div
              className={`${
                currentIndex === i ? 'w-[300px]' : 'w-[250px]'
              } h-[300px] rounded-xl overflow-hidden flex items-center justify-center shadow-lg ${
                currentIndex === i
                  ? 'shadow-2xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] cursor-pointer transition-shadow duration-300 ease-in-out'
                  : ''
              } select-none`}
            >
              <img
                src={carouselData2[i].imgUrl}
                alt={`Image ${carouselData2[i].id}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </animated.div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          className="btn btn-primary"
          onClick={() => goToIndex(currentIndex - 1)}
        >
          <FaArrowLeft />
        </button>
        <button
          className="btn btn-primary"
          onClick={() => goToIndex(currentIndex + 1)}
        >
          <FaArrowRight />
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className="mt-2 text-sm text-gray-500">
          {currentIndex + 1} / {carouselData.length}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
