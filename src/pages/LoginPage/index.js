import './Login.scss';
import Logo from '../../assets/images/login-logo.png';

import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { loginRequest, WINDOW_EVENTS } from 'global/authentication/reducer';
import { isAuthenticated } from 'global/authentication/utils';
import { SERVER_URL } from 'utils/constants';
import { useWindowEvent } from 'utils/useWindowEvent';

const LoginPage = (props) => {
    const { user, error } = useSelector(state => state.authentication);
    console.log("****")
    console.log(user)
    console.log("****")
    const history = useHistory();
    let isAuth = isAuthenticated();
    let { from } = history.location.state || { from: { pathname: '/'} };

    useEffect(() => {
        console.log("useeffect")
        console.log(isAuth)
        console.log(user.id)
        console.log(from)
        if (isAuth && user.id ){
            history.push(from);
        }
    }, [history, isAuth, from, user.id]);

    const [userData, setUserData ] = useState({username: '', password: ''});
    const [loginLoaded] = useState(true);

    const dispatch = useDispatch();

    useWindowEvent("message", (event) => onMessage(event));

    const onMessage = (event) => {
        if (event.origin.startsWith(SERVER_URL)){
            console.log(event.data)
            const { type } = event.data;

            if (type === WINDOW_EVENTS.LOGIN_RECEIVE_DATA){
                dispatch(loginRequest(userData));
            }
        }
    }

    const onFinish = values => {
        console.log(loginLoaded)
        console.log(values)
        if(loginLoaded){
            setUserData(values);
            dispatch(loginRequest(values))
        } else {
            console.log("Please try again later...");
            dispatch(error("Please try again later"));
        }
    };

    const onFinishFailed = errorInfo => {
        console.log("Failed.:", errorInfo);
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