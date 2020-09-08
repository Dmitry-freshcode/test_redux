import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from "./component/Counter"
import { Provider } from "react-redux";
import {countReducer,testReducer} from './redux/reducer';

import { combineReducers,createStore } from 'redux';

const initState = {
  count:1,
  test:0};

const rootReducer = combineReducers({
  countReducer,
  testReducer
})


const store = createStore(rootReducer,initState);



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <Counter />
  </Provider>,
  
  document.getElementById('root')
);

serviceWorker.unregister();
