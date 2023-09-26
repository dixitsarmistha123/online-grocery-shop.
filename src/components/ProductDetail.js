import React from 'react';

function ProductDetail({ product, addToCart }) {
  if (!product) {
    return <div>Select a product to view details.</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Product Detail</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          {/* Add more product details here */}
          <button
            className="btn btn-success mt-2"
            onClick={() => addToCart(product.id)} // Use addToCart function from props
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
