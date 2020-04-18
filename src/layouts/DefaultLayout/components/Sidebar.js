import React, { useState } from 'react';
import { routes } from 'routes';

import { Layout, Menu } from 'antd';
import history from 'utils/history';
//import Logo from '../../../assets/images/login-logo.png';

const { Sider } = Layout;

const DefaultSidebar = (props) => {

    const { currentRoute } = props;
    const { path } =currentRoute ? currentRoute.props : {};

    const [ collapsed, setCollapsed ] = useState(false);
    const [ selectedKeys, setSelectedKeys] =useState([path]);


    return (
        <Sider collapsible collapsed={collapsed} style={{backgroundColor:"#027075"}} onCollapse={() => setCollapsed( prevState => !prevState)}>
            <div className="logo">
             <b>-- MAHALLEM LOGO --</b>
            </div>
            <Menu theme="dark" mode="inline" selectedKeys={selectedKeys}>
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