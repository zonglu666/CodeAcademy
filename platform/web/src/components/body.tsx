import React from "react";
import "./body.scss";

const Component: React.FC<{
  content: String;
}> = ({ content }) => {
  return <div>{content}</div>;
};

export default Component;
