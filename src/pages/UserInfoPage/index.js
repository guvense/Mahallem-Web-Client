import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomIcon from "assets/svg/CustomIcon";
import "./UserInfo.scss";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import {
  retrieveUserInfoRequest,
  closeUserUpdateModal,
  openUserUpdateModal,
} from "./reducer";
import AddUserInfo from "./AddUserInfo";
import CustomModal from "../CustomModal";

const UserInfoPage = (props) => {
  const { userInfo, userInfoUpdateModalStatus } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeUserUpdateModal());
  };

  useEffect(() => {
    dispatch(retrieveUserInfoRequest());
  }, [userInfoUpdateModalStatus]);

  const checkKey = ([key, value], i) => {
    return value !== null && key != "id" ? true : false;
  };

  const onModal = () => {
    dispatch(openUserUpdateModal());
  };

  let picture;
  var pictureUrl = userInfo["profile_picture_url"];
  if (pictureUrl) {
    picture = <img className="profil-picture" src={pictureUrl} />;
  } else {
    picture = (
      <CustomIcon
        name="empty-user-with-plus"
        width={100}
        height={100}
        className="empty-user"
      />
    );
  }

  var userName = userInfo["username"];
  var lastName = userInfo["last_name"];
  var firstName = userInfo["first_name"];
  var email = userInfo["email"];
  var cellPhone = userInfo["cell_phone"];
  var age = userInfo["age"];

  return (
    <>
      <CustomModal isOpen={userInfoUpdateModalStatus} onClose={closeModal}>
        <AddUserInfo />
      </CustomModal>

      <Card className="card">
        <CardContent className="card-content">
          <CustomIcon
            name="bookmarker"
            className="book-marker"
            width={60}
            height={60}
          />

          {picture}

          <Typography className="card-item">
            {userName && (
              <div>
                <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
                {userName}
              </div>
            )}

            {firstName && (
              <div>
                <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
                {firstName}
              </div>
            )}

            {lastName && (
              <div>
                <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
                {lastName}
              </div>
            )}

            {email && (
              <div>
                <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
                {email}
              </div>
            )}

            {cellPhone && (
              <div>
                <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
                {cellPhone}
              </div>
            )}

            {age && (
              <div>
                <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
                {age}
              </div>
            )}
          </Typography>

          <Button className="update-button card-item" onClick={onModal}>
            Update
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default UserInfoPage;
