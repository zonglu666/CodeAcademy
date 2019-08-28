import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
import "./main.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";

const Page: React.FC = () => {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content style={{ padding: "0 50px" }}>
        <Body></Body>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default Page;
