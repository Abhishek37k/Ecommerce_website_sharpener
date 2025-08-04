import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Carousel, Card } from "react-bootstrap";
import { CartContext } from "../components/store/CartContext";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29sb3JzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENvbG9yc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://plus.unsplash.com/premium_photo-1661880452033-a41bd5e32eae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJsYWNrJTIwYW5kJTIwd2hpdGUlMjBDb2xvcnN8ZW58MHx8MHx8fDA%3D",
    ],
  },
];

const merchArr = [
  {
    title: "T-Shirt",
    price: 19.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
      "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    title: "Coffee Cup",
    price: 6.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
      'https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmV8ZW58MHx8MHx8fDA%3D'
    ],
  },
];

const fakeReviews = [
  {
    name: "Alice",
    text: "Great product, arrived quickly and looks amazing!",
  },
  {
    name: "Bob",
    text: "Very satisfied. Will definitely buy again.",
  },
  {
    name: "Carol",
    text: "Good quality and the price is fair.",
  },
];

const ProductDetail = () => {
  const { type, id } = useParams();
  const { addToCart } = useContext(CartContext);

  const productList = type === "music" ? productsArr : merchArr;
  const product = productList[+id]; // Convert id from string to number

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product not found</h2>
        <Button as={Link} to="/store" variant="primary">
          ← Back to Store
        </Button>
      </Container>
    );
  }

  return (
    <Container fluid className="py-5 px-3">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h2 className="mb-4">{product.title}</h2>

          <Carousel className="mb-4">
            {product.images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block mx-auto"
                  src={img}
                  alt={`Slide ${idx}`}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <h4 className="mb-3">${product.price}</h4>
          <Button variant="primary" size="lg" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>

          <div className="mt-4">
            <Button variant="link" as={Link} to="/store">
              ← Back to Store
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <h4 className="mb-3">Customer Reviews</h4>
          {fakeReviews.map((review, idx) => (
            <Card key={idx} className="mb-3">
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{review.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
