import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart, showCart, handleCloseCart }) => {
  const calculateTotalPrice = () => {
    // Use the reduce function to calculate the total price
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return total.toFixed(2); // Format the total price with two decimal places
  };
  

  return (
    <Modal show={showCart} onHide={handleCloseCart}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="list-group">
              {cartItems.map((item) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                  {item.name}
                  <span>${item.price.toFixed(2)}</span>
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p>Total Price: ${calculateTotalPrice()}</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseCart}>
          Close
        </Button>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
