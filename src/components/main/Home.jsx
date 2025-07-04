import { Container, Row, Col, Button } from 'react-bootstrap';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const merchArr = [
  {
    title: 'T-Shirt',
    price: 19.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
  },
  {
    title: 'Coffee Cup',
    price: 6.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
  },
];

function Home() {
  return (
    <div style={{ backgroundColor: 'white', padding: '40px 0' }}>
      <Container>
        {/* MUSIC Section */}
        <h2 className="text-center mb-4">MUSIC</h2>
        <Row className="gy-4">
          {productsArr.map((product, idx) => (
            <Col key={idx} xs={12} sm={6} md={6} lg={6}>
              <div className="text-center">
                <h5 className="mb-2">Album {idx + 1}</h5>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  style={{
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <span style={{ color: '#777777', marginRight: '15px' }}>
                    ${product.price}
                  </span>
                  <Button variant="outline-secondary" style={{ color: '#fff', backgroundColor: '#0EABDF' }}>
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* MERCH Section */}
        <h2 className="text-center my-5">MERCH</h2>
        <Row className="gy-4">
          {merchArr.map((item, idx) => (
            <Col key={idx} xs={12} sm={6} md={6} lg={6}>
              <div className="text-center">
                <h5 className="mb-2">{item.title}</h5>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <span style={{ color: '#777777', marginRight: '15px' }}>
                    ${item.price}
                  </span>
                  <Button variant="outline-secondary" style={{ color: '#fff', backgroundColor: '#0EABDF' }}>
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* SEE THE CART Button */}
        <div className="text-center mt-5">
          <Button
            style={{
              backgroundColor: '#777777',
              borderColor: '#777777',
              color: 'white'
            }}
            size="lg"
          >
            See the Cart
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;
