import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import store from './store/index.jsx';
//import { ApiProvider } from '@reduxjs/toolkit/query/react';
//import { productApi } from './Api';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-z7or4kq02hxalg5u.us.auth0.com"
    clientId="m4aqeo0Qk680csOtKKEXsmQOvpVGJRlW"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
  {/* <ApiProvider api={productApi} >  */}
    <App />
 {/*  </ApiProvider> */}
  </Provider>,
  </Auth0Provider>
)
