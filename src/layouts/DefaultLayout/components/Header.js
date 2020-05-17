import React from 'react';
import Logo from "../../../assets/images/M.png";
import {Avatar,Menu, Dropdown } from "antd";
import "./Layout.scss";
import { UserOutlined, EnterOutlined } from "@ant-design/icons";
import TaskManagement from "./menu/TaskManagement"
import Notification from "./menu/Notification"
import Pet from "./menu/Pet"
import Social from "./menu/Social"

const Header = (props) => {
    return (
        <> 
        
        <div className="header">
        <div className="header-div">
        <Dropdown  overlay={TaskManagement} className="header-element">
           <a onClick={e => e.preventDefault()}>
            Task Management
          <EnterOutlined className="arrow-icon"/>
          </a>
          </Dropdown>
          <Dropdown overlay={Notification} className="header-element">
          <a onClick={e => e.preventDefault()}>
           Notifications
         <EnterOutlined className="arrow-icon"/>
         </a>
         </Dropdown>
          
          <img src={Logo} className="logo" alt="Mahallem" /> 
        
          <Dropdown overlay={Pet} className="header-element">
          <a onClick={e => e.preventDefault()}>
           Pets
         <EnterOutlined className="arrow-icon"/>
         </a>
         </Dropdown>
         <Dropdown overlay={Social} className="header-element">
         <a onClick={e => e.preventDefault()}>
          Social
        <EnterOutlined className="arrow-icon"/>
        </a>
        </Dropdown>

        <Avatar className="header-element" size={64} icon={<UserOutlined />} />
      
        </div>
        </div>
        </>
    );
};

export default Header;