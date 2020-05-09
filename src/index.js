import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainPage from './moduleA/pages/MainPage'
import './index.scss';
import "./globalStyles.scss"
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App >
      <Switch>
          <Route path="/">
            <MainPage/>
        </Route>
      </Switch>
      </App>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

