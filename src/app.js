import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from "react-redux";
import configureStore from "./store/configureStore";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import  AppRouter from "./routers/AppRouter";

const store = configureStore();
const jsx= (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render( jsx , document.getElementById('app'));