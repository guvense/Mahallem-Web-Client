import React , { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import CustomIcon from "assets/svg/CustomIcon"
import "./UserInfo.scss";
import {Button, Card,CardContent,Typography} from "@material-ui/core";
import { retrieveUserInfoRequest,closeUserUpdateModal,openUserUpdateModal } from "./reducer";
import AddUserInfo from "./AddUserInfo"
import CustomModal from "../CustomModal"

const UserInfoPage = (props) => {

    const { userInfo,userInfoUpdateModalStatus } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const closeModal = () => {
      dispatch(closeUserUpdateModal());
    }


    useEffect(() => {
      
        dispatch(retrieveUserInfoRequest());
        
  }, [userInfoUpdateModalStatus]);


    const checkKey = ([key,value],i) => {

      return value !== null && key != "id" ? true : false

    }

    const onModal = () => {
      dispatch(openUserUpdateModal());
    }


    return (
        <> 
        <CustomModal isOpen={userInfoUpdateModalStatus} onClose={closeModal}>
        <AddUserInfo/>
        </CustomModal>

        <Card className = "card">
        <CardContent className="card-content">
        <CustomIcon name="bookmarker"  className="book-marker" width={60} height={60}/>
        <CustomIcon name="empty-user-with-plus" width={100} height={100} className="empty-user"></CustomIcon>
        <Typography className="card-item">

        {Object.entries(userInfo).filter(checkKey).map(([key,value],i)  => value!==null && (
          <div><CustomIcon name="pre-line" width={30} height={30}></CustomIcon>{value}</div>
        ))}
        </Typography>
        
       
        <Button
        className="update-button card-item"
        onClick = {onModal}
      >
        Update
      </Button>
      </CardContent>
        </Card>
        </>)
}


export default UserInfoPage;



