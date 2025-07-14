import React, { useState } from "react";
import "./Cart.css";

const initialCartElements = [
  {
    title: "Album 1",
    price: 12.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    title: "Album 2",
    price: 9.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 2,
  },
  {
    title: "Album 3",
    price: 19.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

function Cart({ onClose }) {
  const [cartItems, setCartItems] = useState(initialCartElements);

  const handleRemove = (title) => {
    const updatedItems = cartItems.filter((item) => item.title !== title);
    setCartItems(updatedItems);
  };

  const totalAmount = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h4>CART</h4>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>

      <div className="cart-table-header">
        <span style={{ flex: 1 }}>ITEM</span>
        <span className="cart-price">PRICE</span>
        <span className="cart-qty">QUANTITY</span>
      </div>

      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-info">
                <img src={item.imageUrl} alt={item.title} />
                <div className="cart-details">
                  <p>{item.title}</p>
                </div>
              </div>
              <div className="cart-price">${item.price.toFixed(2)}</div>
            <div className="cart-qty">
  <input
    type="number"
    value={item.quantity}
    readOnly
  />
  <button
    className="remove-btn"
    onClick={() => handleRemove(item.title)}
  >
    REMOVE
  </button>
</div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div className="cart-total">
            Total &nbsp; ${totalAmount}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
