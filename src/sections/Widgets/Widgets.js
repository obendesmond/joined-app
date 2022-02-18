import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subTitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Desmond News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Jesus IS COMING AGAIN", "Top news - 10000000 readers")}
      {newsArticle("Desmond React is back", "Top news - 9099 readers")}
      {newsArticle("Corona Virus: UK updates", "Top news - 886 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto - 8000 readers")}
    </div>
  );
}

export default Widgets;
