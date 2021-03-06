import '../Pages.scss';
import './HomePage.scss';
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox, Card, Alert } from "antd";
import { logoutRequest } from "global/authentication/reducer";
import CreateTaskModal from "../TaskPage/CreateTaskModal"
import UserInfoPage from "../UserInfoPage"


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
        <Button
        type="primary"
        htmlType="submit"
        onClick={logOut}
      > Log out</Button>
        </> );
};


export default HomePage;
