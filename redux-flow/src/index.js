import React from 'react';
import ReactDOM from 'react-dom';
import App from './redux/component/App';
import store from './redux/store/index'
import{Provider} from "react-redux"
import './index.css';

ReactDOM.render(
  <Provider store={store}>
  <App /></Provider>,
  document.getElementById('root')
);
