import React from 'react';
import Logo from "../../../assets/images/M.png";
import {Avatar,Menu, Dropdown } from "antd";
import "./Layout.scss";
import { UserOutlined, EnterOutlined } from "@ant-design/icons";
import Notification from "./menu/Notification"
import Pet from "./menu/Pet"
import Social from "./menu/Social"
import { useSelector, useDispatch } from "react-redux";
import { showCreateTask } from "./menu/reducer";


const Header = (props) => {

  const dispatch = useDispatch();

  const showTaskManagement = () => {
    dispatch(showCreateTask());
  };


  const TaskManagement = (
      <Menu>
        <Menu.Item onClick = {showTaskManagement}>
            Create Task
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            List my Task
          </a>
        </Menu.Item>
      </Menu>
  )



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