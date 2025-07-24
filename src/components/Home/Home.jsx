import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsPlayCircle } from "react-icons/bs";

const Home = () => {
  const tourData = [
    { date: "JUL 16", city: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL 19", city: "TORONTO, ON", venue: "BUDWEISER STAGE" },
    { date: "JUL 22", city: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JUL 29", city: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG 2", city: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
    { date: "AUG 7", city: "CONCORD, CA", venue: "CONCORD PAVILION" },
  ];

  return (
    <>
      {/* Album Section */}
      <div className="bg-secondary py-5 text-center">
        <Container>
          <div
  className="d-inline-block px-4 py-2"
  style={{
    border: "2px solid #56CCF2",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.5rem",
  }}
>
  Get our Latest Album
</div>


          <div className="mt-4">
            <Button
              variant="light"
              style={{
                backgroundColor: "#56CCF2",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                borderRadius: "30px",
              }}
            >
              <BsPlayCircle size={24} style={{ color: "#fff", marginRight: "8px" }} />
              Play Now
            </Button>
          </div>
        </Container>
      </div>

      {/* Tours Section */}
      <div className="bg-white py-5">
        <Container style={{ maxWidth: "80%" }}>
          <h2 className="text-center mb-4 fw-bold">TOURS</h2>
          {tourData.map((tour, index) => (
            <Row
              key={index}
              className="align-items-center py-3 border-top border-bottom"
            >
              <Col xs={12} md={2} className="text-md-start text-center fw-bold">
                {tour.date}
              </Col>
              <Col xs={12} md={3} className="text-md-start text-center">
                {tour.city}
              </Col>
              <Col xs={12} md={5} className="text-md-start text-center">
                {tour.venue}
              </Col>
              <Col xs={12} md={2} className="text-md-end text-center mt-2 mt-md-0">
                <Button style={{backgroundColor:"#56CCF2"}} variant="primary">BUY TICKETS</Button>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Home;
