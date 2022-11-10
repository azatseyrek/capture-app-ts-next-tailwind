import {NextComponentType} from 'next';
import Image from 'next/image';
import React, {FC, useState} from 'react';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

interface IProps {
  slides: {image: string}[];
}

const Slider = (props: IProps) => {
  const {slides} = props;

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {slides.map((slide, idx) => {
          return (
            <div
              key={idx}
              className={
                idx === current ? 'block ease-in duration-500  ' : 'hidden'
              }
            >
              <div className="relative flex justify-center p-4">
                <FaArrowAltCircleLeft
                  size={50}
                  className="absolute top-1/2 left-[20px] hover:opacity-60 text-white/70 outline outline-gray-700 rounded-full transition-all duration-500 active:outline-offset-8 cursor-pointer select-none z-[2]"
                  onClick={prevSlide}
                />
                <FaArrowAltCircleRight
                  size={50}
                  className="absolute top-1/2 right-[20px] hover:opacity-60 outline outline-gray-700 rounded-full transition-all duration-500 active:outline-offset-8 text-white/70 cursor-pointer select-none z-[2]"
                  onClick={nextSlide}
                />
                {idx === current && (
                  <Image
                    src={slide.image}
                    alt="img"
                    width="1440"
                    height="600"
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
