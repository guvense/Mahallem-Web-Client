import axios from 'axios';

const api = {
    login({ username, password }){
        return axios.get(
            '/auth/login',
            {
                params: { 
                    username: username, 
                    password: password
                }
            }
        )
        .then(response => {
            console.log("???")
            console.log(response)
            console.log("???")
            localStorage.setItem('access_token', response.data.data.token);

            return Promise.resolve(true);
        }).catch(err => {
            return Promise.reject({ error: err.response.data });
        });
    },

    loadUser(){
        return axios.all([api.getUser()])
            .then(axios.spread(function (user, perms){
                return Promise.resolve({ user: user.data });
        }));
    },
    
    getUser(){
        const access_token = localStorage.getItem("access_token")
        console.log("&&&")
        console.log(access_token)
        return axios.get( 
            "/user",
            {   params: {}, 
                headers: {'Authorization': `Bearer ${access_token}`}
            } 
        );
    },

    logout() {
        localStorage.clear();
        return Promise.resolve(true);
    }
}

export default api;
