import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./UserInfo.scss";
import CustomIcon from "assets/svg/CustomIcon";
import { Card, CardContent } from "@material-ui/core";
import CustomTextField from "../../global/customComponent/CustomTextField";
import CustomButton from "../../global/customComponent/button";
import { updateUserInfoRequest } from "./reducer";

import api from "./api";

const AddUserInfo = (props) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [image, setImage] = useState({ preview: null, raw: null });

  const dispatch = useDispatch();

  const onSubmitClick = (event) => {
    event.preventDefault();

    var payload = {
      firstName,
      lastName,
      email,
      phoneNumber,
      birthDate,
    };
    dispatch(updateUserInfoRequest(payload));

    var formData = new FormData();
    formData.append("image", image.raw);
    api.updateProfilePicture(formData);
  };

  const imageExtension = ["png", "jpeg", "jpg"];

  const handleChange = (e) => {
    var fileExtension = e.target.files[0].name.split(".").pop();
    if (imageExtension.includes(fileExtension) && e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    } else {
      alert("düzgün gir");
    }
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

          <div>
            <label htmlFor="upload-button">
              {image.preview ? (
                <img
                  className="profil-pic"
                  src={image.preview}
                  alt="dummy"
                  width="150"
                  height="150"
                />
              ) : (
                <>
                  <CustomIcon
                    name="empty-user-with-plus"
                    width={100}
                    height={100}
                    className="empty-user"
                  ></CustomIcon>
                </>
              )}
            </label>
            <input
              type="file"
              id="upload-button"
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <br />
          </div>

          <form onSubmit={onSubmitClick}>
            <CustomTextField
              variant="outlined"
              className="text-field"
              label="First Name"
              onChange={(event) => setFirstName(event.target.value)}
            />

            <CustomTextField
              variant="outlined"
              className="text-field"
              label="Last Name"
              onChange={(event) => setLastName(event.target.value)}
            />

            <CustomTextField
              className="text-field"
              variant="outlined"
              label="Email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <CustomTextField
              className="text-field"
              variant="outlined"
              label="Phone Number"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />

            <CustomTextField
              className="text-field"
              label="Birth date"
              defaultValue=""
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              variant="outlined"
              format={"DD-MM-YYYY"}
              onChange={(event) => setBirthDate(event.target.value)}
            />

            <CustomButton type="plus" width={70} height={70} />
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddUserInfo;
