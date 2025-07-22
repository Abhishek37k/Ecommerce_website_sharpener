import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { CartContext } from "../store/CartContext";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleCart = () => setShowCart(!showCart);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Container>
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link text-white px-3">
              HOME
            </NavLink>
            <NavLink to="/store" className="nav-link text-white px-3">
              STORE
            </NavLink>
            <NavLink to="/about" className="nav-link text-white px-3">
              ABOUT
            </NavLink>
          </Nav>
          <Button variant="outline-light" onClick={toggleCart}>
            Cart ({cartItems.length})
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
