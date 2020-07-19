import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Nosotros from './Nosotros';
import Ofertas from './Ofertas';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/ofertas">
          <Ofertas />
        </Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
