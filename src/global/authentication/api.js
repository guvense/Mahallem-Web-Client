import axios from "axios";
import { message } from "antd";
const api = {
  login({ username, password }) {
    return axios
      .get("/auth/login", {
        params: {
          username: username,
          password: password,
        },
      })
      .then((response) => {
        if (response.data.success === true) {
          localStorage.setItem("access_token", response.data.data.token);
          return Promise.resolve(true);
        } else {
          message.error(response.data.error_message.message);
          return Promise.reject({ error: response.data.error_message.message });
        }
      });
  },

  register({ username, firstname, lastname, password }) {
    return axios
      .post("/auth/register", {
        first_name: firstname,
        last_name: lastname,
        user_name: username,
        password: password,
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

  loadUser() {
    return axios.all([api.getUser()]).then(
      axios.spread(function (user, perms) {
        return Promise.resolve({ user: user.data });
      })
    );
  },

  getUser() {
    const access_token = localStorage.getItem("access_token");

    return axios.get("/user", {
      params: {},
      headers: { Authorization: `Bearer ${access_token}` },
    });
  },

  logout() {
    //localStorage.clear();
    localStorage.removeItem("access_token");
    return Promise.resolve(true);
  },
};

export default api;
