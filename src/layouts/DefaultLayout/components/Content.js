import React from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';

const { Content } = Layout;

const DefaultContent = ({ children }) => {

    const location = useLocation();

    return (
        <Layout style={{ padding: '0' }}>
            <Content
                className={location.pathname.split("/")[1]}
                style={{
                    background: '#fff',
                    paddingLeft: 10,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                {children}
            </Content>
        </Layout>
    );
};

DefaultContent.propTypes = {};

export default DefaultContent;