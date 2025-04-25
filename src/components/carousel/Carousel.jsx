import React, { useState, useEffect } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaPause,
  FaPlay,
  FaMapPin,
} from 'react-icons/fa';
import { useDrag } from '@use-gesture/react';
import { useSprings, animated, useTransition } from '@react-spring/web';
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

  // transitions for the current index
  const transitions = useTransition(currentIndex, {
    key: currentIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400 }, // Smooth but quick fade
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
          className="btn bg-purple-900 hover:bg-purple-900"
          onClick={() => goToIndex(currentIndex - 1)}
        >
          <FaArrowLeft />
        </button>
        <button
          className="btn bg-purple-900 hover:bg-purple-900"
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
      <div className="relative mt-4 h-6">
        {transitions((style, index) => (
          <animated.div
            style={style}
            className="absolute left-1/2 -translate-x-1/2 text-purple-900 font-semibold text-lg"
          >
            <div className="info-container">
              <ul className="flex flex-col justify-center items-center text-center">
                <li>
                  <h2 className="text-lg font-semibold">
                    {carouselData2[index].header}
                  </h2>
                </li>

                {carouselData2[index].date.trim().toLowerCase() ===
                'coming soon' ? (
                  <li className="mt-2">
                    <div className="w-sm btn btn-outlined rounded-full disabled cursor-not-allowed uppercase">
                      Coming Soon
                    </div>
                  </li>
                ) : (
                  <>
                    <li className="flex items-center gap-1 mt-1 text-xs text-slate-600">
                      <FaMapPin className="h-4 w-4 text-slate-600/50" />
                      <span className="font-light">
                        {carouselData2[index].date} |{' '}
                        {carouselData2[index].city}
                      </span>
                    </li>
                    <li className="text-xs text-black mt-1">
                      {carouselData2[index].details}
                    </li>
                    <li className="mt-3">
                      <button className="btn bg-purple-900 text-white hover:bg-purple-900/90 w-sm rounded-full uppercase">
                        Enter Here
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
