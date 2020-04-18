import './App.scss';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts';
import { routes } from './routes';
import PrivateRoute from 'global/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserRequest, WINDOW_EVENTS, logoutRequest } from 'global/authentication/reducer';
import { isAuthenticated } from 'global/authentication/utils';
import { useWindowEvent } from 'utils/useWindowEvent';
import { SERVER_URL } from 'utils/constants';

const App = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authentication.user);
  let isAuth = isAuthenticated();

  useEffect(() => {
    if (isAuth && !user.id) {
      dispatch(loadUserRequest());
    }

  }, [isAuth, user.id, dispatch]);

  useWindowEvent("message", event => onMessage(event));
  const onMessage = (event) => {
    if (event.origin.startsWith(SERVER_URL)) {
      const { type } = event.data;
      console.log(event.data);
      if(type === WINDOW_EVENTS.LOGIN_SESSION_EXPIRED && isAuth){
        dispatch(logoutRequest());
      }
    }
  };

  return (
    <Switch>
      <DefaultLayout>

            { routes.map( (props,id) => {
              
              // TODO: render also child routes
              if (props?.protect) {
                return <PrivateRoute key={`${props?.path}-${id}`} exact {...props} isAuth={isAuth} />
              }
              return <Route key={`${props?.path}-${id}`} exact {...props} />;
            })}
          </DefaultLayout>
    </Switch>


  );

}


export default App;
