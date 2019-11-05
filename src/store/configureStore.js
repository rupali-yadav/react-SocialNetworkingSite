import jioFacebook from "../reducers/jioFacebook";

import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux";
import {
    thunk
} from "redux-thunk";
export default () => {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || applyMiddleware;
    const store = createStore(
        jioFacebook,
        composeEnhancer
    );
    // const store = createStore(JioFacebook);
    return store;
}