import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
import "./main.scss";

import Header from "../components/header";
import Footer from "../components/footer";

const Main: React.FC = () => {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          Content
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default Main;
