import React from "react";
import "./body.scss";

const Body: React.FC<{
  content: String;
}> = ({ content }) => {
  return <div>{content}</div>;
};

export default Body;
