import React , { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import CustomIcon from "assets/svg/CustomIcon"
import { makeStyles } from "@material-ui/core/styles";
import "./UserInfo.scss";
import {Button, Card,CardContent,Typography} from "@material-ui/core";
import { retrieveUserInfoRequest } from "./reducer";

const UserInfoPage = (props) => {

    const { userInfo } = useSelector((state) => state.user);

    console.log(userInfo)

    const dispatch = useDispatch();

    useEffect(() => {
      
        dispatch(retrieveUserInfoRequest());
  
    }, []);


    const checkKey = ([key,value],i) => {

      return value !== null && key != "id" ? true : false

    }

    return (
        <> 

        <Card className = "card">
        <CardContent className="card-content">
        <CustomIcon name="bookmarker"  className="book-marker" width={60} height={60}/>
        <CustomIcon name="empty-user-with-plus" width={100} height={100} className="empty-user"></CustomIcon>
        <Typography className="card-item">

        {Object.entries(userInfo).filter(checkKey).map(([key,value],i)  => value!==null && (
          <div><CustomIcon name="pre-line" width={30} height={30}></CustomIcon>{value}</div>
        ))}
        </Typography>
        </CardContent>
       
        <Button
        className="update-button"
      >
        Update
      </Button>
        </Card>
        </>)
}


export default UserInfoPage;



