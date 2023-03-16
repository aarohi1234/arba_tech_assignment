import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { authreducer } from "./Auth/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authreducer,

});

const createComposer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);