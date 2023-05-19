import React, { useEffect, useState } from "react";
import imageSlide from "./sliderData";
import "./Slider.css";

const Slider = () => {
  const [currentState, setCurrentState] = useState(0);
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };

  // console.log(imageSlide[currentState]?.title);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentState]);

  // console.log(imageSlide[currentState]?.url);
  const bgImgStyle = {
    backgroundImage: `url(/${imageSlide[currentState]?.url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  return (
    <div className="container-style ">
      <div style={bgImgStyle}>
        <div className="absolute flex lg:justify-start left-0 top-0 items-center h-full bg-gradient-to-b lg:bg-gradient-to-r from-black to-[#3333]">
          <div className=" text-white space-y-7 lg:w-[60%] px-3 lg:pl-32">
            <h2 className="font-semibold text-6xl">
              {imageSlide[currentState]?.title}
            </h2>
            <p className="text-xl font-semibold">
              {imageSlide[currentState]?.body}
            </p>
            <div>
              <button className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none mr-5 text-white">
                Start Now
              </button>
            </div>
            <div className="carousel-boult">
              {imageSlide.map((imageSlide, currentState) => (
                <span
                  key={currentState}
                  onClick={() => goToNext(currentState)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
