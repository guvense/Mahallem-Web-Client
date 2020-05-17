
import React from 'react';
import {Avatar,Menu, Dropdown } from "antd";
import "./Menu.scss"

const Notification = (props) => {
    return (
        <> 
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
         List Notification
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          Notification Settings
        </a>
      </Menu.Item>
    </Menu>
    </>
  );


}

  export default Notification;
  