import * as React from 'react';
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal'


  const ProductItem = ({title, image, price, description, hacerClick}) =>{
  
  const [ show, setShow] = useState(false);

  const abrirModal = () => {
    setShow(!show);
  }

      return (
      <div className="d-inline">
        <Modal
          show={show}
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
            <button variant="secondary" onClick={() => abrirModal()}>
              Close
            </button>
            <button variant="primary" onClick={() => abrirModal()}>Understood</button>
          </Modal.Footer>
        </Modal>

        <div className='product-wrapper'>
          <div>{title}</div>
          <div className='content' data-id={title}>
            <img alt='blablala' src={image} />
            <div className='price'>{price}</div>
            <div className='description'>{description}</div>
            <button className="btn btn-info btn-sm mr-" onClick={() => abrirModal()}>Info</button>
            <button className="btn btn-outline-secondary btn-sm" onClick={hacerClick} >Agregar al carrito</button>
          </div>
        </div>
      </div>
    )
  
}

export default ProductItem;