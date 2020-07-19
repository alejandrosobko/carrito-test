import * as React from 'react';
import logo from '../logo.svg'
import { Link } from 'react-router-dom';

export default (props) =>
<nav className="navbar navbar-expand-md navbar-light bg-secondary sticky-top">
  <div className="container-fluid">
      <a href="#/" className="navbar-brand w-25"><img src={logo} className="rounded-circle w-25" alt="logo" /></a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon "></span>
      </button>
      <div id="navbarResponsive" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                  <a href="#a" className="nav-link text-light bg-primary rounded">Productos <span className="badge-light"> {props.total} </span></a>
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



/*
<div className="header">
    <img src={logo} className="logo-img" alt="logo" />
    <div className="panel-derecho">
      <a href='productos.html'>Productos ({props.total})</a>
      <a href='#a'>Ofertas</a>
      <a href='#a'>Nosotros</a>
    </div>
  </div>
*/