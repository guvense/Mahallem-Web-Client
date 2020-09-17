import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CustomModal from "../CustomModal";
import CustomIcon from "assets/svg/CustomIcon";
import HouseInfoModal from "./HouseInfoModal";

import {
  retrieveHouseInfoRequest,
  openHouseUpdateModal,
  closeHouseUpdateModal,
} from "./reducer";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const HouseInfoPage = (props) => {
  const { house, error, userHouseUpdateStatus } = useSelector(
    (state) => state.house
  );

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
  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const onModal = () => {
    dispatch(openHouseUpdateModal());
  };

  const closeModal = () => {
    dispatch(closeHouseUpdateModal());
  };

  const buttonName = error ? "Add House" : "Update";

  const content = (
    <Typography className="card-item">
      {"deneme" && (
        <div>
          <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
          "deneme"
        </div>
      )}

      {"firstName" && (
        <div>
          <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
          {"firstName"}
        </div>
      )}

      {"lastName" && (
        <div>
          <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
          {"lastName"}
        </div>
      )}

      {"email" && (
        <div>
          <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
          {"email"}
        </div>
      )}

      {"cellPhone" && (
        <div>
          <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
          {"cellPhone"}
        </div>
      )}

      {"age" && (
        <div>
          <CustomIcon name="pre-line" width={30} height={30}></CustomIcon>
          {"age"}
        </div>
      )}
    </Typography>
  );

  return (
    <>
      <CustomModal isOpen={userHouseUpdateStatus} onClose={closeModal}>
        <HouseInfoModal />
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

          {error && (
            <>
              <Typography className="card-item">
                You should add a house
              </Typography>
            </>
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
