import React from "react";
import "./portfolioList.scss";
const PortfolioList = ({ id, title, active, setSelected }) => {
  // console.log("id", id);
  return (
    <div className="portfolioList" id="portfolioList">
      <li
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => {
          // console.log("clicked", id);
          setSelected(id);
        }}
      >
        {title}
      </li>
    </div>
  );
};

export default PortfolioList;
