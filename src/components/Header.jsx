import * as React from 'react';
import logo from '../logo.svg'

export default (props) =>
  <div className="header">
    <img src={logo} className="logo-img" alt="logo" />
    <div className="panel-derecho">
      <a href='#a'>Productos ({props.total})</a>
      <a href='#a'>Ofertas</a>
      <a href='#a'>Nosotros</a>
    </div>
  </div>
