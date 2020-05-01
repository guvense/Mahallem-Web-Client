import React, { useState } from 'react';
import { routes } from 'routes';

import { Layout, Menu } from 'antd';
import history from 'utils/history';
import Logo from '../../../assets/images/M.png';
import "../../../global/design/tools.scss";

const { Sider } = Layout;

const DefaultSidebar = (props) => {

    const { currentRoute } = props;
    const { path } =currentRoute ? currentRoute.props : {};

    const [ collapsed, setCollapsed ] = useState(false);
    const [ selectedKeys, setSelectedKeys] =useState([path]);


    return (
        <Sider collapsible collapsed={collapsed} className = "menu-base" onCollapse={() => setCollapsed( prevState => !prevState)}>
            <div className="logo">
            <img src={Logo} className="logo" alt="Mahallem" />
            </div>
            <Menu className = "menu-base" mode="inline" selectedKeys={selectedKeys}>
                {routes.filter( route => route.sidebar).map( (route, index) => {
                    return (
                        <Menu.item key={route.path} onClick={() => {
                            setSelectedKeys([route.path]);
                            history.push(route.path);
                        }} >
                        {route.sidebar()}
                        </Menu.item>
                    )
            })}
            </Menu>
        </Sider>
    );
};

export default DefaultSidebar;