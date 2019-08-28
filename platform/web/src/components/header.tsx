import React from "react";
import { Layout, Menu, Row, Col } from "antd";
const { Header } = Layout;
import "./header.scss";
import title from "../images/title.png";
import avatar from "../images/avatar.png";

const Component: React.FC = () => {
  return (
    <Header className="header">
      <Row>
        <Col span={8}>
          <div className="title">
            <img src={title} />
          </div>
        </Col>
        <Col span={12}>
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">活动</Menu.Item>
            <Menu.Item key="3">专题</Menu.Item>
            <Menu.Item key="4">课程</Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>
          <div className="avatar">
            <img src={avatar} />
            <span>登录</span>
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default Component;
