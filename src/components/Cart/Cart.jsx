import React, { useState } from "react";
import { CartContext } from "../store/CartContext";

import { useContext, useEffect } from "react";

import {
  Offcanvas,
  Button,
  Container,
  Row,
  Col,
  Image,
  Form,
} from "react-bootstrap";

// const initialCartElements = [
//   {
//     title: "Album 1",
//     price: 12.99,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 1,
//   },
//   {
//     title: "Album 2",
//     price: 9.99,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 2,
//   },
//   {
//     title: "Album 3",
//     price: 19.99,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];


function Cart({ onClose }) {
  const { cartItems, removeFromCart, loadCart } = useContext(CartContext);

  const totalAmount = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
useEffect(() => {
  loadCart();
}, [loadCart]);

  return (
    <div
      className="bg-white shadow"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "500px",
        height: "100vh",
        overflowY: "auto",
        zIndex: 1050,
        padding: "20px",
      }}
    >
      <Container fluid>
        {/* Header */}
        <Row className="border-bottom mb-3 pb-2">
          <Col>
            <h4 className="fw-bold">CART</h4>
          </Col>
          <Col className="text-end">
            <Button variant="outline-secondary" size="sm" onClick={onClose}>
              &times;
            </Button>
          </Col>
        </Row>

        {/* Table Header */}
        <Row className="fw-bold border-bottom pb-2 mb-2">
          <Col>ITEM</Col>
          <Col xs={3}>PRICE</Col>
          <Col xs={4}>QUANTITY</Col>
        </Row>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <Row key={index} className="align-items-center border-bottom py-3">
              <Col>
                <div className="d-flex align-items-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    rounded
                    width={100}
                    height={100}
                    className="me-2"
                  />
                  <div>{item.title}</div>
                </div>
              </Col>
              <Col xs={3}>${item.price.toFixed(2)}</Col>
              <Col xs={4}>
                <div className="d-flex align-items-center gap-2">
                  <Form.Control
                    type="number"
                    value={item.quantity}
                    readOnly
                    style={{ width: "60px" }}
                  />
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item)}
                  >
                    REMOVE
                  </Button>
                </div>
              </Col>
            </Row>
          ))
        )}

        {/* Total */}
        {cartItems.length > 0 && (
          <Row className="mt-4">
            <Col className="text-end fw-bold fs-5">Total: ${totalAmount}</Col>
          </Row>
        )}

        <Button
          variant="success"
          style={{ width: "200px" }}
          className="d-block mx-auto mt-3"
          onClick={() => alert("Thanks for your order!")}
        >
          Purchase
        </Button>
      </Container>
    </div>
  );
}

export default Cart;
