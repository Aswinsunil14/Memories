import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { GoogleOAuthProvider } from '@react-oauth/google';


import reducers  from './reducers'
import './index.css'


import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

// ReactDOM.render(
// <Provider store = {store}>
// <App />
// </Provider>,
// document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store = {store}>
    <GoogleOAuthProvider clientId='1017105475196-nrm7t21c1qfrppm2dqne2bqrui3eomaa.apps.googleusercontent.com' >
  <App />
    </GoogleOAuthProvider>
</Provider>);