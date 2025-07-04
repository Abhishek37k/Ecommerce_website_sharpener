import { Container, Navbar, Nav, Button } from 'react-bootstrap';

function Header() {
  return (
   <> <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Nav className="mx-auto">
          <Nav.Item>
            <Nav.Link disabled className="text-white px-3">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link disabled className="text-white px-3">STORE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link disabled className="text-white px-3">ABOUT</Nav.Link>
          </Nav.Item>
        </Nav>
        <Button variant="outline-light">Cart</Button>
      </Container>
     
    </Navbar>
     <Container className=" text-white px-3 text-center" style={{backgroundColor: '#777777',  color: 'white', fontWeight: 'bold', fontSize: '3rem',margin:'0'  ,        maxWidth:" 100%"}} > 
     The Generics

      </Container></>
  );
}

export default Header;
