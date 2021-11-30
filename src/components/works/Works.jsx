import React, { useState } from "react";
import "./works.scss";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direcction) => {
    direcction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const data = [
    {
      id: 1,
      icon: "assets/mobile.png",
      title: "project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas diam et nulla dictum, a gravida leo aliquam.",
      img: "https://app.civitfun.com/assets/img/backgrounds/no-img-default.jpg",
    },
    {
      id: 2,
      icon: "assets/globe.png",
      title: "project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas diam et nulla dictum, a gravida leo aliquam.",
      img: "https://app.civitfun.com/assets/img/backgrounds/no-img-default.jpg",
    },
    {
      id: 3,
      icon: "assets/writing.png",
      title: "project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas diam et nulla dictum, a gravida leo aliquam.",
      img: "https://app.civitfun.com/assets/img/backgrounds/no-img-default.jpg",
    },
  ];
  return (
    <div id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <span><a href="#portfolio">Projects</a></span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Works;
