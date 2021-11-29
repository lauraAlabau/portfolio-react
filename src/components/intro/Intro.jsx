import React, { useEffect, useRef } from "react";
import { init } from "ityped";

import "./intro.scss";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    // console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      typeSpeed:  100,
      backDelay: 1500,
      backSpeed: 50,
      strings: ["Developer", "Designer"],
    });
  }, []);

  return (
    <div id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/woman.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Laura Alabau</h1>
          <h3>
            Front-end <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
