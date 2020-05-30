/**
 *  Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "utils/history";
import languageProviderReducer from "global/LanguageProvider/reducer";
import authenticate from "global/authentication/reducer";
import header from "../src/layouts/DefaultLayout/components/menu/reducer"
import createTask from "./pages/CreateTaskModal/reducer"

/**
 * Merges the main reducer with router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    authentication: authenticate,
    header: header,
    createTask: createTask,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
