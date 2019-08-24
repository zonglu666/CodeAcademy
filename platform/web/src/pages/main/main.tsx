import React from "react";
import { Layout, Menu, Row, Col, Modal } from "antd";
const { Header, Footer, Content } = Layout;
import "./main.scss";
import title from "../../images/title.png";
import avatar from "../../images/avatar.png";
import bilibili from "../../images/bilibili.png";
import wechat from "../../images/wechat.png";
import sina from "../../images/sina.png";

const Main: React.FC = () => {
  return (
    <Layout className="layout">
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

      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          Content
        </div>
      </Content>
      <Footer className="footer">
        <Col span={10}>
          <div className="footer-menu">
            <span>关于酷加加</span>
            <span>|</span>
            <span>加入我们</span>
            <span>|</span>
            <span>联系我们</span>
            <span>|</span>
            <span>市场服务</span>
            <span>|</span>
            <span>隐私条款</span>
          </div>
          <div className="copy-right">Copyright ©2019 Dobe工场版权所有</div>
        </Col>
        <Col span={14}>
          <div className="follow-us">
            <span>
              <a href="https://space.bilibili.com/378936143" target="_black">
                <img src={bilibili} />
              </a>
            </span>
            <span>
              <a href="/" target="_black">
                <img src={wechat} />
              </a>
            </span>
            <span>
              <a href="https://weibo.com/dobe666" target="_black">
                <img src={sina} />
              </a>
            </span>
          </div>
        </Col>
      </Footer>
    </Layout>
  );
};

export default Main;
