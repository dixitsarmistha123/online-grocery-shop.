import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import Header from './Header';
import Cart from './Cart';
function ProductList() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    // Function to add a product to the cart
    const addToCart = (productId) => {
        const productToAdd = products.find((product) => product.id === productId);

        if (productToAdd) {
            // Check if the product is already in the cart
            const isProductInCart = cart.some((item) => item.id === productId);

            if (!isProductInCart) {
                // Add the product to the cart if it's not already in the cart
                setCart((prevCart) => [...prevCart, productToAdd]);
                // Update the cart count in the header
                setCartCount(cartCount + 1);
            } else {
                alert("Produt is already in cart")
            }
        }
    };
    const removeFromCart = (productId) => {
        // Filter out the product with the given ID from the cart
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
        // Update the cart count in the state
        setCartCount(cartCount - 1);
    };

    // Function to handle viewing product details
    const viewProductDetails = (productId) => {
        const productToView = products.find((product) => product.id === productId);

        if (productToView) {
            setSelectedProduct(productToView);
        }
    };

    useEffect(() => {
        async function fetchProductData() {
            try {
                const response = await fetch('http://localhost:3001/products'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }

        fetchProductData();
    }, []);

    return (
        <div className="container mt-4">
            <h1>Product List</h1>
            <Header cartCount={cartCount} cartItems={cart} removeFromCart={removeFromCart} />
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={product.image} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">${product.price}</p>
                                <button
                                    className="btn btn-primary mr-3"
                                    onClick={() => viewProductDetails(product.id)}
                                >
                                    View Details
                                </button>
                                <button
                                    className="btn btn-success ml-3"
                                    onClick={() => addToCart(product.id)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ProductDetail product={selectedProduct} addToCart={addToCart} />
            <Cart cartItems={cart} removeFromCart={removeFromCart} />
        </div>
    );
}

export default ProductList;
