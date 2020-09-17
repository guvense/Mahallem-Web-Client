import axios from "axios";
import { message } from "antd";

const api = {
  createTask({ deadline, title, description }) {
    return axios
      .post("/task/create-task", {
        deadline: deadline,
        title: title,
        description: description,
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
};

export default api;
