/**
 *  Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'global/LanguageProvider/reducer';
import authReducer from 'global/authentication/reducer';

/**
  * Merges the main reducer with router state and dynamically injected reducers
  */
export default function createReducer(injectedReducers = {}){
    const rootReducer = combineReducers({
        language: languageProviderReducer,
        authentication: authReducer,
        router: connectRouter(history),
        ...injectedReducers,
    });

    return rootReducer;
}
