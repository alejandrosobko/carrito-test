import React from 'react';
import './assets/styles/App.scss';
import Header from './components/Header';
import ProductItem from './components/ProductItem';
import data from './data.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(event) {
    const products = this.state.products;
    products.push(1); // guardar ID buscandolo en event.currentTarget y aca buscar el data-id
    this.setState({products: products});
  }

  render() {
    return (
      <div className="App">
        <Header total={this.state.products.length} />
        <div className="container">
          {data.map((e) => <ProductItem key={e.title} title={e.title} description={e.description} price={e.price} image={e.image} hacerClick={this.addProduct} />)}
        </div>
      </div>
    );
  }
}

export default App;
