import axios from "axios";
import { message } from "antd";

const api = {

  retrieveUserInfo() {
      
    return axios
      .get("/user")
      .then((response) => {
        if (response.data.success === true) {
          return Promise.resolve({ user: response.data.data });
        } else {
          message.error(response.data.error_message.message);
          return Promise.reject({ error: response.data.error_message.message });
        }
      });
  },

  updateUserInfo({ firstName,lastName,email,phoneNumber,birthDate }) {
    
  return axios
    .put("/user/add-user-detail", {
      cell_phone: phoneNumber,
      email: email,
      first_name: firstName,
      last_name: lastName,
      birth_date:birthDate
    })
    .then((response) => {
      if (response.data.success === true) {
        return Promise.resolve(true);
      } else {
        message.error(response.data.error_message.message);
        return Promise.reject({ error: response.data.error_message.message });
      }
    });
},

}

export default api;