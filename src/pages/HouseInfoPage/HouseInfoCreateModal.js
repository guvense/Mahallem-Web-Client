import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./HouseInfo.scss";
import CustomIcon from "assets/svg/CustomIcon";
import { Card, CardContent } from "@material-ui/core";
import CustomTextField from "../../global/CustomComponent/CustomTextField";
import CustomButton from "../../global/CustomComponent/button";
import { createHouseInfoRequest } from "./reducer";

const HouseInfoCreateModal = (props) => {
  const [name, setName] = useState(null);
  const [status, setStatus] = useState(null);

  const dispatch = useDispatch();

  const onSubmitClick = (event) => {
    event.preventDefault();

    var payload = {
      name: name,
      status: status,
    };
    console.log("create");

    console.log(payload);
    dispatch(createHouseInfoRequest(payload));
  };

  return (
    <>
      <Card className="card add-user-info-card">
        <CardContent className="card-content">
          <CustomIcon
            name="bookmarker"
            className="book-marker"
            width={60}
            height={60}
          />

          <form onSubmit={onSubmitClick}>
            <CustomTextField
              variant="outlined"
              className="text-field"
              label="Name"
              onChange={(event) => setName(event.target.value)}
            />

            <CustomTextField
              variant="outlined"
              className="text-field"
              label="Status"
              onChange={(event) => setStatus(event.target.value)}
            />

            <CustomButton type="plus" width={70} height={70} />
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default HouseInfoCreateModal;
