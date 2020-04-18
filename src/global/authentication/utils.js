
export const isAuthenticated = () => {
    let tokenIsExist = localStorage.getItem('access_token');
    
    if (tokenIsExist){
        return true
    }else {
        return false;
    }
};