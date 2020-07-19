import React from 'react';
import data from './data.js'
import ProductItem from './components/ProductItem.jsx';


export default () => {
  const addProduct = () => console.log('hola')
  const productosEnOferta = data.filter((e) => priceToNumber(e.price) <= 0);

  if (productosEnOferta.length) {
    return (
      <div className='container'>
        {productosEnOferta.map((e) => <ProductItem key={e.title} title={e.title} description={e.description} price={e.price} image={e.image} hacerClick={addProduct} />)}
      </div>
    )
  } else {
    return (
      <div className='container'>No hay productos para mostrar</div>
    )
  }
}

function priceToNumber(price) {
  return parseInt(price.split('$')[1])
}
