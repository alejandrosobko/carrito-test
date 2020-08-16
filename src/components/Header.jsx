import * as React from 'react';
import logo from '../logo.svg'
import { Link } from 'react-router-dom';

const Header = ({total, hacerClick}) =>
<nav className="navbar navbar-expand-md navbar-light bg-secondary sticky-top">
  <div className="container-fluid">
      <a href="#/" className="navbar-brand w-25"><img src={logo} className="rounded-circle w-25" alt="logo" /></a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon "></span>
      </button>
      <div id="navbarResponsive" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                  <button className="nav-link text-light bg-primary rounded" onClick={hacerClick}>Productos <span className="badge-light"> {total} </span></button>
              </li>
              <li className="navbar-item">
                  <Link to='ofertas' className="nav-link text-light">Ofertas</Link>
              </li>
              <li className="navbar-item">
                  <Link to='nosotros' className="nav-link text-light">Nosotros</Link>
              </li>
          </ul>
      </div>
  </div>
</nav>

export default Header;