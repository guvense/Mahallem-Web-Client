import React , { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import "./UserInfo.scss";
import CustomIcon from "assets/svg/CustomIcon"
import {Card,CardContent} from "@material-ui/core";
import CustomTextField from "../../global/customComponent/CustomTextField"
import CustomButton from "../../global/customComponent/button"
import { updateUserInfoRequest } from "./reducer";

const AddUserInfo = (props) => { 


      const [firstName, setFirstName] = useState(null);
      const [lastName, setLastName] = useState(null);
      const [email, setEmail] = useState(null);
      const [phoneNumber, setPhoneNumber] = useState(null);
      const [birthDate, setBirthDate] = useState(null);

      const dispatch = useDispatch();
       
      const onSubmitClick = (event) => {
        event.preventDefault();
        var payload = {firstName,lastName,email,phoneNumber,birthDate}
        console.log("test" +payload.birthDate); 
 
        dispatch(updateUserInfoRequest(payload));
         console.log(firstName,lastName,email,phoneNumber,birthDate);
       };
 
 

    return (
        <> 
        <Card className = "card add-user-info-card">
        <CardContent className="card-content">
        <CustomIcon name="bookmarker"  className="book-marker" width={60} height={60}/>
        <CustomIcon name="empty-user-with-plus" width={100} height={100} className="empty-user"></CustomIcon>
        
        
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
        format={'DD-MM-YYYY'}
        onChange={(event) => setBirthDate(event.target.value)}
         />
        
        <CustomButton type="plus" width={70} height={70}/>
        </form>

          </CardContent>
       
        </Card>
        </>)


}


export default AddUserInfo;
