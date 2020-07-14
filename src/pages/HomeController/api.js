import axios from "axios";
import { message } from "antd";

const api = {

  retriveHomeMates() {
      
    return axios
      .get("/user/homemate")
      .then((response) => {
        if (response.data.success === true) {
          return Promise.resolve({ homemates: response.data.data });
        } else {
          message.error(response.data.error_message.message);
          return Promise.reject({ error: response.data.error_message.message });
        }
      });
  },

}

export default api;
