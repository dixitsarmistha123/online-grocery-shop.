import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Header = ({ cartCount, cartItems, removeFromCart }) => {
  const [showCart, setShowCart] = useState(false);

  // Function to open the cart modal
  const handleShowCart = () => {
    setShowCart(true);
  };

  // Function to close the cart modal
  const handleCloseCart = () => {
    setShowCart(false);
  };
  const handleCheckoutCart = () => {
    if(cartCount !== 0){
      setShowCart(false);
    }
  };
  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return total.toFixed(2);
  };

  return (
    <header className="bg-primary text-white p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h1>Online Grocery Shop</h1>
          </div>
          <div className="col text-end">
            {/* Cart Icon/Button */}
            <Button variant="light" onClick={handleShowCart}>
              <i className="bi bi-cart"></i> Cart ({cartCount})
            </Button>
          </div>
        </div>
      </div>

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
          {
           cartCount !== 0 &&
          <Button variant="primary"  onClick={handleCheckoutCart}>Checkout</Button>
          }
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
