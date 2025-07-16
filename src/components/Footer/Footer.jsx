import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className="bg-info py-4">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Brand */}
          <Col md={6}>
            <h1 className="text-white fw-bold m-0">The Generics</h1>
          </Col>

          {/* Right Column: Social Icons */}
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
              alt="YouTube"
              width="30"
              height="30"
              className="mx-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              alt="Spotify"
              width="30"
              height="30"
              className="mx-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              width="30"
              height="30"
              className="mx-2"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
