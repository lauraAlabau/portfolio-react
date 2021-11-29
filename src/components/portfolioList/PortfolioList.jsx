import React from "react";
import "./portfolioList.scss";

const PortfolioList = ({ id, title, active, setSelected }) => {
  return (
    <li
      id="portfolioList"
      className={active ? "active" : ""}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
