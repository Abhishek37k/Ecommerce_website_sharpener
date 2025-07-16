import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import Cart from "../Cart/Cart";

function Header() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(!showCart);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link disabled className="text-white px-3">HOME</Nav.Link>
            <Nav.Link disabled className="text-white px-3">STORE</Nav.Link>
            <Nav.Link disabled className="text-white px-3">ABOUT</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={toggleCart}>
            Cart
          </Button>
        </Container>
      </Navbar>

      <div className="text-center py-3 bg-secondary text-white fs-1 fw-bold">
        The Generics
      </div>

      {showCart && <Cart onClose={toggleCart} />}
    </>
  );
}

export default Header;
