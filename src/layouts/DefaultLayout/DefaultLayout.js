import React from 'react';
import { withRouter } from 'react-router-dom';
import DefaultHeader from './components/Header';
import DefaultContent from './components/Content';
import DefaultSidebar from './components/Sidebar';
import withLayout from '../withLayout';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './components/Layout.scss';

const DefaultLayout = ({
    children,
    disableHeader,
    disableSidebar,
    disableFooter,
    currentRoute,    
}) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {!disableSidebar && <DefaultSidebar currentRoute={currentRoute} />}
            <Layout>
                {!disableHeader && <DefaultHeader />}
                <DefaultContent> {children} </DefaultContent>
            </Layout>
        </Layout>
    );
};

DefaultLayout.propTypes = {};

export default withRouter(withLayout(DefaultLayout));