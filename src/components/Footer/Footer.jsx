import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div style={{ backgroundColor: '#56CCF2', padding: '20px 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col md={6}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '3rem' }}>
              The Generics
            </span>
          </Col>

          {/* Right Column */}
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
              alt="YouTube"
              width="30"
              height="30"
              style={{ margin: '0 10px' }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              alt="Spotify"
              width="30"
              height="30"
              style={{ margin: '0 10px' }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              width="30"
              height="30"
              style={{ margin: '0 10px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
