import React from 'react';
import data from './data.js'
import ProductItem from './components/ProductItem.jsx';


const Ofertas = () => {
  console.log(data);

  return (
    <div>
      {data.map((e) => <ProductItem key={e.title} title={e.title} description={e.description} price={e.price} image={e.image} hacerClick={this.addProduct} />)}
    </div>
  )
}

export default Ofertas