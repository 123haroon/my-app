import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const Header1 = () => {
  const Navigate = useNavigate()
  const items = [

    {
      icon1: UserOutlined,
      head: "Dashboard",
      onclick: () => {
        Navigate("/data")
      }
    },
    {
      icon1: UserOutlined,
      head: "Students",
      onclick: () => {
        Navigate("/Login")
      }
    },
    {
      icon1: UserOutlined,
      head: "Courses",
      onclick: () => {
        Navigate("/courses")
      }
    },
    {
      icon1: UserOutlined,
      head: "Attnedance",
      onclick: () => {
        Navigate("/students")
      }
    },

  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon.icon1),
    label: icon.head,
    onClick: icon.onclick
  }));
  // const Header1= () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />

      </Layout>
    </Layout>
  );
};
export default Header1;