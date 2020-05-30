import '../Pages.scss';
import './HomePage.scss';
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox, Card, Alert } from "antd";
import { logoutRequest } from "global/authentication/reducer";
import CreateTaskModal from "../CreateTaskModal"


import React from 'react';

const HomePage = ({}) => {

    const dispatch = useDispatch();


    const { user } = useSelector(
        (state) => state.authentication
      );

    const logOut = () => {
        dispatch(logoutRequest());
    }

    return( 
        <>
        <CreateTaskModal/>
        <div>Welcome {user.user_name}</div>
        <Button
        type="primary"
        htmlType="submit"
        onClick={logOut}
      > Log out</Button>
        </> );
};


export default HomePage;
