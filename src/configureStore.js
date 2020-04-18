/**
 * Create the store with dynamic reducers
 */

 import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
 import { routerMiddleware } from 'connected-react-router';
 import createSagaMiddleware from 'redux-saga';
 import { createInjectorsEnhancer } from 'redux-injectors';
 import createReducer from './reducers';
 import createSagaMonitor from '@redux-saga/simple-saga-monitor';
 import rootSaga from './sagas';

 export default function customConfigureStore(initialState = {}, history) {
     // let composeEnhancers = compose;
     const reduxSagaMonitorOptions = {
         sagaMonitor: createSagaMonitor
     };

     const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
     const runSaga = sagaMiddleware.run;

     /**
      * Create the store with two middlewares
      * 1. sagaMiddleware: Makes redux-saga work
      * 2. routerMiddleware: Syncs the location/URL path to the state
      */
     const middlewares = [...getDefaultMiddleware({thunk:false}), sagaMiddleware, routerMiddleware(history)];

     // const enhancers = [applyMiddleware(...middlewares)];
     const enhancers = [ createInjectorsEnhancer({
         createReducer,
         runSaga
     })];

     const store = configureStore({
         reducer: createReducer(),
         middleware: middlewares,
         devTools: process.env.NODE_ENV !== 'production',
         preloadedState: initialState,
         enhancers
     });

     store.runSaga(rootSaga);

     return store;
 }