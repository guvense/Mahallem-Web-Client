
import React from 'react';
import {Menu } from "antd";
import "./Menu.scss"

const Pet = (props) => {
    return (
        <> 
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Register Pet
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          Alert Pet Disappear
        </a>
      </Menu.Item>
    </Menu>
    </>
  );


}

  export default Pet;
  