import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from "./component/Counter"

import { Provider } from "react-redux";
import reducerCount from './redux/reducerCount';
import reducerCount2 from './redux/reducerCount2';

import { combineReducers,createStore } from 'redux';


const rootReducer = combineReducers({
  count1: reducerCount,
  count2: reducerCount2
})



const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



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
