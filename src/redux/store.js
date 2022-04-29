import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { appReducer, notificationsReducer, placesReducer } from "./appRedux";

const rootReducers = combineReducers({
  app: appReducer,
  placesReducer: placesReducer,
  notificationsReducer: notificationsReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
