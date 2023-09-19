import React from "react";
import { Layout, theme } from "antd";
import HeaderCom from "../../components/HeaderCom";
import CardCom from "../CardCom";
import HomeContent from "./HomeContent";
const { Header, Content } = Layout;
const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <HeaderCom />

      <Content>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <HomeContent />
        </div>
      </Content>
      {/* <FooterCom /> */}
    </Layout>
  );
};
export default Home;
