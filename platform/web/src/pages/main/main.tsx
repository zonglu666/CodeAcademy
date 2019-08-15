import React from "react";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
const { Header, Footer, Content } = Layout;
import "./main.scss";
import logo from "../../images/logo.png";

const Main: React.FC = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <Row>
          <Col span={4}>
            <div className="logo">
              <img src={logo} />
            </div>
          </Col>
          <Col span={12}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="menu"
            >
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">社区</Menu.Item>
            </Menu>
          </Col>
          <Col span={8}>登录 注册</Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        在线教育平台 ©2019 Created by 松露
      </Footer>
    </Layout>
  );
};

export default Main;
