
import React from 'react';
import {Avatar,Menu, Dropdown } from "antd";
import "./Menu.scss"

const TaskManagement = (props) => {
    return (
        <> 
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Create Task
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          List my Task
        </a>
      </Menu.Item>
    </Menu>
    </>
  );


}

  export default TaskManagement;
  