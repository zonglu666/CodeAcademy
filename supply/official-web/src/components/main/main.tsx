import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Main: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* 中间的内容区域是自己的，不可自定义 */}
      <Footer />
    </div>
  );
};

export default Main;
