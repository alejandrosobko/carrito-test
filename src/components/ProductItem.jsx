import * as React from 'react';
import Modal from 'react-bootstrap/Modal'

export default class ProductItem extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      show: false

    }
    this.abrirModal = this.abrirModal.bind(this);
  }

  abrirModal(){
    this.setState({show: !this.state.show});
  }

  render(){
    return (
      <div className="d-inline">
        <Modal
          show={this.state.show}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={this.abrirModal}>
              Close
            </button>
            <button variant="primary" onClick={this.abrirModal}>Understood</button>
          </Modal.Footer>
        </Modal>

        <div className='product-wrapper'>
          <div>{this.props.title}</div>
          <div className='content' data-id={this.props.title}>
            <img alt='blablala' src={this.props.image} />
            <div className='price'>{this.props.price}</div>
            <div className='description'>{this.props.description}</div>
            <button className="btn btn-info btn-sm mr-" onClick={this.abrirModal}>Info</button>
            <button className="btn btn-outline-secondary btn-sm" onClick={this.props.hacerClick}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    )
  }
}