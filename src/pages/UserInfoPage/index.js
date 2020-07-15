import React , { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import CustomIcon from "assets/svg/CustomIcon"
import { makeStyles } from "@material-ui/core/styles";
import "./UserInfo.scss";
import {MenuItem, FormControl, Select,Button, Card,CardContent,Typography,CardHeader} from "@material-ui/core";

const UserInfoPage = (props) => {


    const username = "guven"
    const fullname = "Güven Seçkin"
    const email = "guven.seckin.4@gmail.com"
    const phone = "0507 140 1254"
    const age = "25"

    return (
        <> 

        <Card className = "card">
        <CardContent className="card-content">
        <CustomIcon name="bookmarker"  className="book-marker" width={60} height={60}/>
        <CustomIcon name="empty-user-with-plus" width={100} height={100} className="empty-user"></CustomIcon>
        <Typography className="card-item">
            <div><CustomIcon name="pre-line" width={30} height={30}></CustomIcon>{username}</div>
            <div><CustomIcon name="pre-line" width={30} height={30}></CustomIcon>{fullname}</div>
            <div><CustomIcon name="pre-line" width={30} height={30}></CustomIcon>{email}</div>
            <div><CustomIcon name="pre-line" width={30} height={30}></CustomIcon>{phone}</div>
            <div><CustomIcon name="pre-line" width={30} height={30}></CustomIcon>{age}</div>
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