import React from "react";
import { Layout, Menu, Row, Col, Modal } from "antd";
const { Footer } = Layout;
import "./footer.scss";
import bilibili from "../images/bilibili.png";
import wechat from "../images/wechat.png";
import sina from "../images/sina.png";

const PageFooter: React.FC = () => {
  return (
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
  );
};

export default PageFooter;
