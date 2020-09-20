import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CustomModal from "../CustomModal";
import CustomIcon from "assets/svg/CustomIcon";
import HouseInfoCreateModal from "./HouseInfoCreateModal";
import HouseInfoUpdateModal from "./HouseInfoUpdateModal";

import {
  retrieveHouseInfoRequest,
  openHouseUpdateModal,
  closeHouseUpdateModal,
  openHouseCreateModal,
  closeHouseCreateModal,
} from "./reducer";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const HouseInfoPage = (props) => {
  const {
    house,
    error,
    userHouseUpdateStatus,
    userHouseCreateStatus,
  } = useSelector((state) => state.house);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveHouseInfoRequest());
  }, []);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const onModal = () => {
    error ? dispatch(openHouseCreateModal()) : dispatch(openHouseUpdateModal());
  };

  const closeHouseCreateModalAction = () => {
    dispatch(closeHouseCreateModal());
  };

  const closeHouseUpdateModalAction = () => {
    dispatch(closeHouseUpdateModal());
  };

  const buttonName = error ? "Add House" : "Update";

  const { name: name, house_status: houseStatus } = house;

  const content = (
    <div>
      <Typography className="card-item">
        {name && (
          <div>
            <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
            {name}
          </div>
        )}

        {houseStatus && (
          <div>
            <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
            {houseStatus}
          </div>
        )}
      </Typography>
    </div>
  );

  return (
    <>
      <CustomModal
        isOpen={userHouseCreateStatus}
        onClose={closeHouseCreateModalAction}
      >
        <HouseInfoCreateModal />
      </CustomModal>

      <CustomModal
        isOpen={userHouseUpdateStatus}
        onClose={closeHouseUpdateModalAction}
      >
        <HouseInfoUpdateModal />
      </CustomModal>

      <Card className="card">
        <CardContent className="card-content">
          <CustomIcon
            name="bookmarker"
            className="book-marker"
            width={60}
            height={60}
          />

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning">
              {error}
            </Alert>
          </Snackbar>

          {error ? (
            <>
              <Typography className="card-item">
                You should add a house
              </Typography>
            </>
          ) : (
            content
          )}
          <Button className="update-button card-item" onClick={onModal}>
            {buttonName}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
export default HouseInfoPage;
