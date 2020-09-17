import axios from "axios";
import { message } from "antd";

const api = {
  retrieveHouseInfo() {
    return axios.get("/house").then((response) => {
      /* if (response.data.success === true) {
        return Promise.resolve({ house: response.data.data });
      } else {
        message.error(response.data.error_message.message);
        WarningAlert(response.data.error_message.message);
        return Promise.reject({ error: response.data.error_message.message });
      }*/

      return response.data;
    });
  },
};

export default api;
