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

    const { permissions } = useSelector(state => state.authentication);
    const isAuthorized = hasAnyPermission(permissions, hasAnyPermissions);

    const checkAuthorities = props => 
        isAuthorized ? (
            <Component {...props} />
        ) : (
            <div className="insufficient-authority">
            You are not authorized to access this page.
            </div>
        );
    
    const renderRedirect = props => {

        return isAuth ? (
            checkAuthorities(props)
        ) : (

            <Redirect
                to={{
                    pathname: '/login', 
                    state: { from: props.location }
                }}
            />
        );
    };

    return <Route {...rest} render={renderRedirect} />;
};

export default PrivateRouteComponent;