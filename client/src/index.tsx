import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from "history";
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store/configureStore';
import 'slick-carousel/slick/slick.css';
<<<<<<< HEAD
import 'slick-carousel/slick/slick-theme.css'
=======
import 'slick-carousel/slick/slick-theme.css';
>>>>>>> heroku



export const history = createBrowserHistory();


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
        <Provider store={store}>
        <App />
        </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
