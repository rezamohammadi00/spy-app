import React, {useState } from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Config() {
  const [minute, setMinute] = useState(0);
  const [number, setNumber] = useState(0);
  const [spy, setSpy] = useState(1);

  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "brown" }}>
      <Row className="h-100 align-items-center justify-content-center">
        <Col xs={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>Number :</Form.Label>
              <Form.Control
                type="number"
                style={{ color: "white", backgroundColor: "#5c636a" }}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>spy :</Form.Label>
              <Form.Control
                type="number"
                style={{ color: "white", backgroundColor: "#5c636a" }}
                value={spy}
                onChange={(e) => setSpy(e.target.value)}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>Minute :</Form.Label>
              <Form.Control
                type="number"
                style={{ color: "white", backgroundColor: "#5c636a" }}
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
              />
            </Form.Group>
            <Button
              type="submit"
              style={{
                color: "white",
                backgroundColor: "#5c636a",
                borderColor: "white",
              }}
            >
              <Link
                to={`/game/${number}/${minute}/${spy}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                Start
              </Link>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
