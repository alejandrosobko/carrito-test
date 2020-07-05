import React from 'react';
import './assets/styles/App.scss';
import Header from './components/Header';
import ProductItem from './components/ProductItem';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default App;
