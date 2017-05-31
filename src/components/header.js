import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import Logo from './logo';
import './header.css';

const Header = (props) => {
  return (
    <Layout.Header>
      <Logo/>
      <Menu className="_menu" theme="dark" mode="horizontal">
        <Menu.Item><Link to="/">Home</Link></Menu.Item>
        <Menu.Item><Link to="/comics">Comics</Link></Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
