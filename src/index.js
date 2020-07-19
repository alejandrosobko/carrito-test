import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Nosotros from './Nosotros';
import Ofertas from './Ofertas';
import Header from './components/Header';
import NotFound from './NotFound';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header total={0} />

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
        <Route>
          <NotFound />
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
