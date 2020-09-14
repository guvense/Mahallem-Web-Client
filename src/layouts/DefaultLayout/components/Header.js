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
import { useHistory } from "react-router-dom";
import CustomIcon from "assets/svg/CustomIcon"

const Header = (props) => {

  const dispatch = useDispatch();

  const showTaskManagement = () => {
    dispatch(showCreateTask());
  };
  const history = useHistory();

  const toUserInfo = "/user-info";

  const pushUserInfo = () => {
    console.log("Triggered" + toUserInfo);
    history.push(toUserInfo);
  }

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
          </a>
          </Dropdown>
          <Dropdown overlay={Notification} className="header-element">
          <a onClick={e => e.preventDefault()}>
           Notifications
        
         </a>
         </Dropdown>
          
          <img src={Logo} className="logo" alt="Mahallem" /> 
          <Dropdown overlay={Pet} className="header-element">
          <a onClick={e => e.preventDefault()}>
           Pets
         
         </a>
         </Dropdown>
         <Dropdown overlay={Social} className="header-element">
         <a onClick={e => e.preventDefault()}>
          Social
        
        </a>
        </Dropdown>
        <div onClick={pushUserInfo}>
        <CustomIcon name="empty-user" width={70} height={70} className="user-icon"></CustomIcon>

        </div>

        </div>
        </div>
        </>
    );
};

export default Header;