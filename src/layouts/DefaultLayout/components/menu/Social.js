
import React from 'react';
import {Menu } from "antd";
import "./Menu.scss"
const Social = (props) => {
    return (
        <> 
    <Menu >
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Social Platform
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          Messages
        </a>
      </Menu.Item>
    </Menu>
    </>
  );


}

  export default Social;
  