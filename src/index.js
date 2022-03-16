import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import "./style/index.css";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}>
        <CookiesProvider>
          <Router>
            <App />
          </Router>
        </CookiesProvider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


