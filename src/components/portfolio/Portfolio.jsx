import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  allPortfolio,
  frontEndPortfolio,
  backEndPortfolio,
  fullStackPortfolio,
  graphicDesignPortfolio,
  uxUiPortfolio,
} from "../../data";

import "./portfolio.scss";

const Portfolio = () => {
  const [selected, setSelected] = useState("1");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "1",
      title: "All",
    },
    {
      id: "2",
      title: "Front-end",
    },
    {
      id: "3",
      title: "Back-end",
    },
    {
      id: "4",
      title: "Full-stack",
    },
    {
      id: "5",
      title: "Graphic Design",
    },
    {
      id: "6",
      title: "UX/UI",
    },
  ];

  useEffect(() => {
    if (selected === "1") setData(allPortfolio);
    if (selected === "2") setData(frontEndPortfolio);
    if (selected === "3") setData(backEndPortfolio);
    if (selected === "4") setData(fullStackPortfolio);
    if (selected === "5") setData(graphicDesignPortfolio);
    if (selected === "6") setData(uxUiPortfolio);
  }, [selected]);

  return (
    <div id="portfolio">
      <h1>Porfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((ele) => (
          <div className="item">
            <img src={ele.img} alt="" />
            <h3>{ele.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
