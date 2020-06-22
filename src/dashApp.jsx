import React from 'react';
import PublicRouter from './router';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import { BrowserRouter } from 'react-router-dom';


const DashApp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <PublicRouter history={history} />
    </Provider>
  </BrowserRouter>
);

export default DashApp;
