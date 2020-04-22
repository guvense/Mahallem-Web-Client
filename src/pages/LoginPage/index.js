import './Login.scss';
import Logo from '../../assets/images/login-logo.png';

import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { loginRequest } from 'global/authentication/reducer';

const LoginPage = (props) => {
    const { user, error, logging } = useSelector(state => state.authentication);
    const history = useHistory();
    let { from } = history.location.state || { from: { pathname: '/'} };

    useEffect(() => {
        if (logging){
            history.push(from);
        }
    }, [history, logging, from, user.id]);

    const dispatch = useDispatch();

    const onFinish = values => {
        dispatch(loginRequest(values))
    };

    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    }

    return (
        <>
            <img src={Logo} alt="Mahallem" /> 
            <Card className="login-card">
                { error && <Alert message={error} type="error" style={{ marginBottom: 10 }} /> }
                <Form 
                    name = "tat_login"
                    className="login-form-layout"
                    initialValues= {{ remember : true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username'}]}
                    >
                        <Input prefix= {<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password'}]}
                    >
                        <Input 
                        prefix= {<LockOutlined className="site-form-item-icon" />} 
                        type= "password"
                        placeholder="Username" />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox> Remember Me </Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">
                            Forgot Password?
                        </a>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>    
            </Card>
        </>
    );
};

export default LoginPage;