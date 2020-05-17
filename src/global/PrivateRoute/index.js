import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const hasAnyPermission = (permissions, hasAnyPermissions) => {
    if (permissions && permissions.length !== 0){
        if ( hasAnyPermissions.length === 0 ){
            return true;
        }
        return hasAnyPermissions.some(perm => permissions[perm]);
    }
    return false;
};

export const PrivateRouteComponent = ({
    component: Component,
    hasAnyPermissions = [],
    isAuth,
    ...rest
}) => {

    const { isAuthorized } = useSelector(state => state.authentication);


    
    const renderRedirect = props => {

        return (

            <Redirect
                to={{
                    pathname: '/login', 
                    state: { from: props.location }
                }}
            />
        );
    };


   return (
   
    isAuthorized ? (
        <Component  />
    ) : (
        <Route {...rest} render={renderRedirect} />
    )
   
    )
};

export default PrivateRouteComponent;