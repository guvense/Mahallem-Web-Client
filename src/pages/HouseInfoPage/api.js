import axios from "axios";
import { message } from "antd";

const api = {
  retrieveHouseInfo() {
    return axios.get("/house").then((response) => {
      return response.data;
    });
  },

  createHouse(payload) {
    return axios
      .post("/house/add-house", {
        name: payload.name,
        house_status: payload.status,
      })
      .then((response) => {
        return response.data;
      });
  },

  updateHouseInfo(payload) {
    return axios
      .put("/house", {
        name: payload.name,
        house_status: payload.status,
      })
      .then((response) => {
        return response.data;
      });
  },
};

export default api;
