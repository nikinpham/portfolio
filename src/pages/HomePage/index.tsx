import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './HomePage.css';

function HomePage() {
  return (
    <Container className="main">
      <Row>
        <Col className="d-flex">
          <div className="row nav-custom d-flex justify-content-between">
            <div className="nav-group-1 d-flex flex-column justify-content-start p-0">
              <Button className="nav-collapse">Menu</Button>
            </div>
            <div className="nav-group-2 d-flex flex-column justify-content-center p-0">
              <button>About me</button>
              <button>Portfolio</button>
              <button>Hire me</button>
              <button>Contact me</button>
            </div>
            <div className="nav-group-3 d-flex flex-column justify-content-end p-0">
              <button>Download my CV</button>
            </div>
          </div>
          <div className="person-avatar d-flex flex-column align-items-center justify-content-end">
            <h1 className="person-name text-center">Nikin Phạm</h1>
            <p className="person-title text-center">Graphic Designer / Software Engineer</p>
            <div className="person-social pb-5">
              <button>icon 2</button>
              <button>icon 3</button>
              <button>icon 4</button>
              <button>icon 1</button>
            </div>
          </div>
        </Col>
        <Col>
          <p>Test build version 2</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
