import React from "react";
import "./portfolioList.scss";
const PortfolioList = ({ id, title, active, setSelected }) => {
  return (
    <div className="portfolioList" id="portfolioList">
      <li
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}>
        {title}
      </li>
    </div>
  );
};

export default PortfolioList;
