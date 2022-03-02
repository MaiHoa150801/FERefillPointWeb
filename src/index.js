import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { SnackbarProvider } from 'notistack';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <Provider store={store}>
      <SnackbarProvider maxSnack={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}>
        <App />
      </SnackbarProvider>

    </Provider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
