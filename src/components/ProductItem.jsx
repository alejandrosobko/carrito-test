import * as React from 'react';

export default function(propiedades) {
  return (
    <div className='product-wrapper'>
      <div>{propiedades.title}</div>
      <div className='content' data-id={propiedades.title}>
        <img alt='blablala' src={propiedades.image} />
        <div className='price'>{propiedades.price}</div>
        <div className='description'>{propiedades.description}</div>
        <button>Info</button>
        <button onClick={propiedades.hacerClick}>Agregar al carrito</button>
      </div>
    </div>
  )
}
