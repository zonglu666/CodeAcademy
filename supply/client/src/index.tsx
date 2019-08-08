import React from "react";
import ReactDOM from "react-dom";
import Button from "antd/es/button";
import "./index.scss";

const App: React.FC = () => {
  return (
    <div>
      <p>Hello World</p>
      <Button type="primary">Button</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
