import React, { useState } from 'react';
import './assets/styles/App.scss';
import Header from './components/Header';
import ProductItem from './components/ProductItem';
import data from './data.js'

const App = () => {

  const [ mostrar, cambiarMostrar] = useState(true);

  const [ products, actualizarProducts ] = useState([]);

  const addProduct = id => {
    const producto = data.filter(producto => producto.id === id);
    actualizarProducts([
      ...products, producto[0]
    ]);
  }

  const changeMostrar = () => {
    cambiarMostrar(false);
  }

    return (
      <div className="App">
        <Header total={products.length} hacerClick={() => changeMostrar()} />
        {mostrar ? 
        <div className="container">
          {data.map((e) => <ProductItem key={e.title} title={e.title} description={e.description} price={e.price} image={e.image} hacerClick={() => addProduct(e.id)} />)}
        </div> :
        <div className="container">
          {products.map((e) => <ProductItem key={e.title} title={e.title} description={e.description} price={e.price} image={e.image} hacerClick={() => addProduct(e.id)} />)}
        </div>
        }
        
      </div>
    );
}

export default App;